import React from "react";
import "./../css/Personal2.css";
import {Link} from "react-router-dom";
function Personal() {
  return (
    <>
    <div className="Permob">
      <Link to="">Home</Link>
      <div className="Mobtxt"></div>
      <div className="Mobtxt"></div>
      <div className="footButton"> 
        <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>3</button> </div>
     
    </div>
      <div className="Perexplore">
        <div className="PerexNav">
          
          <div className="Navposter"></div>
        </div>
        <div className="PerForm">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="add bio"/>
          <input type="text"  placeholder="Add Skills"/>
          <input type="text" placeholder="Add educational wualification"/> 
          <input type="text" placeholder="Add additional field" />
          <Link to="" className="PerBack"> Back &#62;</Link></div>
        <div className="PerExsidenav">
          <div className="Perbuttons">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
       
      </div>
    </>
  );
}
export default Personal;
