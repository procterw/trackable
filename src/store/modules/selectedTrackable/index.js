import * as mock from '../../mock';
import * as mT from './mutationTypes';
import * as aT from './actionTypes';

const state = {
  isLoading: false,
  properties: {},
};

const mutations = {
  [mT.SET_SELECTED_TRACKABLE_LOADING] (state, isLoading) {
    state.isLoading = isLoading;
  },
  [mT.SET_SELECTED_TRACKABLE] (state, payload) {
    state.properties = payload;
  },
  [mT.CLEAR_SELECTED_TRACKABLE] (state) {
    state.properties = {};
  },
};

const actions = {
  async [aT.GET_SELECTED_TRACKABLE] (context, id) {
    context.commit(mT.SET_SELECTED_TRACKABLE_LOADING, true);
    await setTimeout(() => {
      context.commit(
        mT.SET_SELECTED_TRACKABLE,
        mock.trackables[id]
      );
      context.commit(mT.SET_SELECTED_TRACKABLE_LOADING, false);
    }, 300);
  },
  [aT.CLEAR_SELECTED_TRACKABLE] (context) {
    context.commit([mT.CLEAR_SELECTED_TRACKABLE]);
  }
};

export default {
  state,
  mutations,
  actions
};
