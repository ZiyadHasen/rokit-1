import Tabs from "@/components/Tabs";
import TopNav from "@/components/TopNav";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <section>
      <TopNav />

      <section
        className="max-container px-4 mt-16 max-md:mt-12 
text-black"
      >
        <h1 className="font-bold text-4xl max-md:text-2xl max-sm:text-xl leading-10 ">
          {t("header.mainHeader")}
        </h1>
        <h2 className="mt-1 font-bold text-2xl max-md:text-xl max-sm:text-lg">
          {t("header.subHeader")}
        </h2>
        <p className="font-normal text-2xl max-md:text-xl max-sm:text-lg">
          {t("header.firstContent")}
        </p>
        <p className="mt-2 font-normal text-2xl max-md:text-xl max-sm:text-lg">
          {t("header.secondContent")}
        </p>
        <p className="font-normal text-2xl max-md:text-xl max-sm:text-lg">
          {t("header.thirdContent")}
        </p>
        <p className="mt-2 font-normal text-2xl max-md:text-xl max-sm:text-lg">
          {t("header.forthContent")}
        </p>

        <p className="mt-14 font-bold text-5xl max-md:text-3xl mb-20 max-md:mb-12">
          eIFU Downloads
        </p>
        <Tabs />
      </section>

      <footer className="text-black text-center mt-6 pb-12">
        <p className="font-normal text-xl max-md:text-sm">{t("footer.info")}</p>
        <p className="font-normal text-xl max-md:text-sm">
          COPYRIGHT ⓒ{" "}
          <span className="font-semibold">
            ROKIT HEALTHCARE, INC. ALL RIGHTS RESERVED
          </span>
        </p>
      </footer>
    </section>
  );
}
