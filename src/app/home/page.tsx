import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import React from "react";

const page = () => {
  return (
    <section>
      <TopNav />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center my-4">Home Page</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          malesuada, eros sit amet varius lacinia, nulla nisl tincidunt lacus,
          vel accumsan nisl nunc in mi. Suspendisse potenti. Nulla facilisi.
          Donec eget nunc nec odio tincidunt blandit. Nullam nec nisi non sem
          luctus aliquam. Nulla facilisi. Donec eget nunc nec odio tincidunt
          blandit. Nullam nec nisi non sem luctus aliquam.
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default page;
