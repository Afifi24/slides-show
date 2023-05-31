import React from "react";
import img5 from '../assets/girl-with-pearl-earring/thumbnail.jpg'
import img1 from '../assets/starry-night/thumbnail.jpg'
import img2 from '../assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg'
import img6 from '../assets/the-great-wave-off-kanagawa/thumbnail.jpg'
import img3 from '../assets/lady-with-an-ermine/thumbnail.jpg'
import img4 from '../assets/the-boy-in-the-red-vest/thumbnail.jpg'
import img7 from '../assets/the-night-cafe/thumbnail.jpg'
import img8 from '../assets/arnolfini-portrait/thumbnail.jpg'
import img9 from '../assets/guernica/thumbnail.jpg'
import img10 from '../assets/van-gogh-self-portrait/thumbnail.jpg'
import img11 from '../assets/mona-lisa/thumbnail.jpg'
import img12 from '../assets/penitent-magdalene/thumbnail.jpg'
import img13 from '../assets/the-sleeping-gypsy/thumbnail.jpg'
import img14 from '../assets/the-basket-of-apples/thumbnail.jpg'
import img15 from '../assets/the-swing/thumbnail.jpg'
const Galleria = ()=>{
    return(
        <div className="min-h-screen py-10">
         <div className="w-[95%] m-auto">
             <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-10"> 
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
            <div className="flex flex-col gap-10"> 
              <img src={img5} alt="" />
              <img src={img6} alt="" />
              <img src={img7} alt="" />
              <img src={img8} alt="" />
            </div>
            <div className="flex flex-col gap-10"> 
              <img src={img9} alt="" />
              <img src={img10} alt="" />
              <img src={img11} alt="" />
            </div>
            <div className="flex flex-col gap-10"> 
              <img src={img12} alt="" />
              <img src={img13} alt="" />
              <img src={img14} alt="" />
              <img src={img15} alt="" />
            </div>
            
             </div>
             
           
         </div>
        </div>
    )
}



export default Galleria