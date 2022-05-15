import React from "react";
import "./../css/Interested.css";
import {Link} from "react-router-dom";
function Interested() {
  return (
    <>
      <div className="Interes">
        <div className="Inbox">
          <div className="inlogo"></div>
          <p>Prenuership</p>

          <div className="Inposter"></div>
          <div className="InForm">
            <h3>Are you interested In ?</h3>
            <select name="investor" className="Inselect">
              <option value="select">Select</option>
              <option value="saab">Saab</option>
            </select>
          </div>
        </div>

        <div className="INPerExsidenav">
          <div className="INPerbuttons">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
      <div className="InteMob">
        <h3>company Name</h3>
        <div className="Circlebox"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          mollitia, voluptatum architecto necessitatibus tempore reprehenderit!
          Sed tempore voluptatum impedit laudantium magni fugit delectus
          molestiae iure!
        </p>
        <div className="vdo"></div>
        <div className="vdo"></div>
        <Link to="">connect</Link>
      </div>
    </>
  );
}
export default Interested;
