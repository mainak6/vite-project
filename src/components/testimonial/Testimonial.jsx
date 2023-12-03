import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
      <div>
        <section className="">
          <div className=" container mx-auto px-5 py-10">
            <h1
              className=" text-center text-3xl font-bold text-black"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              E-Mart's Visionaries
            </h1>
            <h6
              className=" text-center text-xl font-semibold p-4 mb-10"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Together, this trio forms a formidable force, driving eMart
              towards its vision of becoming the most trusted and preferred
              e-commerce destination. Their combined expertise, unwavering
              commitment, and shared passion for innovation pave the way for
              eMart's continued success and growth.
            </h6>
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" //src="https://ecommerce-sk.vercel.app/img/kamal.png"
                    src="https://firebasestorage.googleapis.com/v0/b/myfirstapp-aec0f.appspot.com/o/product%2Ffriend%2F%20Hrithik.jpg2b5a5573-e63e-48f2-8d23-8278c5ee0c53?alt=media&token=047df296-4da9-4064-ac93-a6e974765c9c"
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed"
                  >
                    Hrithik Mukherjee, As the visionary leader of eMart's
                    technological landscape, Hrithik Mukherjee spearheads the
                    company's innovation and strategic direction. His expertise
                    lies in shaping the platform's infrastructure, overseeing
                    software development, and implementing cutting-edge
                    technologies. Under his guidance, eMart's technological
                    prowess continues to evolve, ensuring a seamless and secure
                    online shopping experience for customers.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    Hrithik Mukherjee
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    Chief Technology Officer (CTO)
                  </p>
                </div>
              </div>

              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://firebasestorage.googleapis.com/v0/b/myfirstapp-aec0f.appspot.com/o/product%2Ffriend%2F%20Ristika.jpga8740998-ea35-41de-9afb-c027c1771b26?alt=media&token=73d87ec5-d83e-4204-9677-fbc3d9e02561"
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed"
                  >
                    Rishtika Biswas, the mastermind behind eMart's marketing
                    strategies, plays a pivotal role in driving brand awareness,
                    generating leads, and boosting sales. Her expertise
                    encompasses developing comprehensive marketing plans,
                    overseeing all marketing channels, and understanding
                    customer behavior. With her insights and strategic
                    direction, eMart's brand resonates with customers,
                    attracting new users and fostering loyalty
                    among existing ones.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    Rishtika Biswas
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    Chief Marketing Officer (CMO)
                  </p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://firebasestorage.googleapis.com/v0/b/myfirstapp-aec0f.appspot.com/o/product%2Ffriend%2F%20DSCN1697.png24551778-f7a2-4dde-a636-774943ea0be3?alt=media&token=20718c61-c129-449f-925f-4dd0402696c3"
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed"
                  >
                    Mainak Sen, the champion of product innovation, ensures that
                    eMart's offerings remain compelling and competitive. His
                    responsibilities include identifying product needs through
                    market research and customer feedback, developing and
                    managing the product roadmap, and overseeing product
                    development to ensure smooth implementation. Under his
                    leadership, eMart's product offerings continuously evolve,
                    meeting the ever-changing needs of customers and staying
                    ahead of the curve in the e-commerce landscape.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    Mainak Sen
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    Chief Product Officer (CPO)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Testimonial