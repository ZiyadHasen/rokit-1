import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-white py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Logo Column */}
          <Image
            src="/assets/headerlogo.svg"
            alt="Company logo"
            className="object-contain object-left"
            fill
            sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
            loading="eager"
            priority
            aria-label="Company logo"
          />

          {/* Address Column */}
          <div className="text-sm space-y-1 text-center md:text-left">
            <p>서울특별시 | 강남구 | 테헤란로 10길 | 12층 | (06234)</p>
            <p>TEL: 1234-5678</p>
            <p>12F, 10 Teheran-ro, Gangnam-gu, Seoul, South Korea | 06234</p>
            <p>TEL: 1234-5678</p>
          </div>

          {/* Copyright Column */}
          <div className="text-sm text-right hidden md:block">
            <p>이용약관 | 개인정보 보호정책</p>
            <p>COPYRIGHT © ROKIT HEALTHCARE, INC. ALL RIGHTS RESERVED</p>
          </div>

          {/* Mobile Copyright - Shows only on mobile */}
          <div className="text-sm text-center md:hidden">
            <p>이용약관 | 개인정보 보호정책</p>
            <p>COPYRIGHT © ROKIT HEALTHCARE, INC.</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
