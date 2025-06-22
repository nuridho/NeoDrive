import { Form } from "@/components/contact/Form";
import { Hero } from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Page() {
  return (
    <MaxWidthWrapper className="my-20 space-y-32">
      <Hero
        badge="Hubungi Kami"
        title="Jangan ragu untuk terhubung dengan kami"
        description="Kami menghargai komunikasi terbuka dan siap menjawab segala pertanyaan Anda. Jangan ragu untuk menghubungi kami melalui salah satu cara berikut:"
        contact
      />
      <Form />
    </MaxWidthWrapper>
  );
}
