import Error404 from "../styles/Error404.css";

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
      <div className="containerError">
        <button className="containerError errorButton mb-4">Just go back, Dude.</button>
      </div>
      </div>
    </>
  );
};

export default Error404Page;
