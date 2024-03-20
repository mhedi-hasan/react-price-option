import { useEffect, useState } from "react";

const Phones = () => {
    const [phones,setPhones] =useState([])
    
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data =>setPhones(data.data))
    },[])
    return (
        <div className="border-2 w-2/3 mx-auto rounded-xl mt-10 border-green-600 py-8 px-10">
            <h2 className="text-2xl font-semibold text-center">Phones:{phones.length}</h2>
        </div>
    );
};

export default Phones;