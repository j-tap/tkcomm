export const state = () => ({
  global: {},
})

export const getters = {
  global: state => state.global,
}

export const mutations = {
  setGlobal(state, data = {}) {
    state.global = data;
  }
}
