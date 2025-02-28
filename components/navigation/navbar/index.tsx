import Image from "next/image";
import Link from "next/link";
import React from "react";

import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

import { auth } from "@/auth";
import UserAvatar from "@/components/UserAvatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="  sticky z-50 w-full top-0">
      <div className="green-color text-white py-2 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Marquee Text Section */}
        <div className="w-full md:w-2/3 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex space-x-10">
            <span className="text-sm font-semibold px-5">
              💊 Premium Quality Medicines Bioraiz Healthcare Pvt. Ltd. –
              Redefining health through groundbreaking pharmaceuticals,
              personalized care, and a passion for your well-being.
            </span>
            <span className="text-sm font-semibold px-5">
              📦 24/7 Customer Support
            </span>
            <span className="text-sm font-semibold px-5">
              🚀 Fast Delivery Nationwide
            </span>
            <span className="text-sm font-semibold px-5">
              💊 Premium Quality Medicines
            </span>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-0">
          <div className="flex items-center gap-1">
            <img src="/icons/phone.png" alt="Phone Icon" className="size-4" />
            <span className="text-sm font-medium">+91 9996641047</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/icons/mail.png" alt="Email Icon" className="size-4" />
            <span className="text-sm font-medium">sapsonpharma@gmail.com</span>
          </div>
        </div>
      </div>

      <nav className="flex justify-between items-center bg-light-900 dark:bg-dark-200 shadow-md w-full px-4 sm:px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Sapson-logo.png"
            width={150}
            height={150}
            alt="Sapson Logo"
            priority
          />
        </Link>
        <div className="flex gap-3">
          {/* Navigation Links */}
          <div className="hidden items-center md:flex gap-6 text-dark-900 dark:text-light-900 font-semibold">
            <Link href="/" className="hover:text-primary-500 transition">
              Home
            </Link>
            <Link
              href="/about-us"
              className="hover:text-primary-500 transition"
            >
              About
            </Link>
            <Link
              href="/products"
              className="hover:text-primary-500 transition"
            >
              Products
            </Link>
            <Link
              href="/ask-query"
              className="hover:text-primary-500 transition"
            >
              Get a Quote
            </Link>
            <Link
              href="/quote"
              className=" primary-gradient text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary-600 transition"
            >
              Signup / Login
            </Link>
          </div>

          {/* Right Section (Theme, User, Mobile Navigation) */}
          <div className="flex items-center gap-5">
            <Theme />

            {session?.user?.id && (
              <UserAvatar
                id={session.user.id}
                name={session.user.name!}
                imageUrl={session.user?.image}
              />
            )}

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
