import { toast } from "react-toastify";
import Layout from "../../components/layout/Layout";
import React, { useState } from "react";

const ContactUs = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    toast.success("Your message has been submitted")
    setName("");

  
  };

  return (
    <Layout>
      <h1 className=" text-5xl font-bold text-white bg-slate-500  text-center pt-10">Contact Us</h1>
      <div class="flex items-center justify-center p-12 bg-slate-500">
        <div class="mx-auto w-full max-w-[550px]">
          <form action="" method="POST">
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                valur={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
                placeholder="Full Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                placeholder="Type your message"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
