import { Select, SelectItem } from "@heroui/react";
import { Download, Share2 } from "lucide-react";
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

  return (
    <section className="pt-14 pb-6 flex items-center justify-between border-b-[3px] border-[#ADADAD]">
      <div>
        <h5 className="font-bold text-3xl max-sm:text-lg mb-4">{title}</h5>
        <div className="flex max-sm:flex-col sm:items-center gap-3">
          <button
            aria-label="Share button"
            className="border-2 border-[#757575] rounded-md w-36 h-12 flex items-center justify-center gap-1"
          >
            <Share2 strokeWidth={1.75} />
            <p className="font-bold text-base text-black">공유</p>
          </button>
          <button
            aria-label="Download button"
            onClick={() => {
              console.log("Download button clicked");
              downloadPdf(documentName);
            }}
            className="border-2 border-[#757575] rounded-md w-36 h-12 flex items-center justify-center gap-1"
          >
            <Download strokeWidth={2.25} />
            <p className="font-bold text-base text-black">다운로드</p>
          </button>
        </div>
      </div>

      <div>
        <Select
          className="min-w-32"
          placeholder="년도"
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
