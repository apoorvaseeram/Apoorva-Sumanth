import React, { Component, Fragment } from "react";

class Training extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h3> Welcome to REACT Training </h3>
          <input type="radio" />
          <label>Props and Components</label>
          <br></br>
          <input type="radio" />
          <label>LifeCycle Methods</label>
          <br></br>
          <input type="radio" />
          <label>Ajax Calls</label>
          <br></br>
          <input type="radio" />
          <label>Redux</label>
          <br></br>
          <input type="submit" value="Submit" />
        </div>
        <hr />
      </Fragment>
    );
  }
}

export default Training;
