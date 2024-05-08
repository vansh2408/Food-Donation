import { useEffect, useState } from "react";
import { DB } from "../firbase";
import {
  ref,
  set,
  get,
  child,
  query,
  equalTo,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { useAuth } from "../AuthContext";
import emailjs from "emailjs-com";

const RestaurantPage = () => {
  const { user } = useAuth();

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      // Initialize an empty array to store all donations from users
      let allDonations = [];

      // Fetch all users from the database
      const usersSnapshot = await get(ref(DB, "users"));
      const usersData = usersSnapshot.val();

      //console.log('usersData ',usersData)

      // Iterate over each user
      for (const userId in usersData) {
        const user = usersData[userId];
        console.log("user ", user);
        // Check if user has donations and it's an array
        if (user.donations && Array.isArray(user.donations)) {
          // Filter user's donations to get only those which are not accepted
          const userDonations = user.donations
            .slice(1)
            .filter((donation) => !donation.isAccepted);
          // Concatenate user's filtered donations to the allDonations array
          allDonations = allDonations.concat(userDonations);
        }
      }

      // Set the combined donations array to donations state
      setDonations(allDonations);
    } catch (error) {
      console.error("Error fetching donations:", error);
      // Handle error if needed
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDonations(); // Call the function to fetch donations when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleAccept = async (item) => {
    // // Handle accept logic here, for example, removing the item from donations array
    // const updatedDonations = [...donations];
    // updatedDonations.splice(index, 1);
    // //localStorage.setItem("donations", JSON.stringify(updatedArr))
    // setDonations(updatedDonations);
    // // You might want to update localStorage here as well if neede

    try {
      setLoading(true);
      const userKey = item.messEmail.replace(".", "_");

      await set(
        ref(DB, `users/${userKey}/donations/${item.id - 1}/isAccepted`),
        true
      );

      console.log("item ", item);

      sendEmail(item.messEmail);

      fetchDonations();
    } catch (err) {
      console.log(err);
    }
    setLoading(false)
  };

  const sendEmail = (email) => {
    const templateParams = {
      to_name: "Restaurant",
      from_name: user.name,
      message: "Hello, We are delighted to tell you that your donation is accepted!",
      to_email: email,
    };

    emailjs
      .send(
        "service_yi5htrs",
        "template_1oz1v4m",
        templateParams,
        "rk9XAXw0MwtBxvzbc"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  if (loading) {
    return (
    <div className="flex my-40 text-center items-center origin-center justify-center object-center place-items-center">
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      </div>
    );
  }

  if (donations.length === 0) {
    return <div className="h-40 flex text-center items-center origin-center justify-center object-center place-items-center">
      <h1>No Data Found!</h1>
    </div>;
  }

  return (
    <div className="overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200 overflow-hidden bg-white shadow-md rounded-lg">
        <thead className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">
              Organisation
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">
              Food
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">
              City
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b border-gray-200">
              Address
            </th>
            <th />
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {donations.map((item, idx) => (
            <tr
              key={idx}
              className={`${
                idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } hover:bg-gray-100`}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                {item.organisation}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.food}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
                  onClick={() => handleAccept(item)}
                >
                  Accept
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantPage;
