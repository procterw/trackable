import Vue from "vue";
import Vuex from "vuex";
import trackableList from './modules/trackableList';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    trackableList,
  },
});

