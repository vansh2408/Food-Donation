import { Outlet } from "react-router-dom";
import coverImage from "../assets/coverimage.jpeg";
import Header from "./Header";

const RootLayout = () => {
    return (
        <main>
            
            <Header/>

            <section className="p-10">
              <Outlet/>
            </section>

            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <p className="text-sm">
                            <span className="font-bold">About us:</span> The
                            basic concept of this project Food Waste Management
                            is to collect the excess/leftover food from donors
                            such as hotels, restaurants, marriage halls, etc.
                            and distribute it to the needy people.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <div>
                            <p>
                                <span className="font-bold">Contact:</span>
                            </p>
                        </div>
                        <div>
                            <p>(+00) 0000 000 000</p>
                        </div>
                        <div>
                            <p>
                                <a href="mailto:fooddonate@gmail.com">
                                    Fooddonate@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="sociallist">
                            <ul className="social flex">
                                <li className="mr-4">
                                    <a
                                        href="https://www.facebook.com/TheAkshayaPatraFoundation/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://i.ibb.co/x7P24fL/facebook.png"
                                            alt="Facebook"
                                        />
                                    </a>
                                </li>
                                <li className="mr-4">
                                    <a
                                        href="https://twitter.com/globalgiving"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://i.ibb.co/Wnxq2Nq/twitter.png"
                                            alt="Twitter"
                                        />
                                    </a>
                                </li>
                                <li className="mr-4">
                                    <a
                                        href="https://www.instagram.com/charitism/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="https://i.ibb.co/ySwtH4B/instagram.png"
                                            alt="Instagram"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://web.whatsapp.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i
                                            className="fa fa-whatsapp"
                                            style={{
                                                fontSize: "24px",
                                                color: "black",
                                            }}
                                        ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">
                            Food<span className="text-green-500"> Donate</span>
                        </h2>
                        <p className="menu">
                            <a href="#">Home</a> |<a href="about.html">About</a>{" "}
                            |<a href="profile.php">Profile</a> |
                            <a href="contact.html">Contact</a>
                        </p>
                        <p className="text-sm">&copy; 2023 Food Donate</p>
                    </div>
                </div>
            </footer>

        </main>
    );
};

export default RootLayout;
