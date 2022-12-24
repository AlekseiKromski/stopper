import { createStore } from 'vuex'

export default createStore({
  state: {
    settings: {
      axios: null
    },
    form: {
      region: null,
      stop: null
    }
  },
  getters: {
    getAxios(state){
      return state.settings.axios;
    },
    getRegion(state){
      return state.form.region;
    }
  },
  mutations: {
    setAxiosMutation(state, axios){
      state.settings.axios = axios
    },
    setFormMutation(state, formObject){
      state.form[formObject.field] = formObject.value;
    }
  },
  actions: {
    setAxios(context, axios){
      context.commit("setAxiosMutation", axios)
    },
    setForm(context, formObject){
      context.commit("setFormMutation", formObject)
    }
  },
  modules: {

  }
})
