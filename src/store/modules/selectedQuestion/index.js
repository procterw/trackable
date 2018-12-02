import * as mock from '../../mock';
import * as mT from './mutationTypes';
import * as aT from './actionTypes';

const state = {
  isLoading: false,
  properties: {},
};

const mutations = {
  [mT.SET_SELECTED_QUESTION_LOADING] (state, isLoading) {
    state.isLoading = isLoading;
  },
  [mT.SET_SELECTED_QUESTION] (state, payload) {
    state.properties = payload;
  },
  [mT.CLEAR_SELECTED_QUESTION] (state) {
    state.properties = {};
  },
};

const actions = {
  async [aT.GET_SELECTED_QUESTION] (context, id) {
    context.commit(mT.SET_SELECTED_QUESTION_LOADING, true);
    await setTimeout(() => {
      context.commit(
        mT.SET_SELECTED_QUESTION,
        mock.questions[id]
      );
      context.commit(mT.SET_SELECTED_QUESTION_LOADING, false);
    }, 300);
  },
  [aT.CLEAR_SELECTED_QUESTION] (context) {
    context.commit([mT.CLEAR_SELECTED_QUESTION]);
  }
};

export default {
  state,
  mutations,
  actions
};
