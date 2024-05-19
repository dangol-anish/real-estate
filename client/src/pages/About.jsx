import React from "react";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-[#1A120B]">
        About EstateGateway
      </h1>
      <p className="mb-4 text-[#1A120B]">
        Welcome to Estate Gateway!
        <br />
        At Estate Gateway, we believe that finding the perfect home or property
        should be an exciting and enjoyable journey. Our mission is to make real
        estate transactions seamless, efficient, and transparent for all our
        clients, whether you are buying, selling, or renting. We are dedicated
        to transforming the real estate experience through our innovative
        approach, deep market knowledge, and unwavering commitment to client
        satisfaction.
      </p>
      <p className="mb-4 text-[#1A120B]">
        <span className="text-[20px] font-medium">Who We Are</span>
        <br /> Estate Gateway was founded with the vision of creating a
        comprehensive, user-friendly platform that caters to all your real
        estate needs. Our team is a blend of seasoned real estate professionals,
        technology experts, and customer service enthusiasts, all working
        together to provide you with the best possible experience. With years of
        experience in the industry, we understand the complexities of the real
        estate market and are equipped to guide you through every step of the
        process.
      </p>
      <p className="mb-4 text-[#1A120B]">
        <span className="text-[20px] font-medium">Our Values</span>
        <ul className="flex flex-col gap-[12px]">
          <li>
            <span className="text-[16px] font-medium">Integrity: </span>
            We uphold the highest standards of integrity in all our actions.
            Trust is the foundation of our relationships with clients, and we
            strive to be transparent and honest in all our dealings.
          </li>
          <li>
            <span className="text-[16px] font-medium">Excellence: </span> We are
            committed to delivering exceptional service and value to our
            clients. Our team continuously seeks to improve and innovate,
            ensuring that we offer the most effective solutions and the best
            possible experience.
          </li>
          <li>
            <span className="text-[16px] font-medium">Customer Focus: </span>{" "}
            Our clients are at the heart of everything we do. We listen to your
            needs, understand your goals, and work tirelessly to help you
            achieve them. Your satisfaction is our top priority.
          </li>
        </ul>
      </p>
    </div>
  );
}
