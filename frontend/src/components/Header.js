import React from 'react'
import {Image,View} from 'react-bootstrap'

const Header = () => {
  var size = require('window-size');
  console.log(size);
  var sectionStyle = {
    margin : "60px",
    backgroundImage: "url(/images/backgroundimageheader.JPG)"
  
  };
    return (
        <header>
          <Image
      resizeMode={"cover"}
      style={sectionStyle}
   /> 
           
        </header>
    )
}
export default Header