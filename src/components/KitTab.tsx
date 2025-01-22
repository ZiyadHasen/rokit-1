import { Select, SelectItem } from "@heroui/react";
import { startTransition } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

import dummyFiles from "../data/dummyFiles";
import DocumentViewer from "./DocumentViewer";

const products = ["All", "3D Bio Printer", "KIT", "AiD Regen"];
// const years = ["2023", "2024", "2025"];

const KitTab = () => {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const t = useTranslations("HomePage");

  const handleLanguageChange = (lang: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: lang }
      );
    });
  };

  return (
    <section className="pb-24">
      <section className="flex max-lg:flex-col items-center gap-56 max-lg:gap-3 py-8 max-sm:py-6 border-y-[5px] border-[#ADADAD]">
        <p className="font-bold text-black text-nowrap text-3xl max-sm:text-2xl">
          {t("category")}
        </p>
        <div className="w-full flex items-center gap-12 max-sm:gap-5">
          <Select
            className="max-w-1/3 text-lg"
            placeholder={t("options.language.placeholder")}
            classNames={{
              value: ["text-lg"],
              listbox: [`text-[25px]`],
              trigger: [`h-[48px] `],
            }}
            variant="bordered"
            disallowEmptySelection={true}
          >
            <SelectItem onPress={() => handleLanguageChange("en")}>
              {t("options.language.options.0.en")}
            </SelectItem>
            <SelectItem onPress={() => handleLanguageChange("kr")}>
              {t("options.language.options.1.kr")}
            </SelectItem>
            <SelectItem onPress={() => handleLanguageChange("it")}>
              {t("options.language.options.2.it")}
            </SelectItem>
          </Select>
          <Select
            className="max-w-1/3"
            placeholder={t("options.product.placeholder")}
            classNames={{
              value: ["text-lg"],
              listbox: [`text-[25px]`],
              trigger: [`h-[48px] `],
            }}
            variant="bordered"
            disallowEmptySelection={true}
          >
            {products.map((product, index) => (
              <SelectItem key={index}>{product}</SelectItem>
            ))}
          </Select>
          {/* <Select
            className="max-w-1/3"
            placeholder={t("options.year.placeholder")}
            classNames={{
              value: ["text-lg"],
              listbox: [`text-[25px]`],
              trigger: [`h-[48px] `],
            }}
            variant="bordered"
            disallowEmptySelection={true}
          >
            {years.map((year, index) => (
              <SelectItem key={index}>{year}</SelectItem>
            ))}
          </Select> */}
        </div>
      </section>

      {dummyFiles.map((file, index) => (
        <DocumentViewer
          key={index}
          title={file.title}
          versions={file.versions}
          documentName={file.documentName}
        />
      ))}
    </section>
  );
};

export default KitTab;
