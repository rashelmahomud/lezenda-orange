import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import "./details.css";

const ProductDetails = ({ setCart, cart,totalPrice,setTotalPrice }) => {
  const { pdId } = useParams();
  const [reting, setReting] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const { data: productData } = useQuery(["productDetails"], () =>
    fetch("/product.json").then((res) => res.json())
  );

  const newProduct = productData?.find((pd) => pd.id === pdId);

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (newProduct) {
      setTotalPrice(newProduct.price * count);
    }
  }, [newProduct, count, setTotalPrice]);
  
  const handelPlus = () => {
    setCount((count) => count + 1);
  };

  const handelMinus = () => {
    if(count > 1){
      setCount((count) => count - 1);
    }
    
  };

  const handelCart = (newProduct) => {
    setCart([...cart, {...newProduct, quentity: count}],);
    setIsDisabled(true);
  };

  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:p-20 ">
      <div className="mt-20 mx-auto text-center">
        <figure>
          <div class="hover-animation">
            <img class="img-back" src={newProduct?.image} alt="" />
            <img class="img-front" src={newProduct?.image1} alt="" />
          </div>
        </figure>
      </div>

      <div className="mt-20 text-center text-justify p-3 bgbanner">
        <div className="bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <h1 className="text-3xl font-bold font-sans ">{newProduct?.name}</h1>
          <h1 className="text-2xl font-bold font-mono">{newProduct?.title}</h1>
          <div>
            <div className=" my-3 flex gap-4">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <h1>7 reviews</h1>
            </div>

            <div className=" my-3 flex gap-4">
              <div>
                <del>$21.00</del>
                <span className="mx-2 font-bold text-2xl">
                  ${totalPrice.toFixed()}
                </span>
              </div>
              <button className="btn btn-sm rounded-full">Save-10%</button>
            </div>

            <div className=" my-3 flex gap-4">
              <div>
                <span className="mx-2 font-bold hover:text-red-700">
                  {" "}
                  Shipping
                </span>
              </div>
              <h2 className="hover:text-red-700 ">Ask About This Product</h2>
            </div>

            <div className=" mt-10 flex gap-4 ">
              <div>
                <span className="mx-2 text-2xl font-bold"> Color :</span>
              </div>

              <div>
                <div className="tooltip" data-tip="red">
                  <button className="btn btn-sm border-none rounded-full w-8 bg-red-600"></button>
                </div>
                <div className="tooltip mx-2" data-tip="yellow">
                  <button className="btn btn-sm border-none rounded-full w-8 bg-yellow-700"></button>
                </div>
                <div className="tooltip mx-2" data-tip="green">
                  <button className="btn btn-sm border-none rounded-full w-8 bg-green-700"></button>
                </div>
                <div className="tooltip" data-tip="black">
                  <button className="btn btn-sm border-none rounded-full w-8 bg-black-700"></button>
                </div>
              </div>
            </div>

            <div className=" my-3 flex gap-4 text-2xl">
              <div>
                <h1>Quantity:</h1>
              </div>

              <div>
                <button onClick={handelPlus}> + </button>
                <span className="mx-5">{count} </span>
                <button onClick={handelMinus}> - </button>
              </div>
            </div>

            <div className=" my-3 flex gap-4">
              <div>
                <button
                  onClick={() => handelCart(newProduct)}
                  disabled={isDisabled}
                  className={`px-4 py-2 bg-blue-500 text-white rounded ${
                    isDisabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-600"
                  }`}
                >
                  {isDisabled ? "ADD TO CARD" : "ADD TO CARD"}
                </button>
              </div>

              <div
                onClick={setReting}
                className="rating gap-1 btn hover:bg-white text-red-700"
              >
                {reting ? (
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart btn text-red-500 bg-red-600"
                  />
                ) : (
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart btn text-red-500"
                  />
                )}
              </div>
            </div>

            <div>
              <Link to="/paymentDetails">
                <button className="btn w-full bg-yellow-200 text-black border-none hover:text-white my-3">
                  BUY IT NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
