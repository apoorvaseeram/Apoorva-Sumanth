import React from "react";

const Header = () => {
  
  return (
          
          <nav>
            <table>
              <tr>
                <th class="thclass"><a href="google.com">Home</a></th>
                <th class="thclass"><a href="google.com">About</a></th>
                <th class="thclass"><a href="google.com">Collections</a></th>
                <th class="thclass"><a href="google.com">Sale</a></th>
                <th class="thclass"><a href="google.com">Gallery</a></th>
                <th class="thclass"><a href="google.com">Sale</a></th>
                <th class="thclass"><a href="google.com">Contact</a></th>
              </tr>
            </table>
            <div>
              <h2>
                {" "}
                   <b> Welcome to our React Application</b>
              </h2>
              <hr></hr>
            </div>
          </nav>
  );
};

export default Header;
