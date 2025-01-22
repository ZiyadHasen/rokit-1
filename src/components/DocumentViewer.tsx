import { Select, SelectItem } from "@heroui/react";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

interface DocumentViewerProps {
  title: string;
  documentName: string;
  versions: string[];
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({
  title,
  versions,
  documentName,
}) => {
  const downloadPdf = (filename: string) => {
    const pdfUrl = `/${filename}`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${filename}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const t = useTranslations("DocumentViewer");

  return (
    <section className="pt-14 max-sm:pt-7 pb-6 flex items-center justify-between border-b-[3px] border-[#ADADAD]">
      <div>
        <h5 className="font-bold text-3xl max-sm:text-base mb-4">{title}</h5>
        <div>
          {/* <button
            aria-label="Share button"
            className="border-2 border-[#757575] rounded-md min-w-36 px-3 h-12 flex items-center justify-center gap-1"
          >
            <Share2 strokeWidth={1.75} />
            <p className="font-bold text-base text-black">{t("share")}</p>
          </button> */}
          <button
            aria-label="Download button"
            onClick={() => {
              console.log("Download button clicked");
              downloadPdf(documentName);
            }}
            className="border-2 border-[#757575] rounded-md sm:min-w-36  px-3 h-12 flex items-center justify-center gap-1"
          >
            <Download strokeWidth={2.25} />
            <p className="font-bold text-base text-black">{t("download")}</p>
          </button>
        </div>
      </div>

      <div>
        <Select
          className="min-w-32"
          placeholder={t("version")}
          classNames={{
            value: ["text-lg"],
            listbox: [`text-[25px]`],
            trigger: [`h-[48px] `],
          }}
          variant="bordered"
          disallowEmptySelection={true}
        >
          {versions.map((version, index) => (
            <SelectItem key={index}>{version}</SelectItem>
          ))}
        </Select>
      </div>
    </section>
  );
};

export default DocumentViewer;
