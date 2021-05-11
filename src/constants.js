const API_BASE_URL = process.env.VUE_APP_GLOBAL_URL;
const VUE_APP_FRONT_GLOBAL_URL = process.env.VUE_APP_FRONT_GLOBAL_URL;
const OAUTH2_REDIRECT_URI = VUE_APP_FRONT_GLOBAL_URL;

export default Object.freeze({
    SESSION_STORAGE_TOKEN: 'token'
});

