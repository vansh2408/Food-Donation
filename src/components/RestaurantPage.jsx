import { useEffect, useState } from "react"

const RestaurantPage = () => {

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('donations')) || [];
    setDonations(data);
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleAccept = (index) => {
    // Handle accept logic here, for example, removing the item from donations array
    const updatedDonations = [...donations];
    updatedDonations.splice(index, 1);
    setDonations(updatedDonations);
    // You might want to update localStorage here as well if needed
  };

  if (donations.length === 0) {
    return <h1>No Data Found!</h1>;
  }


  return (
    // <div>
    //   <table className="min-w-full divide-y divide-gray-200">
    //     <thead className="bg-gray-50">
    //       <tr>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organisation</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
    //       </tr>
    //     </thead>
    //     <tbody className="bg-white divide-y divide-gray-200">
    //       {donations.map((item, idx) => (
    //         <tr key={idx}>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.organisation}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.food}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    // <div className="overflow-x-auto">
    //   <table className="table-auto min-w-full divide-y divide-gray-200">
    //     <thead className="bg-gray-50">
    //       <tr>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organisation</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
    //       </tr>
    //     </thead>
    //     <tbody className="bg-white divide-y divide-gray-200">
    //       {donations.map((item, idx) => (
    //         <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.organisation}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.food}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

  //   <div className="overflow-hidden">
  //   <table className="min-w-full divide-y divide-gray-200">
  //     <thead className="bg-gray-50">
  //       <tr>
  //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organisation</th>
  //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
  //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
  //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
  //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
  //       </tr>
  //     </thead>
  //     <tbody className="bg-white divide-y divide-gray-200">
  //       {donations.map((item, idx) => (
  //         <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}>
  //           <td className="px-6 py-4 whitespace-nowrap">{item.organisation}</td>
  //           <td className="px-6 py-4 whitespace-nowrap">{item.food}</td>
  //           <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
  //           <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
  //           <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  // </div>

  // <div className="overflow-hidden">
  //     <table className="min-w-full divide-y divide-gray-200 overflow-hidden bg-white shadow-md rounded-lg">
  //       <thead className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
  //         <tr>
  //           <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Organisation</th>
  //           <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Food</th>
  //           <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Quantity</th>
  //           <th className="px-6 py-3 text-left text-sm font-semibold uppercase">City</th>
  //           <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Address</th>
  //         </tr>
  //       </thead>
  //       <tbody className="divide-y divide-gray-200">
  //         {donations.map((item, idx) => (
  //           <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}>
  //             <td className="px-6 py-4 whitespace-nowrap">{item.organisation}</td>
  //             <td className="px-6 py-4 whitespace-nowrap">{item.food}</td>
  //             <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
  //             <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
  //             <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>

//   <div className="overflow-hidden">
//   <table className="min-w-full divide-y divide-gray-200 overflow-hidden bg-white shadow-md rounded-lg">
//     <thead className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
//       <tr>
//         <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Organisation</th>
//         <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Food</th>
//         <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Quantity</th>
//         <th className="px-6 py-3 text-left text-sm font-semibold uppercase">City</th>
//         <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Address</th>
//       </tr>
//     </thead>
//     <tbody className="divide-y divide-gray-200">
//       {donations.map((item, idx) => (
//         <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}>
//           <td className="px-6 py-4 whitespace-nowrap">{item.organisation}</td>
//           <td className="px-6 py-4 whitespace-nowrap">{item.food}</td>
//           <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
//           <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
//           <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>

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
        <th/>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {donations.map((item, idx) => (
        <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} hover:bg-gray-100`}>
          <td className="px-6 py-4 whitespace-nowrap">{item.organisation}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.food}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
          <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
                  onClick={() => handleAccept(idx)}
                >
                  Accept
                </button>
              </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default RestaurantPage