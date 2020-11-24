import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;
        const stocks = data.stocks;

        const portfolio = {
          funds,
          stockPortfolio
        };

        // console.log(data);
        // console.log(portfolio);

        commit('SET_PORTFOLIO', portfolio);
        commit('SET_STOCKS', stocks);
      }
    });
}
