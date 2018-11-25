const trackableList = {
  state: {
    loading: false,
    trackables: {
      id001: {
        id: 'id001',
        name: 'Meditation',
        value: 0,
      },
      id002: {
        id: 'id002',
        name: 'Running distance',
        value: 0,
      }
    },
    list: ['id001', 'id002']
  },
  getters: {
    trackableListItems: state => {
      return state.list.map(id => state.trackables[id]);
    },
    selectedTrackable: state => {
      debugger;
      return 'sdfsdf'
    }
  }
  // mutations: { ... },
  // actions: { ... },
  // getters: { ... }
}

export default trackableList;