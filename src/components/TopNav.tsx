import Image from "next/image";
import React from "react";

const TopNav = () => {
  return (
    <section className="bg-black py-10 max-sm:py-6 flex items-center justify-center">
      <Image
        src="/assets/our-logo.svg"
        alt="Our company logo"
        className="max-sm:h-10 max-sm:w-auto"
        width={264}
        height={43}
      />
    </section>
  );
};

export default TopNav;
