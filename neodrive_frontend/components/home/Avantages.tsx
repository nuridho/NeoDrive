import { Crown, GraduationCap } from "lucide-react";
import { FaUserFriends } from "react-icons/fa";
import { FaFlag, FaMaskFace } from "react-icons/fa6";
import { MdOutlineSupport } from "react-icons/md";
import { Badge } from "../ui/badge";
import { Card, CardDescription, CardTitle } from "../ui/card";


import { CloudUpload, ShieldCheck, FolderOpenDot, Users, Zap, AlarmClock } from "lucide-react";
// import { Badge } from "../ui/badge";
// import { Card, CardDescription, CardTitle } from "../ui/card";

export const Avantages = () => {
  const data = [
    {
      title: "Unggah Mudah & Cepat",
      description: "Dukungan drag & drop serta multi-upload tanpa hambatan untuk semua jenis file.",
      icon: CloudUpload,
    },
    {
      title: "Keamanan Tingkat Tinggi",
      description: "Enkripsi AES 256-bit & autentikasi multi-faktor untuk menjaga data Anda.",
      icon: ShieldCheck,
    },
    {
      title: "Manajemen File Pintar",
      description: "Cari, filter, dan atur file dengan cepat melalui tampilan grid & daftar yang intuitif.",
      icon: FolderOpenDot,
    },
    {
      title: "Kolaborasi Real-Time",
      description: "Bagikan file dengan tim dan beri akses edit atau baca secara instan.",
      icon: Users,
    },
    {
      title: "Performa Optimal",
      description: "Kecepatan unggah/rundown tinggi berkat integrasi dengan AWS S3.",
      icon: Zap,
    },
    {
      title: "Riwayat & Versi File",
      description: "Lihat versi sebelumnya, pulihkan file yang terhapus, dan lacak aktivitas file Anda.",
      icon: AlarmClock,
    },
  ];

  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-yellow-300 border-2 border-black text-black text-xs px-3 py-1 rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          Kenapa Memilih NeoDrive?
        </Badge>
        <h2 className="text-4xl font-black text-center">
          Fitur Unggulan Kami
        </h2>
        <p className="max-w-2xl text-center text-muted-foreground">
          NeoDrive dirancang untuk menyederhanakan penyimpanan file Anda tanpa mengorbankan keamanan, kecepatan, dan kontrol.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <Card
            key={index}
            className="bg-white border-[3px] border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-6 relative hover:bg-yellow-50 transition-all"
          >
            <div className="absolute -top-6 left-6 size-12 border-[3px] border-black rounded bg-blue-500 flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,1)] text-white">
              <item.icon className="size-5" />
            </div>
            <CardTitle className="mt-10 font-bold text-xl">{item.title}</CardTitle>
            <CardDescription className="text-muted-foreground text-sm mt-2">
              {item.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
};
