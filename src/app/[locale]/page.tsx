import Image from "next/image";
import TopNav from "@/components/TopNav";
import Tabs from "@/components/Tabs";

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
          className="object-cover max-sm:aspect-square"
          aria-label="Hero section image"
        />
      </section>
      <section className="max-container px-4 mt-32 max-md:mt-12">
        <h2 className="text-black font-bold text-5xl max-md:text-3xl mb-24 max-md:mb-12">
          eIFU Downloads
        </h2>
        <Tabs />
      </section>
    </section>
  );
}
