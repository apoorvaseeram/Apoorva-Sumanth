import React from "react";

const EktaParty = () => {
  return (
    <div>
      <h3>Welcome to Ekta-Party</h3>
      <h3>Submit the following details</h3>
      <form>
        <label for="fname">First name: </label>
        <input type="text" id="fname" name="fname" />
        <br />
        <br />
        <label for="lname">Last name: </label>
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <hr />
    </div>
  );
};

export default EktaParty;
