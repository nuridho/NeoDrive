"use client";
import Marquee from "react-fast-marquee";
import MaxWidthWrapperNavbar from "../MaxWidthWrapperNavbar";

export const MarqueeMessages = () => {
    const messages = [
        "🆕 Fitur thumbnail otomatis kini aktif!",
        "💡 Tip: Gunakan drag & drop untuk upload lebih cepat",
        "🔒 Status sistem: S3 normal, latency 50 ms",
        "📁 Anda mengunggah 5 file minggu ini",
        "⏱️ Proses sinkronisasi rata-rata hanya 120ms",
        "🌤️ Layanan tersedia 99.99% uptime selama 30 hari terakhir",
        "📂 Total 124 file tersimpan di akun Anda",
        "🔔 Notifikasi: Fitur kolaborasi segera hadir!",

    ];

    return (
        // <MaxWidthWrapperNavbar className="flex flex-col gap-3 sticky -top-10 z-50 bg-background">
        <div className="w-full h-16 rounded-lg border-2 flex items-center justify-between pl-3 overflow-hidden bg-background">
            <div className="animate-marquee whitespace-nowrap py-2 px-4 text-sm text-blue-900 font-medium">
                <Marquee pauseOnHover gradient={false} speed={80}>
                    {messages.map((msg, index) => (
                        <span key={index} className="px-2 flex items-center">
                            {msg}
                            {index !== messages.length - 1 && <span className="mx-2 text-gray-400"></span>}
                        </span>
                    ))}
                </Marquee>
            </div>
        </div>
        // </MaxWidthWrapperNavbar>
    );
};
