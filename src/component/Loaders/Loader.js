import { PulseLoader } from "react-spinners";

const styles = {
  margin: "1rem",
};
function Loader({ loaderStyle }) {

  return (
    <div className="sweet-loading">
      <PulseLoader
        color='darkblue'
        cssOverride={loaderStyle ? loaderStyle : styles}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.8}
      />
    </div>
  );
}

export default Loader;