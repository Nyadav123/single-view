import React from "react";
import "./../css/send6.css";
import {Link} from "react-router-dom";
function Send() {
  return (
    <>
      <div className="NStInteres">
        <div className="NStInbox">
        <div className="Nsdp">
<div className="NSendpost"></div>
<div className="NSendpost"></div></div>
<p className="Nsdname">John deo</p>
        <p className="Nsdname">John deo</p>
        <input type="text" name="" id="Nyourtxt"  placeholder="type ypur text here"/>
        </div>
        <Link to="" className="NBtnsend">Send</Link>
        <Link to="" className="NSbtnback">Back</Link>
        
       
        <div className="NStINPerExsidenav">
          <div className="NStINPerbuttons">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
       
      </div>
     <div className="NSettMob">
       <div className="upnav">

       </div>
       <div className="MobSd">
         <div className="mdpic"></div>
         <input type="text" name="" id="mdinput" placeholder="type your text"/>
         <Link to="" className="BtnMdsend">Send</Link>
       </div>
      
     </div>
    </>
  );
}
export default Send;
