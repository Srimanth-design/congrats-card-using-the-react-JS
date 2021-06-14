const element = (
  <div className="main-bg">
    <h1 className="main-head">Congratulations</h1>

    <div className="card-container" text-align="center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img-size"
      />

      <h1 className="second-head">Kiran V</h1>
      <p className="para">
        Vishnu Institute of Computer Education and Technology,
        <br /> Bhimavaram
      </p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img-size"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
