"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

// The url of the backend
// const baseURL = "http://localhost:3000/users";
const baseURL = "/api/user";

const userDataCollection = async () => {
  // Check if the user data is already collected within the last 3 days, if so do nothing
  if (Cookies.get("userDataCollected")) return;

  try {
    const response = await fetch(
      "http://ip-api.com/json/?fields=status,country,regionName,city,query"
    );

    const result = await response.json();
    const ipAddress = result.query;
    const country = result.country;
    const region = result.regionName;
    const city = result.city;

    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ipAddress,
        country,
        region,
        city,
      }),
    });

    Cookies.set("userDataCollected", "true", { expires: 3 });
  } catch (error) {
    console.log(error);
  }
};

const TopNav = () => {
  useEffect(() => {
    userDataCollection();
  }, []);

  return (
    <section className="bg-black py-10 max-sm:py-6 flex items-center justify-center">
      <Image
        src="/assets/our-logo.svg"
        alt="Our company logo"
        className="max-sm:h-10 max-sm:w-auto"
        width={264}
        height={43}
        aria-label="Our logo"
        loading="eager"
        priority={true}
      />
    </section>
  );
};

export default TopNav;
