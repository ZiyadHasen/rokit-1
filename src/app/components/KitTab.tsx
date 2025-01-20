import { Select, SelectItem } from "@heroui/react";

import dummyFiles from "../data/dummyFiles";
import DocumentViewer from "./DocumentViewer";

const languages = ["Korea", "English", "italian"];
const products = ["product01", "product01", "product01"];
const years = ["2023", "2024", "2025"];

const KitTab = () => {
  return (
    <section className="pb-24">
      <section className="flex max-lg:flex-col items-center gap-56 max-lg:gap-3 py-8 max-sm:py-6 border-y-[5px] border-[#ADADAD]">
        <h4 className="font-bold text-black text-nowrap text-3xl max-sm:text-2xl">
          카테고리
        </h4>
        <div className="w-full flex items-center gap-12 max-sm:gap-5">
          <Select
            className="max-w-1/3 text-lg"
            placeholder="국가"
            classNames={{
              value: ["text-lg"],
              listbox: [`text-[25px]`],
              trigger: [`h-[48px] `],
            }}
            variant="bordered"
            disallowEmptySelection={true}
          >
            {languages.map((language, index) => (
              <SelectItem key={index}>{language}</SelectItem>
            ))}
          </Select>
          <Select
            className="max-w-1/3"
            placeholder="제품"
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
          <Select
            className="max-w-1/3"
            placeholder="년도"
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
          </Select>
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
