import Realm from "realm";

let app;

export function getRealmApp() {
    if (app === undefined) {
      const appId = "cithara-jnxhf"; 
      const appConfig = {
        id: appId,
        timeout: 10000,
        app: {
          name: "default",
          version: "0",
        },
      };
      app = new Realm.App(appConfig);
    }
    return app;
  }