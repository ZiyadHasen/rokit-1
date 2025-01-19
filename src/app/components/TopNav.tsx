import Image from "next/image";
import React from "react";

const TopNav = () => {
  return (
    <section className="bg-black py-10 flex items-center justify-center">
      <Image
        src="/assets/our-logo.svg"
        alt="Our company logo"
        width={264}
        height={43}
      />
    </section>
  );
};

export default TopNav;
