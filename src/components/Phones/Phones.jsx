// import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio,Circles } from 'react-loader-spinner';

const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data =>console.log(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
                setLoader(false)
            });
    }, [])
    console.log(phones);
    return (
        <div className="ml-20 mt-11">
            {loader && <div> 
                <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
                </div>}
            
            <h2 className="text-2xl font-semibold text-center">Phones : {phones.length}</h2>
            <BarChart width={1100} height={360} data={phones}>
                <Bar dataKey="price" fill="#886498" />
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;