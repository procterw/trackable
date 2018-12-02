import * as mock from '../../mock';
import * as mT from './mutationTypes';
import * as aT from './actionTypes';

const state = {
  isLoading: false,
  questions: {},
  date: '',
  questionList: [],
};

const mutations = {
  [mT.SET_SURVEY_LOADING] (state, isLoading) {
    state.isLoading = isLoading;
  },
  [mT.SET_SURVEY] (state, payload) {
    state.questionList = Object.keys(payload.questions);
    state.questions = payload.questions;
    state.date = payload.date;
  },
  [mT.CLEAR_SURVEY] (state) {
    state.questions = {};
    state.questionList = [];
  },
};

const actions = {
  async [aT.GET_SURVEY] (context) {
    context.commit(mT.SET_SURVEY_LOADING, true);
    await setTimeout(() => {
      context.commit(
        mT.SET_SURVEY,
        {
          questions: mock.questions,
          date: '2018-11-28',
        }
      );
      context.commit(mT.SET_SURVEY_LOADING, false);
    }, 300);
  },
  [aT.CLEAR_SURVEY] (context) {
    context.commit(mT.CLEAR_SURVEY);
  }
};

const getters = {
  surveyQuestions (state) {
    return state.questionList.map(id => state.questions[id]);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
