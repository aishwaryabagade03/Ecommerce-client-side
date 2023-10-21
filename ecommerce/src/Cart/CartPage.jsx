import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';

const CartPage = () => {
  const [open, setOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const userid = localStorage.getItem("Userid");
  useEffect(() => {
    axios
      .get(`http://localhost:3003/Cart/get-cart-items/${userid}`)
      .then((res) => {
        setCartItems(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(cartItems.length);

  const RemoveHandler = (cartid) => {
    axios
      .delete(`http://localhost:3003/Cart/remove-item/${cartid}`)
      .then((res) => {
        console.log(res);
        setCartItems((prevCartItems) =>
          prevCartItems.filter((item) => item._id !== cartid)
        );
      })
      .catch((err) => console.log(err));
  };

  const totalamount = () => {
    let total = 0;
    cartItems.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2);
  };

    // payment integration
    const makePayment = async()=>{
      const stripe = await loadStripe("pk_test_51NuVY0SBwK9ePU2bx6es1qPzC43EW4QkIDInmE9P93Y0wIC12l5QfKyr18ZaDuhA0VEfufeLzsfY6JWtEKIXxMKc00X2Mhp9pN");
  
      const body = {
          products:cartItems
      }
      const headers = {
          "Content-Type":"application/json"
      }
      const response = await fetch("http://localhost:3003/checkout",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
      });

  
      const session = await response.json();
  
      const result = stripe.redirectToCheckout({
          sessionId:session.id
      });
      
      if(result.error){
          console.log(result.error);
      }
  }

  return (
    <div className="flex h-full flex-col bg-white border-2 border-black shadow-xl my-32 mx-auto lg:max-w-3xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
              // onClick={() => setOpen(false)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Close panel</span>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems?.map((product) => (
                <li key={product._id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={`http://localhost:3003/Upload/product/${product.thumbnail}`}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="ml-4">${product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty {product.quantity}</p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => RemoveHandler(product._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${totalamount()}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center border border-transparent bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
              onClick={makePayment}
            >
              Checkout
            </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <Link to={"/shopall"}>
              <button
                type="button"
                className="font-medium text-gray-900 hover:text-gray-500"
                // onClick={() => setOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
