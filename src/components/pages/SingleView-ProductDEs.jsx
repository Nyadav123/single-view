import React from "react";
import "./../css/ProductDescri.css";
import {Link} from "react-router-dom";
function Product() {
  return (
    <>
      <div className="PerDetails">
        <div className="leftdiv">
          <div className="Divnav">
            <div className="divPoster"></div>
            <div className="Divtext">
              <h3>Company Name</h3>
              <br />
              <h2>OZONE PVT .LIMT</h2> <br />
              <h3>About</h3> <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                quibusdam adipisci distinctio esse eum id reprehenderit
                assumenda sequi quasi amet architecto illo eius explicabo animi,
                repellat officia, fuga maxime velit ut totam corporis fugiat
                laborum neque? Quibusdam eos magni magnam. Placeat quae ducimus
                facilis, provident ab Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Non architecto libero dolore corporis
                suscipit? Voluptates rem, accusantium delectus quae animi
                numquam maxime, provident nihil optio est eos illum fuga
                distinctio. debitis, ad esse voluptates laudantium quam
                quisquam, libero nihil dolores corporis exercitationem
                asperiores sunt!
              </p>
              <Link to="" className="divback">Back</Link>
            </div>
          </div>
        </div>
        <div className="midDiv">
          <h2>Product description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reiciendis dicta vero pariatur explicabo tenetur eos ratione in,
            molestias veniam veritatis cum voluptatum, facere unde obcaecati sit
            quia ducimus debitis aperiam deserunt? Exercitationem placeat
            similique accusantium animi eligendi voluptas id!
          </p>
          <button>Like</button><button>comment</button>
          <button className="Midconnect">connect</button>
          <h2>Product Image</h2>
          <div className="ProductImg">
         
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
          </div><h2>Watch video</h2>
          <div className="ProductImg">
            
            <br />
            <div className="img"></div>
            <div className="img"></div>
            <div className="img"></div>
          </div>
        </div>
        <div className="PerExsidenav">
          <div className="Perbuttons">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
      <div className="Prodmob">
        <input type="text" placeholder="search"/>
        <div className="Mobname"> <h4>company Name</h4></div>
        <div className="Mobname"> <h4>company Name</h4></div>
        <div className="Mobname"> <h4>company Name</h4></div>
        <div className="Mobname"> <h4>company Name</h4></div>
        <div className="Mobname"> <h4>company Name</h4></div>
        <div className="Mobname"> <h4>company Name</h4></div>
      </div >
    </>
  );
}
export default Product;
