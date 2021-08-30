export const state = () => ({
  global: {},
  hero: {},
})

export const getters = {
  global: state => state.global,
  hero: state => state.hero,
}

export const mutations = {
  setGlobal(state, data = {}) {
    state.global = data;
  },

  setHero(state, data = {}) {
    state.hero = data;
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { $strapi }) {
    const global = await $strapi.find('global');
    commit('setGlobal', global);
  }
}
