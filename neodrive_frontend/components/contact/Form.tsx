import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ComponentForm } from "./ComponentForm";

export const Form = () => {
  return (
    <div className="space-y-16">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Badge className="bg-background">Formulir Kontak</Badge>
        <h2 className="text-4xl font-bold text-center">
          Informasi Siswa
        </h2>
        <p className="max-w-2xl text-center">
          Jika Anda memiliki pertanyaan khusus atau ingin meminta informasi lebih
          lanjut mengenai Lycée Comte de Foix, silakan isi formulir kontak di bawah ini.
          Mohon lengkapi informasi berikut agar kami dapat memahami kebutuhan Anda dengan lebih baik:
        </p>
      </div>
      <Card className="bg-background p-8 relative">
        <div className="flex items-center gap-3 absolute -top-5 left-1/2 -translate-x-1/2">
          <Button size="icon" className="bg-destructive text-background">
            <FaFacebookF />
          </Button>
          <Button size="icon" className="bg-destructive text-background">
            <RiTwitterXLine />
          </Button>
          <Button size="icon" className="bg-destructive text-background">
            <FaLinkedinIn />
          </Button>
        </div>
        <div className="mt-5">
          <ComponentForm />
        </div>
      </Card>
    </div>
  );
};
