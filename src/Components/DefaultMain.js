import Button from "@mui/material/Button";
import img1 from "../Assets/Images/placeholder-img-1.png";
import img2 from "../Assets/Images/placeholder-img-2.png";

const DefaultMain = () => {
  return (
    <div className="default-main wrapper">
      <div className="main-text">
        <div className="main-header">
          <h1>
            All the notes you need
            <br />
            <span className="accent-text">Easier</span> than ever
          </h1>
        </div>
        <div className="main-subtext">
          <p>
            Access all your essential notes effortlessly.
          </p>
          <p>Simplify your learning journey like never before.</p>
        </div>
        <Button variant="contained" size="medium"
          sx={{
            color: '#fdf6f7',
            backgroundColor: '#c1252d',
            marginTop: '1rem',
            ':hover': {
                background: 'hsl(357, 68%, 35%)',
            }
          }}>Start now</Button>
      </div>
      <div className="main-btn">
      </div>
      <div className="img-display">
        <img
          src={img1}
          alt="Example cheatsheet"
          className="offset-img"
          id="offset-img-1"
        ></img>
        <img
          src={img2}
          alt="Example cheatsheet"
          className="offset-img"
          id="offset-img-2"
        ></img>
      </div>
    </div>
  );
};

export default DefaultMain;
