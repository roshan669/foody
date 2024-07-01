import React from "react";
import trash from "../trash.svg";
import { useDispatchCart, useCart } from "../components/ContextReducer";

export default function Cart() {
  const data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The cart is Empty!</div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("Order Response: ", response.status);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr>
              <th className="text-white" scope="col">
                #
              </th>
              <th className="text-white">Image</th>
              <th className="text-white" scope="col">
                Name
              </th>
              <th className="text-white" scope="col">
                Quantity
              </th>
              <th className="text-white" scope="col">
                Option
              </th>
              <th className="text-white" scope="col">
                Amount
              </th>
              <th className="text-white" scope="col">
                #
              </th>
            </tr>
          </thead>
          <tbody className="text-success align-middle">
            {data.map((food, index) => (
              <tr key={index}>
                <th className="text-white" scope="row">
                  {index + 1}
                </th>
                <td className="">
                  {" "}
                  <img
                    src={food.img}
                    alt="food"
                    style={{ width: "100px", height: "auto" }} // Adjust the width as needed
                  />
                </td>
                <td className="text-white">{food.name}</td>
                <td className="text-white">{food.qty}</td>
                <td className="text-white">{food.size}</td>
                <td className="text-white">{food.price}</td>
                <td className="text-white">
                  <button type="button" className="btn p-0 ">
                    <img
                      src={trash}
                      alt="delete"
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                      style={{ width: "15px", height: "15px" }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {
          <div>
            <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
          </div>
        }
        <div>
          <button className="btn bg-success mt-5" onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
