const applyConfig = (config) => {
  config.settings.isMultilingual = false;
  config.settings.supportedLanguages = ['pt-br'];
  config.settings.defaultLanguage = 'pt-br';

  // The '@plone-collective/volto-authomatic' addon (opt-in via
  // FRONTEND_ADD_PACKAGES/FRONTEND_ADD_ADDONS) already registers its own
  // '/login' route and reads its Login component from
  // 'src/customizations/@plone-collective/volto-authomatic/components/Login/Login.jsx'
  // via Volto's addon-shadowing convention. That customization only takes
  // effect once the addon is actually installed and listed in
  // volto.config.js, so it must not be imported directly here — doing so
  // would break the build whenever the addon isn't installed.
  return config;
};

export default applyConfig;
