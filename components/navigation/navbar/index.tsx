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
    <nav className="flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full gap-5 p-6 sm:px-12 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/Sapson-logo.png"
          width={150}
          height={150}
          alt="Sapson Logo"
        />

        {/* <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Pharma</span>
        </p> */}
      </Link>

      <div className="flex-between gap-10">
<p className="paragraph-semibold text-dark400_light900">
          +91 9996641047
</p>
<p className="paragraph-semibold text-dark400_light900">
sapsonpharma@gmail.com
</p>
      </div>

      <div className="flex-between gap-5">
        <Theme />

        {session?.user?.id && (
          <UserAvatar
            id={session.user.id}
            name={session.user.name!}
            imageUrl={session.user?.image}
          />
        )}

        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
