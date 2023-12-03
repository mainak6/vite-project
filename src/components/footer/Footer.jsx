import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <footer
        className="text-gray-600 body-font bg-gray-300"
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Terms Of Service
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/privacypolicy"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/terms_of_service"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/faqs"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    FAQs
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Company Overview
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/about_us"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/team"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact_us"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/blog"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/carrier_with_us"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Carrier With Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/vocalforlocal"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Vocal for Local
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase "
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Return & Refund Policy
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/refund_policy"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/return_policy"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/cancellation_request"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Cancellation Request
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/track_return"}
                    className="text-gray-600 hover:text-gray-800"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Track Return
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {/*<img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />*/}
              <img src="../../pages/admin/dashboard/Mainak1.png" alt="" />
            </div>
          </div>
        </div>

        <div
          className="bg-gray-200"
          style={{
            backgroundColor: mode === "dark" ? "rgb(55 57 61)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link to={"/"} className="flex">
              <div className="flex ">
                <h1
                  className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  E-Mart::
                </h1>
              </div>
            </Link>
            <p
              className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              © 2023 E-Mart —
              <a
                href="https://github.com/mainak6"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                www.emart.com
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer