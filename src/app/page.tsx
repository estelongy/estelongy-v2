"use client";

import { motion } from "framer-motion";
import { Camera, Calendar, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0e17] via-[#0f1623] to-[#0a0e17]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0e17]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-[#d4af37]" />
            <span className="text-xl font-bold text-white">ESTELONGY</span>
          </div>
          <Button 
            variant="outline" 
            className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
            onClick={() => router.push('/giris')}
          >
            Giriş Yap
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Zamansız Güzellik{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#00d9a3]">
              Mimarisi
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Sağlıklı yaş al, her zaman güzel görün. AI destekli analiz, uzman doktorlar ve bilimsel ürünlerle tanışın.
          </motion.p>

          {/* 3 Ana Kapı */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {/* Kapı 1: Analiz Yap */}
            <Card 
              className="group relative overflow-hidden bg-[#0f1623] border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 cursor-pointer"
              onClick={() => router.push('/analiz')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Analiz Yap</h3>
                <p className="text-gray-400 text-sm mb-4">AI ile cilt ve sağlık analizinizi alın</p>
                <Button 
                  className="w-full bg-[#d4af37] text-black hover:bg-[#d4af37]/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push('/analiz');
                  }}
                >
                  Ücretsiz Başla
                </Button>
              </div>
            </Card>

            {/* Kapı 2: Randevu Al */}
            <Card 
              className="group relative overflow-hidden bg-[#0f1623] border-[#00d9a3]/20 hover:border-[#00d9a3] transition-all duration-300 cursor-pointer"
              onClick={() => router.push('/randevu')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d9a3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00d9a3]/10 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-[#00d9a3]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Randevu Al</h3>
                <p className="text-gray-400 text-sm mb-4">Uzman estetik ve longevity doktorlarına ulaşın</p>
                <Button 
                  className="w-full bg-[#00d9a3] text-black hover:bg-[#00d9a3]/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push('/randevu');
                  }}
                >
                  Doktor Bul
                </Button>
              </div>
            </Card>

            {/* Kapı 3: Ürün Al */}
            <Card 
              className="group relative overflow-hidden bg-[#0f1623] border-purple-500/20 hover:border-purple-500 transition-all duration-300 cursor-pointer"
              onClick={() => router.push('/urunler')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ürün Al</h3>
                <p className="text-gray-400 text-sm mb-4">Bilimsel verilere göre puanlanmış ürünler</p>
                <Button 
                  className="w-full bg-purple-500 text-white hover:bg-purple-500/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push('/urunler');
                  }}
                >
                  Mağazaya Git
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}