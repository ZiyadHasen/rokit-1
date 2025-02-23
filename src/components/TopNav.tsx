"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import LanguageSelector from "./dropdownLang";

const baseURL = "/api/user";

const userDataCollection = async () => {
  if (Cookies.get("userDataCollected")) return;

  try {
    const response = await fetch(
      "http://ip-api.com/json/?fields=status,country,regionName,city,query"
    );

    const result = await response.json();
    const { query: ipAddress, country, regionName: region, city } = result;

    await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ipAddress, country, region, city }),
    });

    Cookies.set("userDataCollected", "true", { expires: 3 });
  } catch (error) {
    console.error("Data collection error:", error);
  }
};

const TopNav = () => {
  useEffect(() => {
    userDataCollection();
  }, []);

  return (
    <section className="bg-black min-h-[100px] h-auto py-4 sm:py-0 flex items-center justify-center px-4 sm:px-6 relative">
      {/* Logo Container */}
      <div className="flex-shrink-0 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] relative aspect-[3/1] self-start sm:self-center">
        <Image
          src="/assets/headerlogo.svg"
          alt="Company logo"
          className="object-contain object-left"
          fill
          sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
          loading="eager"
          priority
          aria-label="Company logo"
        />
      </div>

      {/* Language Selector */}
      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2">
        <LanguageSelector />
      </div>
    </section>
  );
};

export default TopNav;
