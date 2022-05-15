import React from 'react';
import "./../css/DashBoard.css";
import {Link} from "react-router-dom";
function DashBoard() {

    return (
        <>

            <div className='dash'>
                <div className='nav'>
                    <div className='quarter'> </div>

                    <Link className='profilePic' placeholder='Profile Pic Upload'>
                        Profile Pic <br />Upload
                        <br />
                        +

                    </Link>


                </div>
                <div className="mobile_info">
                    <div className="mobile_profile">
                  <button className='adddpic'> <img height="40px" src="https://img.icons8.com/ios-filled/344/apple-camera.png" alt="" /></button>
                  <p className='name'>Neil Jain</p>
                    </div>
                    <input className='mob_skill' type="text" placeholder='Add Skills'  />
                    <p className='mob_Bio'>Bio</p>
                    <input  className='paragraph' type="text" placeholder='Type...'  />
                    <Link to="" id='mobile_button'>Let's Go</Link>
                    
                </div>

                <div className='info'>
                    <input className='skills' placeholder=" + Add Skills" />

                    <input className='bio' placeholder='Add Bio' title='ADD' />

                    <Link to='' className='confirm'>Confirm</Link>

                    <Link to='' className='back'> Back &#62; </Link>
                    <div className='dot_side'> </div>
                    <div className='quarter_side'></div>



                </div>
           </div>   
        </>
    );

}
export default DashBoard;