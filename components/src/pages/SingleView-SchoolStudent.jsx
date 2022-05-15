import React from "react";
import "./../css/SchoolStudent.css";
import {Link} from "react-router-dom";
function SchoolStudent() {
  return (
    <>
    <div className="StMobile">
      

<h2 className="StMobHead">Almost Done! ✅</h2>

<div className="MobForm">
    <select name="edu" >
    <option value="">📕 Current Qualification</option>
    <option value="Matric">Matric</option>
    <option value="Matric">Matric</option>
    
</select>
<select name="CurrQuq" >
    <option value="">📖Qualification Status </option>
    <option value="purs">Persuing</option>

   
</select>
<select name="Acad" >
    <option value="Academy">🎓Academy</option>
    <option value="year">2024</option>
   
    
</select>
</div>
<Link to="" id="StMobNext">Next &#60;</Link>

    </div>
    <div className="quarterC"></div>
      <div className="smallC1"></div>
      <div className="smallC2"></div>

      <div className="bixBox">
        <div className="SchoolStudentFrom">
          <h3>Almost Done! ✅</h3>
          <div className="StFrom">
          <select name="edu" >
    <option value="">📕 Current Qualification</option>
    <option value="Matric">Matric</option>
    <option value="Matric">Matric</option>
    
</select>
<select name="CurrQuq" >
    <option value="">📖Qualification Status </option>
    <option value="purs">Persuing</option>

   
</select>
<select name="Acad" >
    <option value="Academy">🎓Academy</option>
    <option value="year">2024</option>
   
    
</select>
<Link to="" id="Stnext">Next</Link>
<Link to="" id="StBack">Back &#62;</Link>
</div>
        </div>
        <div className="StudentPoster"></div>
       
      </div>
      <div className="bigC"></div>
      
    </>
  );
}
export default SchoolStudent;
