import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="primary-gradient text-white py-10">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Enquiry Form */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-3 border-b-2 pb-2">
              Send Quick Enquiry
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded-md border-none text-black"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 rounded-md border-none text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md border-none text-black"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 rounded-md border-none text-black"
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 rounded-md border-none text-black"
                rows={3}
              />
              <button className="green-color w-full py-2 font-bold text-white rounded-md hover:bg-yellow-500 transition">
                Send now !
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-3 border-b-2 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Product Gallery", "Contact Us"].map(
                (link, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-lg">➤</span>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Business Values */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-3 border-b-2 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-2 text-md">
              <li>
                <strong>Address –</strong>
                Godown No. 1,2,3, 4, Supari Factory, Nanhera Rd, Ambala Cantt,
                Haryana 133004,
              </li>
              <li>
                <strong>Phone –</strong>+91 9996641047
              </li>
              <li>
                <strong>Email –</strong> sapsonpharma@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm border-t pt-4">
          © 2025 All rights reserved by Sapson Pharma | Made With Love By
          Hivends Info Solutions
        </div>
      </footer>
    </>
  );
};

export default Footer;
