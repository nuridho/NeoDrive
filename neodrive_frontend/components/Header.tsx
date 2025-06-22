"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"; // pastikan kamu sudah `shadcn add dialog`
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import MaxWidthWrapperNavbar from "./MaxWidthWrapperNavbar";
import { Menu } from "lucide-react";

export const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false); // toggle popup

  return (
    <MaxWidthWrapperNavbar className="flex flex-col gap-3 sticky -top-10 z-50 bg-background">
      <div className="w-full h-16 rounded-lg border-2 flex items-center justify-between pl-3 overflow-hidden bg-background">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img
            src="https://i.postimg.cc/fLbKgQgG/Logo.webp"
            alt="logo"
            className="h-12 w-12"
          />
          <p className="max-sm:text-xs font-bold">NeoDrive</p>
        </div>

        <div className="flex gap-8 text-lg font-semibold">
          <button onClick={() => router.push("/")} className="hover:text-blue-600 transition">
            Beranda
          </button>
          <button onClick={() => router.push("/mydrive")} className="hover:text-blue-600 transition">
            MyDrive
          </button>
          <button onClick={() => router.push("/contact")} className="hover:text-blue-600 transition">
            Contact
          </button>
        </div>

        {/* Trigger untuk Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="mr-4 bg-yellow-300" onClick={() => setOpen(true)}>
              Login
            </Button>
          </DialogTrigger>
          <DialogContent
            className="border-4 border-black bg-yellow-100 rounded-xl shadow-lg text-black p-6 max-w-md"
          >
            <DialogHeader>
              <DialogTitle className="text-2xl font-extrabold">Masuk ke NeoDrive</DialogTitle>
              <DialogDescription className="text-md">
                Gunakan akun Anda untuk mengakses file, folder, dan lebih banyak lagi.
              </DialogDescription>
            </DialogHeader>

            {/* Bisa ganti dengan form login sesungguhnya */}
            <div className="flex flex-col gap-4 mt-4">
              <input
                type="email"
                placeholder="Email"
                className="border-2 border-black px-4 py-2 rounded-md bg-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-2 border-black px-4 py-2 rounded-md bg-white"
              />
              <Button
                className="bg-blue-500 border-2 border-black text-white hover:bg-blue-600"
                onClick={() => {
                  setOpen(false);
                  router.push("/mydrive");
                }}
              >
                Masuk
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </MaxWidthWrapperNavbar>
  );
};
