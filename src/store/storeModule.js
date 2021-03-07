export default {
  state: {
    show: false,
    showPrivacy: false,

    color: null,
    innerText: null,
    cookieFields: null,
    privacyData: null,

    lang: null,
  },

  getters: {
    show: (state) => state.show,
    color: (state) => state.color,
    showPrivacy: (state) => state.showPrivacy,
    innerText: (state) => state.innerText,
    cookieFields: (state) => state.cookieFields,
    privacyData: (state) => state.privacyData,
    lang: (state) => state.lang,
  },

  mutations: {
    SET_SHOW_PRIVACY: (state, value) => {
      state.showPrivacy = value;
    },
    SET_COLOR: (state, value) => {
      state.color = value;
    },
    SET_INNER_TEXT: (state, value) => {
      state.innerText = value;
    },
    SET_COOKIE_FIELDS: (state, value) => {
      state.cookieFields = value;
    },
    SET_PRIVACY_FIELDS: (state, value) => {
      state.privacyData = value;
    },
    SET_LANG: (state, value) => {
      state.lang = value;
    },
  },

  actions: {},
};
