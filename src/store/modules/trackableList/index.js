import * as mock from '../../mock';
import * as mT from './mutationTypes';
import * as aT from './actionTypes';

const state = {
  isLoading: false,
  trackables: {},
  list: []
};

const mutations = {
  [mT.SET_TRACKABLE_LIST_LOADING] (state, isLoading) {
    state.isLoading = isLoading;
  },
  [mT.SET_TRACKABLE_LIST] (state, trackables) {
    state.list = Object.keys(trackables);
    state.trackables = trackables;
  },
  [mT.CLEAR_TRACKABLE_LIST] (state) {
    state.trackables = {};
    state.list = [];
  },
};

const actions = {
  async [aT.GET_TRACKABLE_LIST] (context) {
    context.commit(mT.SET_TRACKABLE_LIST_LOADING, true);
    await setTimeout(() => {
      context.commit(
        mT.SET_TRACKABLE_LIST,
        mock.trackables
      );
      context.commit(mT.SET_TRACKABLE_LIST_LOADING, false);
    }, 300);
  },
  [aT.CLEAR_TRACKABLE_LIST] (context) {
    context.commit(mT.CLEAR_TRACKABLE_LIST);
  }
};

const getters = {
  trackableListItems (state) {
    return state.list.map(id => state.trackables[id]);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
