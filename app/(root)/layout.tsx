import { ReactNode } from "react";

// import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />

      <div>
        {/* <LeftSidebar /> */}

        <section className="flex min-h-screen flex-1 flex-col  pb-6  max-md:pb-14 ">
          <div className="mx-auto w-full">{children}</div>
          {/* max-w-5xl */}
        </section>

        {/* <RightSidebar /> */}
      </div>
    </main>
  );
};

export default RootLayout;
