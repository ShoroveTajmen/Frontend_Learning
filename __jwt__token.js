/****
 * ---------------------
 *     MAKE API SECURE
 * ---------------------
 * The person who should have
 * 
 * concept:
 * 1. assign two tokens for each person(access token, refresh token)
 * 2. access token contains: user identification (email, role etc). valis for a 
 * shorter time
 * 3.refresh token is used: to recreate an access token that was expired.
 * 4.if refresh is invallid then logout the user
 */

/****
 * 1. jwt ---> json web token
 * 2. ggenerate a token by using jwt.token
 * 3. create api set to cookie. http only, secure, sameSite
 * 4. from client side: axios withCredentials true
 * 5. cors setup origin and credentials:: true
 */


/***
 * 1. for secure api calls
 * 2. server side: install cookie parser and use it as a middleware
 * 3. req.cookies
 * 4. on the client side: make api calls usingg axios withCredentials true / or credentials include while using fetch
 */