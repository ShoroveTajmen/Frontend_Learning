/***
 * install jsonwebtoken
 * jwt.sign(payload, secret, {exxpiresIn:})
 * token client
 */


/***
 * how to store token in the client side
 * --------------------------------------
 * memory --> ok type
 * local storage --> ok type (xss)
 * cookies: http only
 */


/***
 * 1. set cookies with http only
 * 2. for development secure: false,
 * 3. cors setting-->
 * app.use(cors(corsOptions, {
    origin: ['http://localhost:5173'],
    credentials: true
}));
 * 4. client side axios setting
 5. in axios set withCredentials: true
 */


 /**
  * 1. to send cookies from the client make sure you addeed withCredentials true for the api call using axios
  * 2. use cookie parser as middleware
  */