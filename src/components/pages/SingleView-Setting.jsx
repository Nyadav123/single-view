import React from "react";
import "./../css/Setting.css";
function Setting() {
  return (
    <>
      <div className="StInteres">
        <div className="StInbox">
    <div className="Stinlogo"></div>
    <p>Prenuership</p>


 <div className="StInForm">
   <h3>Settings</h3>
   <select name="investor" className="StInselect">
  <option value="select">Contact Us</option>
  <option value="saab">Saab</option>
  
</select>
   <select name="investor" className="StInselect">
  <option value="select">Change language</option>
  <option value="saab">Saab</option>
  
</select>
   <select name="investor" className="StInselect">
  <option value="select">Payment</option>
  <option value="saab">Saab</option>
  
</select>
 </div>
        </div>
       
        <div className="StINPerExsidenav">
          <div className="StINPerbuttons">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
       
      </div>
     <div className="SettMob">
       <div className="Picbox"></div>
       <h3>Add profile pic</h3>
       <div className="txtmob"></div>
       <div className="txtmob"></div>
       <div className="txtmob"></div>
       <select name="" id="">
         <option value="">id</option>
       </select>
     </div>
    </>
  );
}
export default Setting;
