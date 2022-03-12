const settings = {
  dev: {
    apiUrl: 'http://192.168.0.14:9000/api',
  },
  staging: {
    apiUrl: 'http://192.168.0.14:9000/api',
  },
  prod: {
    apiUrl: 'http://192.168.0.14:9000/api',
  },
};

const getCurrentSettings = () => {
  return settings.dev;
};

export default getCurrentSettings();
