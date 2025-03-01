import React from "react";
import Image from "next/image";
import SwiperComp from "@/components/swiper";

const About = async () => {
  return (
    <>
      {/* <h1 className="h1-bold text-dark100_light900">About Us</h1> */}
      <section>
        <Image
          src="/icons/banner.png"
          alt="Menu"
          width={1920}
          height={400}
          className="max-h-[30rem]	"
        />
        <div className="max-w-5xl mx-auto text-center pt-16">
          <h1 className="text-4xl text-center  font-bold text-dark100_light900">
            Welcome To{" "}
            <span className="primary-text-gradient">Sapson Pharma</span>
          </h1>
          <p className="mt-4 text-lg text-dark200_light900 leading-relaxed">
            Sapson Pharma, founded in 2021, has experienced remarkable growth
            over the years, establishing itself as a leading PCD franchise for
            high-quality pharmaceutical products. Our diverse product line
            includes Tablets, Capsules, Injections, Ayurvedic Medicines, Syrups,
            Softgel, Creams, Powders, and Dental Solutions, among many others.
            Committed to excellence, Manlac Pharma prioritizes delivering
            top-tier medicines to its customers. With transparent business
            practices, we have built a strong network of satisfied clients,
            including distributors, doctors, and clinics. Our core values
            revolve around trust, integrity, and responsibility. Using
            premium-quality raw materials and advanced formulation techniques,
            we ensure superior pharmaceutical products tailored to meet diverse
            client needs, offering a variety of packaging options.
          </p>
        </div>

        <div className="max-w-6xl mx-auto text-center pt-16">
          <h2 className="text-3xl font-bold text-dark200_light900">
            Our Star
            <span className="primary-text-gradient"> Products</span>
          </h2>
          <div className="mt-10">
            <SwiperComp />
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center pt-16">
          <h2 className="text-3xl font-bold text-dark200_light900">
            Why Choose{" "}
            <span className="primary-text-gradient">Sapson Pharma</span>
          </h2>
          <p className="mt-2 text-lg text-dark200_light900 ">
            Trusted Medicine, Delivered With Care
          </p>

          {/* Features Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className=" rounded-xl p-4 shadow-md">
              <img
                src="/icons/banner.png"
                alt="Content"
                className="mx-auto w-full rounded-[10px] object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-dark200_light900 ">
                Quality
              </h3>
              <p className="mt-2 text-dark200_light900  text-sm">
                Quality is at the core of Sapson Pharma’s values. We uphold our
                commitment to excellence by creating and delivering products and
                services that cater to the needs of our global customers. With a
                strong focus on continuous improvement.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl p-4 shadow-md">
              <img
                src="/icons/banner.png"
                alt="Content"
                className="mx-auto w-full rounded-[10px] object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-dark200_light900 ">
                Medical Standards
              </h3>
              <p className="mt-2 text-dark200_light900  text-sm">
                Sapson Pharma has established a secure, state-of-the-art, and
                well-equipped infrastructure to guarantee the timely delivery of
                products. Additionally, our infrastructure is designed to
                accommodate the growing demands of our customers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl p-4 shadow-md">
              <img
                src="/icons/banner.png"
                alt="Content"
                className="mx-auto w-full rounded-[10px] object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-dark200_light900 ">
                Our Strength
              </h3>
              <p className="mt-2 text-dark200_light900  text-sm">
                We uphold relationship, honesty, and responsibility, ensuring
                uncompromised values. At Sapson Pharma, continuous innovation
                and strict quality control drive us to deliver safe, effective
                medicines, building long-term trust and accessibility in
                healthcare.
              </p>
            </div>
          </div>
        </div>
        <section className="max-w-6xl mx-auto text-left py-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/your-image.jpg"
                alt="PCD Pharma"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-dark200_light900">
                PCD
                <span className="primary-text-gradient"> Pharma Company</span>
              </h2>

              <p className="text-dark200_light900  mt-4">
                PCD pharma franchise is a rapidly growing key marketing strategy
                for pharma companies.{" "}
                <strong className="text-primary">Sapson Pharma</strong> is a
                leading name in pharma manufacturing, offering high-quality
                medicines like injections, capsules, syrups, and herbal
                products.
              </p>

              {/* Services Section */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  "Best Materials",
                  "Professional Standards",
                  "Consistent Quality",
                  "On-time Delivery",
                  "Cost Efficiency",
                  "Promotional Support",
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-blue-500 text-lg">✔</span>
                    <span className="text-gray-800">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
