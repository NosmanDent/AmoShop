import React from "react";
import { Link } from "react-router-dom";
import computer from "../assets/computer.png";

const Contact = () => {
  return (
    <section>
      <div>
        <div className="flex flex-1  w-full h-[300px] bg-[black] mb-20">
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-serif font-bold text-pink-700 flex items-center justify-center mx-auto">
            CONTACT US
          </h1>
          <div className="flex absolute items-center ml-4 mt-4 gap-2">
            <Link to="/">
              <h1 className="text-sm font-semibold text-stone-200 hover:text-white">
                Home
              </h1>
            </Link>
          </div>
        </div>

        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100 my-16">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Let's talk!
              </h2>
              <div className="text-gray-400">
                Vivamus in nisl metus? Phasellus.
              </div>
            </div>
            <img src={computer} alt="" className="p-6 h-52 md:h-64" />
          </div>
          <form
            noValidate=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div>
              <label className="text-sm">Full name</label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded  focus:outline-none text-black"
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded focus:outline-none text-black"
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded focus:outline-none text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
