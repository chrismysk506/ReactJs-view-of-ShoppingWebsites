
import React from 'react'
import mainLogo from'../Assets/Images/zag.jpg'

export default function Card(props) {
    var {name,price,descript,image}=props;
   
  


    return (
        <div>
        <div className="cardContainer">
      
        <img alt="img" src={image}/>
           <h1 style={{fontSize:'25px'}}>{name}</h1>
            <h1 style={{fontSize:'20px'}}>{price}</h1>
           <p style={{fontSize:'15px'}}>{descript}</p>
           <button className="carddetails"> Details</button>
        </div>
        </div>
    )
}
