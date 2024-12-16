import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, count,totalPrice }) => {
  const navigate = useNavigate();
  const handelDelete = (id) => {
    setCart("");
    navigate("/shop");
  };

  return (
    <div className="max-w-full mx-auto">
      {cart?.map((p) => (
        <div key={p.id}>
          <div>
            <ul className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 border lg:m-10 lg:p-5 m-5 p-3 place-items-center">
              <li>
                <img className="w-24 rounded" src={p.image} alt="cartImage" />
              </li>
              <li>
                <h1 className="font-bold text-2xl text-gray-500">{p.name}</h1>
              </li>
              <li>
                <h3 className="font-bold text-gray-500">{p.title}</h3>
              </li>
              <li className="flex gap-3">
                <p className="text-center font-bold text-2xl text-gray-500">
                  Prise: {totalPrice.toFixed()}
                </p>
                <span className="text-center font-bold text-2xl text-gray-500">
                  Count: {count}
                </span>
              </li>

              <div>
                <Link to="/paymentDetails">
                  <button className="bg-blue-400 px-3 py-2 text-white font-bold m-2">
                    PAYMENT
                  </button>
                </Link>
                <button
                  onClick={() => handelDelete(p.id)}
                  className="bg-red-400 px-3 py-2 text-white font-bold"
                >
                  DELETE
                </button>
              </div>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
