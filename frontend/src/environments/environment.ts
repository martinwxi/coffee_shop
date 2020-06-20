/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'udacityproject.eu', // the auth0 domain prefix
    audience: 'test', // the audience set for the auth0 app
    clientId: 'LIXFrbgkX7J5ShKN573mmfP00Ykau0qJ', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8080/login-results', // the base url of the running ionic application. 
  }
};
