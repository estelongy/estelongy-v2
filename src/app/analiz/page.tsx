"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Camera, Upload, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AnalizPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        overall: 52,
        skin: 50,
        longevity: 58,
        details: {
          leke: 45,
          kirisiklik: 55,
          nem: 35,
          esneklik: 60,
          gozenek: 40,
          parlaklik: 50
        },
        recommendation: "İleri analiz önerilir"
      });
    }, 3000);
  };

  const reset = () => {
    setSelectedImage(null);
    setResult(null);
    setAnalyzing(false);
  };

  if (result) {
    return (
      <main className="min-h-screen bg-[#0a0e17] pt-20 px-4 pb-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-8"
          >
            <div className="text-6xl font-bold text-white mb-2">
              {result.overall}<span className="text-2xl text-gray-500">/100</span>
            </div>
            <p className="text-[#d4af37] text-lg">Estelongy Skorunuz</p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-red-400 text-sm">Düşük</span>
            </div>
          </motion.div>

          <Card className="bg-[#0f1623] border-gray-800 p-6 mb-6">
            <h3 className="text-white font-bold mb-4">Cilt Analizi</h3>
            <div className="space-y-3">
              {Object.entries(result.details).map(([key, value]: [string, any]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-gray-400 capitalize">{key}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${value < 50 ? 'bg-red-500' : value < 70 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                    <span className="text-white w-8 text-right">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center space-y-4">
            <p className="text-gray-400">{result.recommendation}</p>
            <Button className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 w-full">
              İleri Analiz İçin Randevu Al
            </Button>
            <Button variant="outline" className="border-gray-700 text-gray-400 w-full" onClick={reset}>
              Yeni Analiz Yap
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0e17] pt-20 px-4 flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
            <Camera className="w-10 h-10 text-[#d4af37]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">AI Cilt Analizi</h1>
          <p className="text-gray-400 mb-8">Selfie'nizi yükleyin, yapay zeka analizinizi yapsın</p>

          <Card className="bg-[#0f1623] border-[#d4af37]/20 p-6">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileSelect}
              className="hidden"
            />

            {!selectedImage && !analyzing ? (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-700 rounded-xl p-12 text-center hover:border-[#d4af37] transition-colors cursor-pointer"
              >
                <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-white font-medium mb-2">Fotoğraf Seç</p>
                <p className="text-gray-500 text-sm">JPG, PNG (max 5MB)</p>
              </div>
            ) : selectedImage && !analyzing ? (
              <div className="relative">
                <img 
                  src={selectedImage} 
                  alt="Yüklenen fotoğraf" 
                  className="w-full h-64 object-cover rounded-xl"
                />
                <button 
                  onClick={reset}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70"
                >
                  <X className="w-4 h-4" />
                </button>
                <Button 
                  onClick={startAnalysis}
                  className="w-full mt-4 bg-[#d4af37] text-black hover:bg-[#d4af37]/90"
                >
                  Analiz Et
                </Button>
              </div>
            ) : (
              <div className="py-12">
                <Loader2 className="w-12 h-12 text-[#d4af37] mx-auto mb-4 animate-spin" />
                <p className="text-white">AI Analiz Ediyor...</p>
                <p className="text-gray-500 text-sm mt-2">Cilt tipi, nem, kırışıklık analiz ediliyor</p>
              </div>
            )}
          </Card>

          <p className="text-gray-600 text-sm mt-6">
            Fotoğrafınız güvenle işlenir ve saklanır
          </p>
        </motion.div>
      </div>
    </main>
  );
}