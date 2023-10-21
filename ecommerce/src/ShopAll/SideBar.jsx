import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("http://localhost:3003/Product/get-all-products")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div class="relative min-h-screen md:flex" data-dev-hint="container">
      <input type="checkbox" id="menu-open" class="hidden" />

      <label
        for="menu-open"
        class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
        data-dev-hint="floating action button"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>

      <header
        class="bg-white text-black flex justify-between md:hidden"
        data-dev-hint="mobile menu bar"
      >
        {/* <a href="#" class="block p-4 text-black whitespace-nowrap truncate">
          Your App is cool
        </a> */}

        <label
          for="menu-open"
          id="mobile-menu-button"
          class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
        >
          <svg
            id="menu-open-icon"
            class="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            id="menu-close-icon"
            class="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </header>

      <aside
        id="sidebar"
        class="bg-white md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
        data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
      >
        <div
          class="flex flex-col space-y-6"
          data-dev-hint="optional div for having an extra footer navigation"
        >
          <nav data-dev-hint="main navigation">
            <a
              href="#"
              class="flex items-center text-sm font-serif transition hover:underline space-x-2 py-2 px-4 text-black"
            >
              <span class="ml-6">Best Sellers</span>
            </a>
            <a
              href="#"
              class="flex items-center text-sm font-serif transition hover:underline space-x-2 py-2 px-4 text-black"
            >
              <span class="ml-6">Earrings</span>
            </a>
            <a
              href="#"
              class="flex items-center text-sm font-serif transition hover:underline space-x-2 py-2 px-4 text-black"
            >
              <span class="ml-6">Necklaces</span>
            </a>
            <a
              href="#"
              class="flex items-center text-sm font-serif transition hover:underline space-x-2 py-2 px-4 text-black"
            >
              <span class="ml-6">Bracelets</span>
            </a>
            <a
              href="#"
              class="flex items-center text-sm font-serif transition hover:underline space-x-2 py-2 px-4 text-black"
            >
              <span class="ml-6">Rings</span>
            </a>
            <a
              href="#"
              class="flex items-center text-sm font-serif transition hover:underline space-x-2 py-2 px-4 text-black"
            >
              <span class="ml-6">Hoops</span>
            </a>
            <a
              href="#"
              class="flex items-center text-sm font-serif transition hover:underline space-x-2 py-2 px-4 text-black"
            >
              <span class="ml-6">Diamonds</span>
            </a>
            <a
              href="#"
              class="flex items-center text-sm font-serif transition hover:underline space-x-2 py-2 px-4 text-black"
            >
              <span class="ml-6">Men's</span>
            </a>
            <a
              href="#"
              class="flex items-center text-sm font-serif transition hover:underline space-x-2 py-2 px-4 text-black"
            >
              <span class="ml-6">Lifestyle</span>
            </a>
          </nav>
        </div>
      </aside>

      <main id="content" class="flex-1 p-6">
        <div class="max-w-7xl mx-auto text-left">
          <a
            href="#"
            class="text-4xl font-bold transition hover:underline flex font-mono transition hover:underline py-2 px-4 text-black"
          >
            <span class="ml-4">SHOP ALL</span>
          </a>
          <div>
            <a
              href="#"
              class="flex text-left text-base font-medium underline space-x-2 py-2 px-4 text-black"
              data-drawer-target="drawer-example"
              data-drawer-show="drawer-example"
              aria-controls="drawer-example"
            >
              <span class="ml-4">ALL FILTERS + SORT</span>
            </a>
            <div
              id="drawer-example"
              class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 "
              tabindex="-1"
              aria-labelledby="drawer-label"
            >
              <h5
                id="drawer-label"
                class="inline-flex items-center mb-4 text-base font-semibold"
              >
                FILTERS
              </h5>

              <button
                type="button"
                data-drawer-hide="drawer-example"
                aria-controls="drawer-example"
                class=" bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center "
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close menu</span>
              </button>

              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white"
              >
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 dark:border-gray-700"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span class="text-gray-900">Sort By: Top Match</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  class="hidden"
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium"
                      >
                        Price low to high
                      </label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium"
                      >
                        Price high to low
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="checked-checkbox"
                        class="ml-2 text-sm font-medium"
                      >
                        Top Match
                      </label>
                    </div>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-2">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 dark:border-gray-700"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"
                  >
                    <span class="text-gray-900">Color</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-2"
                  class="hidden"
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium "
                      >
                        Gold
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        checked
                        id="checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox" class="ml-2 text-sm font-medium ">
                        Silver
                      </label>
                    </div>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span class="text-gray-900">Price</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-3"
                  class="hidden"
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium "
                      >
                        Under 150
                      </label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input
                        id="checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox" class="ml-2 text-sm font-medium ">
                        150 - 300
                      </label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input
                        id="checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox" class="ml-2 text-sm font-medium">
                        300 - 500
                      </label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input
                        id="checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox" class="ml-2 text-sm font-medium ">
                        500+
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-15 lg:max-w-none">
              <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {products.map((product) => (
                  <div key={product.name} className="group relative">
                    <div className="mt-9 relative h-96 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 ">
                      <img
                        src={`http://localhost:3003/Upload/product/${product.thumbnail}`}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <Link to={`/products/${product._id}`}>
                      <h3 className="mt-3 text-base text-left leading-6">
                        <a href="#" className="font-medium">
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                        <br />
                        <a href="#">
                          <span className="absolute inset-0 text-gray-900" />$
                          {product.price}
                        </a>
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-900 text-left leading-6">
                      {product.shortdescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SideBar;
