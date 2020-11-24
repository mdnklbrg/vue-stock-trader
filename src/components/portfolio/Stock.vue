<template>
  <div class="col-md-4 colo-sm-6">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price | currency }} | quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left form-group" :class="{ 'has-error': insufficientQuantity }">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-danger"
            @click="sellStock"
            :disabled="quantity <= 0 || !Number.isInteger(+quantity) || insufficientQuantity"
          >{{ insufficientQuantity ? 'Insufficient quantity' : 'Sell' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({ placeSellOrder: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      // console.log(order);
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  }
};
</script>
