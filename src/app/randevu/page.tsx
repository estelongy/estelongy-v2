"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const clinics = [
  { id: 1, name: "Dr. Ayşe Yılmaz", location: "İstanbul, Nişantaşı", rating: 4.9, price: 500 },
  { id: 2, name: "Dr. Mehmet Kaya", location: "Ankara, Çankaya", rating: 4.8, price: 450 },
  { id: 3, name: "Dr. Zeynep Demir", location: "İzmir, Alsancak", rating: 5.0, price: 400 },
];

const timeSlots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

export default function RandevuPage() {
  const [step, setStep] = useState(1);
  const [selectedClinic, setSelectedClinic] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleConfirm = () => {
    setStep(4);
  };

  if (step === 4) {
    return (
      <main className="min-h-screen bg-[#0a0e17] pt-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Randevu Alındı!</h1>
          <p className="text-gray-400 mb-6">Klinik onayı bekleniyor</p>

          <Card className="bg-[#0f1623] border-gray-800 p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#d4af37]" />
              <div>
                <p className="text-white font-medium">{clinics.find(c => c.id === selectedClinic)?.name}</p>
                <p className="text-gray-500 text-sm">{clinics.find(c => c.id === selectedClinic)?.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#d4af37]" />
              <p className="text-white">{selectedDate} - {selectedTime}</p>
            </div>
          </Card>

          <Button className="w-full mt-6 bg-[#d4af37] text-black" onClick={() => window.location.href = '/'}>
            Ana Sayfaya Dön
          </Button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0e17] pt-20 px-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Randevu Al</h1>

        {/* Step 1: Klinik Seçimi */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-lg text-gray-400 mb-4">1. Klinik Seçin</h2>
            <div className="space-y-3">
              {clinics.map((clinic) => (
                <Card
                  key={clinic.id}
                  onClick={() => setSelectedClinic(clinic.id)}
                  className={`p-4 cursor-pointer transition-all ${selectedClinic === clinic.id ? 'border-[#d4af37] bg-[#d4af37]/5' : 'border-gray-800 hover:border-gray-700'}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold">{clinic.name}</h3>
                      <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        {clinic.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#d4af37] font-bold">{clinic.price} ₺</p>
                      <p className="text-gray-500 text-sm">⭐ {clinic.rating}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Button 
              className="w-full mt-6 bg-[#d4af37] text-black" 
              disabled={!selectedClinic}
              onClick={() => setStep(2)}
            >
              Devam Et
            </Button>
          </motion.div>
        )}

        {/* Step 2: Tarih Seçimi */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-lg text-gray-400 mb-4">2. Tarih Seçin</h2>
            <div className="grid grid-cols-3 gap-3">
              {["31 Mart", "1 Nisan", "2 Nisan", "3 Nisan", "4 Nisan", "5 Nisan"].map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`p-4 rounded-xl border text-center transition-all ${selectedDate === date ? 'border-[#d4af37] bg-[#d4af37]/10 text-white' : 'border-gray-800 text-gray-400 hover:border-gray-700'}`}
                >
                  <Calendar className="w-5 h-5 mx-auto mb-2" />
                  {date}
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <Button variant="outline" className="flex-1 border-gray-700" onClick={() => setStep(1)}>Geri</Button>
              <Button 
                className="flex-1 bg-[#d4af37] text-black" 
                disabled={!selectedDate}
                onClick={() => setStep(3)}
              >
                Devam
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Saat Seçimi */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-lg text-gray-400 mb-4">3. Saat Seçin</h2>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-4 rounded-xl border text-center transition-all ${selectedTime === time ? 'border-[#d4af37] bg-[#d4af37]/10 text-white' : 'border-gray-800 text-gray-400 hover:border-gray-700'}`}
                >
                  <Clock className="w-5 h-5 mx-auto mb-2" />
                  {time}
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <Button variant="outline" className="flex-1 border-gray-700" onClick={() => setStep(2)}>Geri</Button>
              <Button 
                className="flex-1 bg-[#d4af37] text-black" 
                disabled={!selectedTime}
                onClick={handleConfirm}
              >
                Onayla
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}