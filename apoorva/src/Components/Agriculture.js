import React, { Component, Fragment } from "react";

class Agriculture extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h3> Welcome to the Agriculture Page On Our Application.</h3>
          <h4>Choose what kind of crop we want to cultivate: </h4>
          <input type="radio" />
          <label>Rice</label>
          <br></br>
          <input type="radio" />
          <label>Wheat</label>
          <br></br>
          <input type="radio" />
          <label>Maize</label>
          <br></br>
          <input type="radio" />
          <label>Corn</label>
        </div>
        <hr />
      </Fragment>
    );
  }
}

export default Agriculture;
