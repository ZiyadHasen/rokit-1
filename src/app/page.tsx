import Image from "next/image";
import TopNav from "./components/TopNav";

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
    </section>
  );
}
