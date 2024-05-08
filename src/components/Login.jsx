import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { DB } from "../firbase";
import { useAuth } from "../AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [option, setOption] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [loginOption, setLoginOption] = useState("LOGIN");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      setError(null);
      console.log(option, email, password);

      if (option === "MESS") {
        if (loginOption === "REGISTER") {
          const userKey = email.replace(".", "_");

          const donations = [1];

          await set(ref(DB, "users/" + userKey), {
            email,
            password,
            name,
            donations,
          });

          login({ email, name }, "MESS");
          navigate("domain/mess");
        } else {
          const usersRef = ref(DB, "users");

          // Get the snapshot of users from Firebase
          const snapshot = await get(usersRef);

          // Initialize variables to track if user is found and store user data
          let userFound = false;
          let userData = null;

          // Iterate through the child nodes
          snapshot.forEach((childSnapshot) => {
            const user = childSnapshot.val();
            if (user.email === email) {
              userFound = true;
              userData = user;
            }
          });

          if (userFound) {
            // User with the provided email exists in the database
            if (userData.password === password) {
              // Password matches, login successful
              console.log("userData ", userData);
              login({ email, name: userData.name }, "MESS");
              navigate("domain/mess"); // Redirect to the dashboard or any other desired route
            } else {
              // Password doesn't match, show error
              setError("Invalid password");
              setLoading(false);
            }
          } else {
            // User with the provided email doesn't exist
            setError("User not found");
            setLoading(false);
          }
        }
      } else {
        if (loginOption === "REGISTER") {
          const ngoKey = email.replace(".", "_");
          await set(ref(DB, "ngos/" + ngoKey), {
            email,
            password,
            name,
            acceptedDonations: [1],
          });

          login({ email, name }, "NGO");
          navigate("domain/ngo");
        } else {
          const ngoRef = ref(DB, "ngos");

          // Get the snapshot of users from Firebase
          const snapshot = await get(ngoRef);

          // Initialize variables to track if user is found and store user data
          let ngoFound = false;
          let ngoData = null;

          // Iterate through the child nodes
          snapshot.forEach((childSnapshot) => {
            const ngo = childSnapshot.val();
            if (ngo.email === email) {
              ngoFound = true;
              ngoData = ngo;
            }
          });

          if (ngoFound) {
            // User with the provided email exists in the database
            if (ngoData.password === password) {
              // Password matches, login successful
              login({ email, name: ngoData.name }, "NGO");
              console.log("userData ", ngoData);
              navigate("domain/mess");
            } else {
              // Password doesn't match, show error
              setError("Invalid password");
              setLoading(false);
            }
          } else {
            // User with the provided email doesn't exist
            setError("User not found");
            setLoading(false);
          }
        }
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl text-green-500 font-bold mb-8">
        Welcome to Food Donation!
      </h1>
      <div className="flex gap-10">
        <button
          type="button"
          onClick={() => setOption("MESS")}
          className="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Login as MESS
        </button>
        <button
          type="button"
          onClick={() => setOption("NGO")}
          className="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Login as NGO
        </button>
      </div>
      {error && (
        <div className="text-red-600 text-lg font-bold mt-4">{error}</div>
      )}
      {option && (
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-xl font-bold mb-4 text-center">
              {option === "MESS" ? "Sign In as MESS" : "Sign In as NGO"}
            </h1>
            <form onSubmit={formSubmitHandler}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your email
                </label>
                <input
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  className="input-field h-10 border-2 px-2 mt-2 w-full"
                  placeholder="name@company.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  className="input-field h-10 border-2 px-2 mt-2 w-full"
                  placeholder="••••••••"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {loginOption === "REGISTER" && (
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    className="input-field h-10 border-2 px-2 mt-2 w-full"
                    placeholder="Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}

              <button
                type="submit"
                class="py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg max-w-md"
              >
                {

                  loading ? 
                  <>
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="mr-2 animate-spin"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                </svg>
                loading
                </>

                :

                loginOption === "LOGIN" ? "Sign In" : "Sign Up"
                }
              </button>

              {/* <button
                type="submit"
                className="w-full text-white bg-red-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loginOption === "LOGIN" ? "Sign In" : "Sign Up"}
              </button> */}

              <div className="flex mt-4 place-items-center text-center items-center object-center justify-center">
              {loginOption === "LOGIN" ? (
                <div className="flex gap-2 text-center origin-center items-center place-items-center">
                  <h2>Not have an account?</h2>
                  <button className="bg-green-500 text-black" onClick={() => setLoginOption("REGISTER")}>
                    Create One?
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 text-center origin-center items-center place-items-center">
                  <h2>Already have an account?</h2>
                  <button className="bg-green-500 text-black" onClick={() => setLoginOption("LOGIN")}>
                    Login?
                  </button>
                </div>
              )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
