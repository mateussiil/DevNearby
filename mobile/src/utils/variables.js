import Constants from 'expo-constants';

export const prodUrl = "https://someapp.herokuapp.com";

const ENV = {
  dev: {
    BASE_URL: "http://192.168.192.1:3333"
  },
  staging: {
    BASE_URL: prodUrl
  },
  prod: {
    BASE_URL: prodUrl
  }
};

function getEnvVars(env = "", variable="BASE_URL") {
  if (env === null || env === undefined || env === "") return ENV.dev[variable];
  if (env.indexOf("development") !== -1) return ENV.dev[variable];
  if (env.indexOf("staging") !== -1) return ENV.staging[variable];
  if (env.indexOf("production") !== -1) return ENV.prod[variable];
}

export default getEnvVars(Constants.manifest.releaseChannel);
