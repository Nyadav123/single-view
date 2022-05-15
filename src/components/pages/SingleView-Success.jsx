import React from 'react';
import "./../css/DashBoard.css";
import {Link} from "react-router-dom";
function Success() {

    return (
        <>
<div className='bottom'>
<div className='success'>
    <div className='check'></div>
    <p className='p1'>
        Success!
    </p>
    <p className='p2'> Your account has been created</p>
</div>
<Link to='/' className='explore'>Start exploring</Link>
<div className='big_top' ></div>

<div className='big_down' ></div>
<div className='c1'></div>
<div className='c2'></div>
<div className='c3'></div>

</div>

</>
);

}
export default Success;