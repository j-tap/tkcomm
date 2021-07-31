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

export const actions = {
  async nuxtServerInit ({ commit }, { $strapi }) {
    const global = await $strapi.find('global');
    commit('setGlobal', global);
  }
}
