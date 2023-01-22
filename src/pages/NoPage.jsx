import * as Constants from "../components/Navbar/Constants.jsx";
import {Link} from "react-router-dom";

const NoPage = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to={Constants.HOME}>Home</Link>
            <br/>
            <Link to={Constants.CONFIGURATION}>Configuration</Link>
            <br/>
            <Link to={Constants.QUEUE}>Queue</Link>
        </div>
    );
};

export default NoPage;