import React from 'react';
import './../css/personaldetails.css';
import {Link} from "react-router-dom";
function PersonalDetails(){
  
    return(
    <>
  <div className='topmain'>
<div className='mobPer'>
  <div className='Img'>
    

  </div>
  <form action="" className='mobform'>
<input type="text" placeholder='Enter your mail id'/>
<input type="number" placeholder='Enter your phone number' />
<input type="password" placeholder='password' />

  </form>
  <Link to="" className='mobsign'>Sign Up</Link>
</div>

   
    <div className='main'>
        <h2 className='heading'>Welcome to the world of talents!</h2>
        <div className='quarter'></div>
      <section className='registration'>
          <div className='title'> <div className='logo'></div> <span>  Preneurship </span></div>
          <div className='poster'></div>
          <div className='form'>
              <h2>Personal Details</h2>
 <form action="/action_page.php">
 
  <input type="text"  placeholder='✉️ Email id' /> 

  <input type="text"   placeholder='📞 Phone No' /> 
  <input type="password"   placeholder=' 🔑Password' />
 

</form> 
<input type="submit" value="Sign up >" id='next' />
<Link to="" className='btn'> Back &#62;</Link>
          </div>
      </section>
    <div className='circle'></div>
    </div>
    </div>
    </>
    );

}
export default PersonalDetails;