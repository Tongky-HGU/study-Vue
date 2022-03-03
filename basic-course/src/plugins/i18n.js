export default {
  install: (app, option) => {
    app.config.globalProperties.$translate = (key) => {
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, option);
    };
  },
};
