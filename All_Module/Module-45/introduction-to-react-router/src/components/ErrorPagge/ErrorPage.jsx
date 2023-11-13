import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Opps!!!!</h2>
            <p>{error.statusText || error.messagge}</p>
            {
                error.status === 404 &&<div>
                    <h3>Page not  found</h3>
                    <p>Go back where you from</p>
                    <Link to={'/'}><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;