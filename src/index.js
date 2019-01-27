import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import "index.scss";

let HelloWorld = () => {
  return <Fragment>
      <div>Hello to React World</div>
      <br/>
      <span>@</span>
      <img src="./images/AK_logo.jpg" style={{width:'300px', height:'200px'}}/>
  </Fragment>
}

ReactDOM.render(
  <HelloWorld/>,document.getElementById("root")
);