import Error404 from "../styles/Error404.css";
import Home from "./Home";
import { Link } from 'react-router-dom'

const Error404Page = () => {
  return (
    <>
    <div>
      <div className="containerError">
        <span className="dots">Error 404: Page not found...</span>
      </div>
      <div className="containerError">
        <span className="losingHope">
          Congrats! You just broke all our hope and dreams.
        </span>
      </div>
      <div className="containerError">
        <span className="thanksALot">THANKS A LOT!</span>
      </div>
      <div className="containerError ">
      <Link className="errorButton" to="/home">Just go back, dude.</Link>
      </div>
      </div>
    </>
  );
};

export default Error404Page;
