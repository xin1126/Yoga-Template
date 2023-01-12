const defaultState = () => {
  return {
    schedule: 1,
    course: "",
    degree: null,
    user: {},
  };
};

export const state = defaultState;

export const actions = {
  getSchedule({ commit }, schedule) {
    commit("SetSchedule", schedule);
  },
  getCourse({ commit }, course) {
    commit("SetCourse", course);
  },
  getDegree({ commit }, degree) {
    commit("SetDegree", degree);
  },
  getUser({ commit }, user) {
    commit("SetUser", user);
  },
};

export const mutations = {
  SetSchedule(state, payload) {
    state.schedule = payload;
  },
  SetCourse(state, payload) {
    state.course = payload;
  },
  SetDegree(state, payload) {
    state.degree = payload;
  },
  SetUser(state, payload) {
    state.user = payload;
  },
  ResetStore(state) {
    const initState = defaultState();
    Object.keys(initState).forEach((key) => {
      state[key] = initState[key];
    });
  },
};
