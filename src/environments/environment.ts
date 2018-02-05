// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyByL_H9kLkLnPhm1jU7nOJ92lR5V6x1MjU",
    authDomain: "smartmeter-v1.firebaseapp.com",
    databaseURL: "https://smartmeter-v1.firebaseio.com",
    projectId: "smartmeter-v1",
    storageBucket: "smartmeter-v1.appspot.com",
    messagingSenderId: "562855813759"
  }

};
