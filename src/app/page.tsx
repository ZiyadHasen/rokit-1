import Image from "next/image";
import TopNav from "@/app/components/TopNav";
import Tabs from "@/app/components/Tabs";

export default function Home() {
  return (
    <section>
      <TopNav />
      <section>
        <Image
          src="/assets/demo-cover.svg"
          alt="cover"
          width={1920}
          height={678}
          className="object-cover"
        />
      </section>
      <section className="max-container px-4 mt-32 ">
        <h2 className="text-black font-bold text-5xl mb-24 ">eIFU Downloads</h2>
        <Tabs />
      </section>
    </section>
  );
}
