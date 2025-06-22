"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const cardsData: CardProps[] = [
  {
    title: "Tentang Kami",
    description:
      "Pelajari misi kami, nilai-nilai inti, dan komitmen kami untuk memberikan pengalaman belajar terbaik kepada para siswa. Temui tim pengajar kami yang penuh semangat dan pendekatan pendidikan yang dinamis.",
    link: "/about",
  },
  {
    title: "Fasilitas Sekolah",
    description:
      "Jelajahi Lycée Comte de Foix – lingkungan modern dan ramah yang dirancang untuk mendukung perkembangan siswa. Temukan fasilitas kami, laboratorium, ruang kegiatan siswa, dan lainnya.",
    link: "/establishment",
  },
  {
    title: "Kehidupan Siswa",
    description:
      "Masuki dunia kehidupan siswa yang aktif dan beragam. Temukan berbagai aktivitas ekstrakurikuler, seni, dan olahraga yang membuat pengalaman belajar tak terlupakan.",
    link: "/student-life",
  },
  {
    title: "Penerimaan Siswa",
    description:
      "Cari tahu tentang proses pendaftaran di Lycée Comte de Foix. Temukan informasi seputar syarat penerimaan, batas waktu pendaftaran, dan ketersediaan tempat.",
    link: "/admissions",
  },
];

export const Browse = () => {
  const router = useRouter();
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Jelajahi Lebih Lanjut</Badge>
        <h2 className="text-4xl font-bold text-center">Telusuri Halaman Kami</h2>
        <p className="max-w-2xl text-center">
          Temukan berbagai informasi penting tentang Lycée Comte de Foix.
          Luangkan waktu Anda untuk menjelajahi dan memahami lebih jauh pengalaman pendidikan yang kami tawarkan.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="bg-background flex flex-col justify-center items-start gap-10 p-8"
          >
            <h3 className="text-2xl font-bold text-center w-full">
              {card.title}
            </h3>
            <div
              className="w-full border-t-2 border-black relative"
              style={{
                borderTopStyle: "dashed",
                borderTopWidth: "2px",
                borderImage:
                  "repeating-linear-gradient(to right, black, black 10px, transparent 10px, transparent 20px) 1",
              }}
            >
              <div className="size-6 rounded-full bg-background border-2 absolute left-0 -top-3"></div>
              <div className="size-6 rounded-full bg-background border-2 absolute right-0 -top-3"></div>
            </div>
            <p className="text-center">{card.description}</p>
            <Button
              onClick={() => {
                router.push(card.link);
              }}
              className="bg-destructive w-full text-background flex items-center gap-3"
            >
              Pelajari lebih lanjut
              <ArrowRight />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
