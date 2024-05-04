import { useState } from "react";
import donateImage from "../assets/donate.jpg";
import fs from "fs";
import path from "path";
import { redirect } from "react-router-dom";

const DonateForm = () => {
    const [organisation, setOrganisation] = useState('');
    const [food, setFood] = useState('');
    const [vegOption, setVegOption] = useState('');
    const [quantity, setQuantity] = useState();
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const newFoodObject = {
            organisation,food,vegOption, quantity, city, address
        }

        console.log(newFoodObject)

        const existingDonations = JSON.parse(localStorage.getItem('donations')) || [];

        const updatedDonations = [...existingDonations, newFoodObject];

        // Save updated donations to local storage
        localStorage.setItem('donations', JSON.stringify(updatedDonations));

        setOrganisation('');
        setFood('');
        setVegOption('');
        setQuantity();
        setCity('');
        setAddress('');

        redirect('/domain/mess')
    }

    return (
        <div className="flex">
            {/* <div className='bg-'>
                <img src={donateImage} className='object-fill'/>
            </div> */}
            <form className="w-[26rem] mx-auto bg-gray-50 rounded-xl p-6" onSubmit={formSubmitHandler}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="org"
                        id="org"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={organisation}
                        onChange={(e)=>setOrganisation(e.target.value)}
                    />
                    <label
                        for="org"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Organisation Name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="food_name"
                        id="food_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={food}
                        onChange={(e)=>setFood(e.target.value)}
                    />
                    <label
                        for="food_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Food Name
                    </label>
                </div>

                <div className="flex relative z-0 w-full mb-5 group">
                    <div className="flex w-full items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                            id="bordered-radio-1"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            for="bordered-radio-1"
                            className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            VEG
                        </label>
                    </div>
                    <div className="w-full flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                        <input
                            id="bordered-radio-2"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            for="bordered-radio-2"
                            className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            NON-VEG
                        </label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={quantity}
                        onChange={(e)=>setQuantity(e.target.value)}
                    />
                    <label
                        for="quantity"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Quantity (in kg/unit)
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                    />
                    <label
                        for="city"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        City
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="address"
                        id="address"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                    <label
                        for="address"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Address
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DonateForm;
