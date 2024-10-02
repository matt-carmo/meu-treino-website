
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Meu Treino</h1>
          <h2 className="text-gray-700 text-xl">Página em Construção...</h2>
          </div>
      </main>

     <Footer className="absolute bottom-1" />
    </div>
  );
}
