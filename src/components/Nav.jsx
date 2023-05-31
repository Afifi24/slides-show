import React from "react";

const Nav =()=>{
    return(
        <div className="min-h-[13vh] flex items-center  border-b">
            <div className="w-[95%] flex items-center justify-between m-auto">
                <h1 className="font-bold text-2xl">galleria.</h1>
                <p className="uppercase cursor-pointer hover:text-red-500 duration-200 text-sm tracking-[5px]">start slideshow</p>
            </div>
        </div>
    )
}

export default Nav