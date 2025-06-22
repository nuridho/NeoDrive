import Image from "next/image";
import { Card } from "../ui/card";

export const HeroSection = () => {
  const data = [
    { category: "Pengguna Aktif", value: "+12.000" },
    { category: "File Tersimpan", value: "+1 Juta" },
    { category: "Uptime Server", value: "99.99%" },
  ];


  return (
    <div className="flex items-center gap-14 max-lg:flex-col">
      <div className="relative">
        <Image
          src="/img/lycee.jpg"
          alt="Gambar Hero"
          width={500}
          height={500}
          className="border-8 border-blue-400"
        />
        <div className="absolute inset-[3px] border-2"></div>
        <div className="size-6 border-2 bg-background rounded-full absolute -top-1 -left-1"></div>
        <div className="size-6 border-2 bg-background rounded-full absolute -top-1 -right-1"></div>
        <div className="size-6 border-2 bg-background rounded-full absolute -bottom-1 -left-1"></div>
        <div className="size-6 border-2 bg-background rounded-full absolute -bottom-1 -right-1"></div>
      </div>
      <div className="lg:w-1/2 space-y-5">
        {/* <h4 className="underline max-lg:text-center">
          Selamat Datang di Lycée Comte de Foix
        </h4> */}
        <h1 className="text-4xl font-bold max-lg:text-center">
          Simpan, Kelola, dan Bagikan File dengan{" "}
          <span className="text-blue-500">Aman</span> dan{" "}
          <span className="text-blue-500">Mudah</span>.
        </h1>
        <h3 className="max-lg:text-center">
          NeoDrive adalah solusi cloud storage modern yang memungkinkan Anda
          menyimpan file secara aman, berbagi dengan mudah, dan mengakses data
          Anda kapan saja dari perangkat mana pun. Dirancang dengan keamanan dan
          kenyamanan sebagai prioritas utama.
        </h3>
        <Card className="flex items-center p-5 gap-5 shadow-blue">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-3xl font-bold">{item.value}</p>
              <p>{item.category}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
