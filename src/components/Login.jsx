import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [option, setOption] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    
    const formSubmitHandler = (e) => {
        e.preventDefault();
        setError(null);
        console.log(option, email, password);
        if(option === "MESS"){
            if(email === "mess@gmail.com" && password === "123"){
                navigate('domain/mess');
            }else{
                setError('Invalid credentiatls!')
            }
        }else{
            if(email === "res@gmail.com" && password === "123"){
                navigate('/restaurant');
            }else{
                setError('Invalid credentiatls!')
            }
        }
    }

    return (
        <div className="flex flex-col gap-6 text-center items-center justify-center content-center place-items-center justify-items-center place-content-center mx-auto my-auto py-16">
            <h1 className="text-6xl text-green-500 font-bold">
                Welcome to Food Donation!
            </h1>
            <div className="flex gap-10">
                <button
                    type="button"
                    onClick={() => setOption("MESS")}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Login as MESS
                </button>
                <button
                    type="button"
                    onClick={() => setOption("NGO")}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Login as NGO
                </button>
            </div>
            {
                error && 
                <div>
                    <h3 className="text-red-600 text-lg font-bold">{error}</h3>
                </div>
            }
            {option && (
                    <div>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    {option === "MESS" ? 'Sign In as MESS' : 'Sign In as NGO'}
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={formSubmitHandler}>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            value={email}
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            required
                                            onChange={(e)=>setEmail(e.target.value)}
                                        
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Password
                                        </label>
                                        <input
                                            value={password}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-red-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Sign in
                                    </button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Login;
