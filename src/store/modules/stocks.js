import stocks from '../../data/stocks';

const state = {
  stocks: []
};

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS'(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  // Could be in Portfolio module, but shown here to show cross module actions
  buyStock: ({ commit }, order) => {
    // Since it is a global namespace, no extra code needed
    commit('BUY_STOCK', order);
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};
