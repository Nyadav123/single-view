import React from 'react';
import "./../css/SingleView-Register.css";
import {Link} from "react-router-dom";
function Register(){

    return(
    <>
   
    <div className='mobile_reg'>
      

      <div className='nkposter'></div>
      <p className='mobpara'> Welcome to the  <br /> <span> world </span>  of <span>talents!</span> </p>
     
        <form className='mobform' action="">
          <input type="text" placeholder='Enter Your Name'/>
          <input type="number"  placeholder='Enter Your date of Birth'/>
          <input type="text" placeholder=' City ,Country' />
        </form>
        <Link to='/single-view-success' className='mobnext'>Next &#60;</Link>
       
   
    </div>
    <div className='topmain'>
   
    <div className='main'>
        <h2 className='heading'>Welcome to the world of talents!</h2>
        <div className='quarter'></div>
      
      <section className='registration'>
          <div className='title'> <div className='logo'></div> <span>  Preneurship </span></div>
          <div className='poster'></div>
          <div className='form'>
              <h2>Registration</h2>
 <form action="/action_page.php" className='deskform'>
 
  <input type="text" id="fname" name="fname" value="Name" />

  <input type="text" placeholder='Date of Birth'  />
  <select id="country" value="country" >
  <option  value='India' >India</option>
  <option value="Nepal" >Nepal</option>
  <option  value="China">China</option>
  <option value='Japan' >Japan</option>
</select>

</form> 
<Link to='/single-view-success' id='next'>Next &#60;</Link>
          </div>
      </section>
    <div className='circle'></div>
    </div>
    </div>
    
    </>
    );

}
export default Register;