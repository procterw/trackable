import Vue from "vue";
import Vuex from "vuex";
import trackableList from './modules/trackableList';
import selectedTrackable from './modules/selectedTrackable';

Vue.use(Vuex);

console.log(trackableList, selectedTrackable)

export default new Vuex.Store({
  modules: {
    trackableList,
    selectedTrackable
  },
});
