import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "../ui/badge";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Apa itu NeoDrive?",
    answer:
      "NeoDrive adalah layanan penyimpanan cloud yang aman dan mudah digunakan untuk mengelola, menyimpan, dan berbagi file dari mana saja.",
  },
  {
    question: "Berapa kapasitas penyimpanan gratis yang tersedia?",
    answer:
      "Pengguna baru mendapatkan penyimpanan gratis sebesar 15GB. Kapasitas dapat ditingkatkan melalui paket berlangganan.",
  },
  {
    question: "Apakah file saya aman di NeoDrive?",
    answer:
      "Sangat aman. Semua file dienkripsi saat transit dan saat disimpan. Kami juga menggunakan autentikasi dua faktor (2FA).",
  },
  {
    question: "Bagaimana cara mengunggah file ke NeoDrive?",
    answer:
      "Anda bisa drag & drop file langsung ke dashboard, atau klik tombol 'Upload' untuk memilih file dari perangkat.",
  },
  {
    question: "Bisakah saya berbagi file dengan orang lain?",
    answer:
      "Tentu! Anda dapat membagikan file dengan link publik atau memberikan akses hanya kepada pengguna tertentu.",
  },
  {
    question: "Apakah NeoDrive mendukung kolaborasi file?",
    answer:
      "Ya, Anda dapat bekerja sama secara real-time menggunakan fitur komentar, versi dokumen, dan notifikasi kolaborasi.",
  },
  {
    question: "Apakah tersedia aplikasi seluler NeoDrive?",
    answer:
      "Untuk saat ini, NeoDrive hanya bisa diakses melalui website.",
  },
  {
    question: "Bagaimana jika saya kehilangan file?",
    answer:
      "NeoDrive memiliki fitur 'Recycle Bin' di mana file yang dihapus disimpan selama 30 hari sebelum dihapus permanen.",
  },
];

export const Questions = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background border border-border">Butuh bantuan?</Badge>
        <h2 className="text-4xl font-bold text-center">Pertanyaan Umum</h2>
        <p className="max-w-2xl text-center text-muted-foreground">
          Temukan jawaban untuk pertanyaan yang paling sering diajukan seputar penggunaan NeoDrive.
        </p>
      </div>
      <div className="flex items-start gap-4 max-md:flex-col w-full">
        <div className="flex flex-col gap-4 md:w-1/2 w-full">
          {faqData.slice(0, 4).map((item, index) => (
            <Accordion
              key={index}
              className="w-full"
              type="single"
              collapsible
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-start h-20">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-start text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 w-full">
          {faqData.slice(4, 8).map((item, index) => (
            <Accordion
              key={index + 4}
              className="w-full"
              type="single"
              collapsible
            >
              <AccordionItem value={`item-${index + 4}`}>
                <AccordionTrigger className="text-start h-20">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-start text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
