"use client";
import { useState } from "react";

import KitTab from "./KitTab";

interface Tab {
  label: string;
  value: string;
}

const tabs: Tab[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "3D Bioprinter",
    value: "3d",
  },
  {
    label: "KIT",
    value: "kit",
  },
  {
    label: "AiD Regen",
    value: "aid",
  },
];

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState<string>("all");
  return (
    <section>
      <section className="flex items-center gap-11 mb-11">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`py-4 px-11 rounded-md  ${
              currentTab === tab.value ? "bg-black" : "bg-transparent"
            }`}
            onClick={() => setCurrentTab(tab.value)}
          >
            {" "}
            <p
              className={`text-2xl ${
                currentTab === tab.value ? "text-white" : "text-[#ADADAD]"
              }`}
            >
              {tab.label}
            </p>
          </button>
        ))}
      </section>
      <KitTab />
    </section>
  );
};

export default Tabs;
