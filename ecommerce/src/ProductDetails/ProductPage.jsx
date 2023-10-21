import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

const product = {
  colors: [
    { name: "Yellow", class: "bg-yellow-400", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-zinc-400", selectedClass: "ring-gray-400" },
  ],
  materials: [
    "14k Solid Gold.",
    "Our 14k solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry every day.",
  ],
  details: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptate exercitationem maiores? Delectus, veniam labore! Hic maiores autem quos praesentium, odit modi! Neque dignissimos eaque maxime atque qui consequatur totam!.",
  ],
};

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductPage = () => {
  const [productdata, setProductDetail] = useState([]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const productid = useParams();

  const getProductDetails = () => {
    axios
      .get(`http://localhost:3003/Product/get-product/${productid.product_id}`)
      .then((res) => {
        setProductDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(productid);

  useEffect(() => {
    getProductDetails();
  }, [productid]);

  const UserID = localStorage.getItem('Userid')

  const addtocart=(ProductID , e) =>{
    e.preventDefault()
    axios
    .post('http://localhost:3003/Cart/add-to-cart', {
      UserID, 
      ProductID
    });
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {/* {productdata.map((products) => ( */}
            <li key={productdata._id}>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                  {productdata.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto lg:max-w-7xl justify-start pt-10">
                <div className="my-grid-1">
                  <img
                    src={`http://localhost:3003/Upload/product/${productdata.thumbnail}`}
                    alt=""
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                {productdata.image &&
                  productdata.image.split(",").map((imageSrc, index) => (
                    <div className="my-grid-1">
                      <img
                        key={index}
                        src={`http://localhost:3003/Upload/product/${imageSrc}`}
                        alt={`Product Image ${index + 1}`}
                        className="w-full rounded-lg"
                      />
                    </div>
                  ))}

              </div>
            </li>
            {/* ))}  */}
          </ol>
        </nav>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0 text-left">
            <h2 className="sr-only">Product information</h2>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              {productdata.name}
            </h1>
            <p className="text-xl tracking-tight text-gray-900">
              ${productdata.price}
            </p>
            <p className="text-sm tracking-tight text-gray-900">
              {productdata.shortdescription}
            </p>
            <p className="text-sm tracking-tight text-gray-900 font-serif mt-4">
              FREE SIZE
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <p className="text-sm tracking-tight font-medium text-gray-900 mt-3 font-serif">
              {productdata.status}
            </p>
             <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2"
                onClick={(e)=>{addtocart(productdata._id,e)}}
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-400 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 text-left">
                Details
              </h3>
              <div className="space-y-6 text-left text-sm mt-4">
                <p className=" text-gray-700">{product.details}</p>
              </div>
            </div>
            <div className="mt-10 text-left border-t border-gray-400">
              <h3 className="text-sm font-medium text-gray-900 pt-3">Description</h3>

              <div className="mt-4">
                <ul role="list" className="list-none space-y-2 text-sm">
                  <li key={productdata._id} className="text-gray-400">
                    <span className="text-gray-600">
                      {productdata.description}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 text-left border-y border-gray-400 py-6">
              <h3 className="text-sm font-medium text-gray-900">Materials</h3>
              <div className="mt-4">
                <ul role="list" className="list-none space-y-2 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">{product.materials}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
