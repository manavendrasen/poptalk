type CONFIG_OBJECT = {
  ENV: string;
  PORT: number;
  HOST: string;
  BEARER_TOKEN:string,
};

const DEVELOPMENT: CONFIG_OBJECT = {
  ENV: "DEVELOPMENT",
  HOST: "localhost",
  BEARER_TOKEN:"AAAAAAAAAAAAAAAAAAAAADOEGAEAAAAAwbH7nl%2FSJcoDukxh92DyXdvaj0o%3DM4lkEmkmXnl69sfMp39VUUIlvcFcM5KaE89fkUqz0H4wL8E2sp",
  PORT: 5000,
};

const PRODUCTION: CONFIG_OBJECT = {
  ENV: "PRODUCTION",
  HOST: "", BEARER_TOKEN:"AAAAAAAAAAAAAAAAAAAAADOEGAEAAAAAwbH7nl%2FSJcoDukxh92DyXdvaj0o%3DM4lkEmkmXnl69sfMp39VUUIlvcFcM5KaE89fkUqz0H4wL8E2sp",PORT: 5000,
};

const setConfig = (environment: string): CONFIG_OBJECT => {
  let obj;
  switch (environment) {
    case "DEVELOPMENT":
      obj = DEVELOPMENT;
      break;
    case "PRODUCTION":
      obj = PRODUCTION;
      break;
    default:
      obj = DEVELOPMENT;
      break;
  }
  return obj;
};

export default setConfig;
