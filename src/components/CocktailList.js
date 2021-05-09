import React from 'react'
import Card from './Card'

export default function CocktailList(props) {
   const {listlength}=props;
   var item=[];
   
  var itemslist=[
    {
      id:1,
      Name:"ZAGG InvisibleShield Glass Elite Anti-Glare Plus ",
      price:"INR 2497.0",
      descript:"anti-glare: a matte finish blocks light from reflecting off your device screen anti-fingerprint: keep you device clear of annoying fingerprints and smudges with our smudge resistant coating.",
      image:"https://res.cloudinary.com/dlxwzl9nr/image/upload/v1620504401/Shoppingcart/zag_nhrdea.jpg"
      
    },
    {
      Name:"Unlocked Smartphones Ulefone Note 9P",
      id:2,
      price:"INR 1347.0",
      descript:"Android 10 OS; 4GB RAM + 64GB ROM Micro SD up to 256GB; MT6762 Octa-core 64-bit 1.8GHz",
      image:"https://res.cloudinary.com/dlxwzl9nr/image/upload/v1620504412/Shoppingcart/android10_iqowdi.jpg"

    },
    {
      Name:"Samsung Electronics Galaxy A52 5G,",
      id:3,
      price:"INR 7700.0",
      descript:"Expandable Storage: Take your photos, music, podcasts, and episodes with you, thanks to 128GB of built-in storage",
      image:"https://res.cloudinary.com/dlxwzl9nr/image/upload/v1620507872/Shoppingcart/samsung_hzuxcs.jpg"

      
    },
    {
      
      id:4,
      Name:"Samsung Galaxy S21 5G",
      price:"INR 2000",
      descript:"Sharp 8K Video: Capture your life’s bestsuper-smooth 8K video that gives your movies that cinema-style quality ",
      
      image:"https://res.cloudinary.com/dlxwzl9nr/image/upload/v1620508050/Shoppingcart/galaxy_ol4ryo.jpg"

    },
    {
      id:5,
      Name:"IPHONE 10",
      price:"INR 5000",
      descript:"take photos and videos like a pro, and capture incredib with our easy-to-use, multi-lens camera",
      image:"https://res.cloudinary.com/dlxwzl9nr/image/upload/v1620504401/Shoppingcart/zag_nhrdea.jpg"
      
    },
    {
      id:6,
      Name:"IPHONE 11",
      price:"INR 4000",
      descript:"take photos and videos like a pro, and capture incredible share-ready moments with our easy-to-use, multi-lens camera",
      image:"https://res.cloudinary.com/dlxwzl9nr/image/upload/v1620504401/Shoppingcart/zag_nhrdea.jpg"
    
    },
    {
      id:7,
      Name:"SaMSung Galaxy",
      price:"INR3000",
      descript:" a pro, and capture incredible share-ready moments with our easy-to-use, multi-lens camera",
      image:"https://res.cloudinary.com/dlxwzl9nr/image/upload/v1620508565/Shoppingcart/SGs21_tq8uf6.jpg"
      
    }
  ]
  if(listlength==='')
  { 
     item=itemslist.map((props,index)=><Card key={index} name={props.Name} price={props.price} descript={props.descript} image={props.image}></Card>)
  }
  else{
    
    for(let value of itemslist)
    {
      if(value.Name.toLowerCase().includes(listlength.toLowerCase()))
      {
         item.push(<Card key={value.id} name={value.Name} price={value.price} descript={value.descript} image={value.image}></Card>);
      }
    }
    if(item.length==0)
    {
      item.push(<h1 style={{position:'relative',padding:'0px',marginLeft:'42%',marginTop:'5%'}}>Opps! you are searching by wrong keyword</h1>)
    }
  }
  
  return (
    <div className="itemscontainer">
    
    {
      item
    }
          </div>
  )
}
