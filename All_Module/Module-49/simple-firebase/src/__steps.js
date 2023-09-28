/**
 * ------------------------------------------------------------------
 * INITIAL SETUP
 * -------------------------------------------------------------------------
 * 1. visit: console.firebase.google.com
 * 2. create a project (skip google analytics)
 * 3. register app (crreate config)
 * 4. install firebase:: npm install firebase
 * 5. add config file to your project
 * 6. dangger: do not publish or makke firebase config to public by pushing those to github 
 * 

------------------------------------------
integration
-------------------------------------------


 * 7. go to docs > build > authentication > web > get started
 * 8. export app from the firebase.config.js file: export default app
 * 9. loggin.jsx : import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 * 
 * -----------------------------
 * PROVIDER SETUP
 * -----------------------------
 * 
 * 11. import googleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate/enable sign-in method (google, facebook, twitter etc)
 * 14. [vite]: change 127.0.0.1 to localhost
 * 
 * 
 * ---------------------------
 * More Auth Provider (create app, provide redirect url, client id, client secret)
 */