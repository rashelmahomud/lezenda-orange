import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const handelDelete = (id) => {
    const update = cart.filter((item) => item.id !== id)
    setCart(update);
    if(update.length === 0){
      navigate('/shop')
    }
  };
  const costs = cart.reduce((total,cost) => total + cost.price * cost.quentity, 1)
 
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
                  total: {(p.price * p.quentity).toFixed()}
                </p>
                <span className="text-center font-bold text-2xl text-gray-500">
                  Count: {p.quentity}
                </span>
              </li>

              <div>
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
      <div className="container text-center  p-10">
        <h2 className="font-semibold">Delivery Cost : $ 70</h2>
        <p className="font-bold"> Total Price {(costs + 70).toFixed(2)}</p>
        <Link to="/paymentDetails">
                  <button className="bg-blue-400 px-3 py-2 text-white font-bold m-2">
                    PAYMENT
                  </button>
                </Link>
        </div>
    </div>
  );
};

export default Cart;
