import React from 'react';
import "./../css/Selection.css";
import {Link} from "react-router-dom";
function Selection(){
 
    return(
    <>
    <div className='main'>
      
        <div className='quarter'></div>
      <section className='registration'>
          <div className='title'> <div className='logo'></div> <span>  Preneurship </span></div>
          <div className='poster'></div>
          <div className='form'>
              <h2>Are You a ..</h2>
          <form action="/action_page.php">
 
  
  <select id="country" value="country" >
  <option  value='Select' >  📁 Select</option>
  <option value="Nepal" >Nepal</option>
  <option  value="China">China</option>
  <option value='Japan' >Japan</option>
</select>

</form> 
<Link to="" id='next'>Next&#62;</Link>
<Link  to="" id='back'>Back &#62;</Link>
          </div>
      </section>
    <div className='circle'></div>
    </div>
    </>
    );

}
export default Selection;