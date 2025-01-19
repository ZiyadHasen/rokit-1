import { Select, SelectItem } from "@heroui/react";

const languages = ["Korea", "English", "italian"];
const products = ["product01", "product01", "product01"];
const years = ["2023", "2024", "2025"];

const KitTab = () => {
  return (
    <section className="flex items-center gap-56 py-8 border-y-[5px] border-[#ADADAD]">
      <h4 className="font-bold text-black text-nowrap text-3xl">카테고리</h4>
      <div className="w-full flex items-center gap-12">
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
  );
};

export default KitTab;
