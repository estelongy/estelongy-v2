"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const questions = [
  {
    id: 1,
    question: "Günde ortalama kaç saat uyuyorsunuz?",
    options: ["< 5 saat", "5-6 saat", "7-8 saat", "> 8 saat"],
    scores: [30, 50, 90, 70]
  },
  {
    id: 2,
    question: "Stres seviyenizi nasıl değerlendirirsiniz?",
    options: ["Çok yüksek", "Yüksek", "Orta", "Düşük"],
    scores: [20, 40, 70, 90]
  },
  {
    id: 3,
    question: "Günde kaç bardak su içiyorsunuz?",
    options: ["< 4 bardak", "4-6 bardak", "7-10 bardak", "> 10 bardak"],
    scores: [30, 50, 80, 90]
  },
  {
    id: 4,
    question: "Haftada kaç gün egzersiz yapıyorsunuz?",
    options: ["Hiç", "1-2 gün", "3-4 gün", "5+ gün"],
    scores: [20, 50, 80, 95]
  },
  {
    id: 5,
    question: "Beslenme alışkanlıklarınız nasıl?",
    options: ["Düzensiz", "Fast food ağırlıklı", "Dengeli", "Çok sağlıklı"],
    scores: [30, 40, 75, 90]
  }
];

export default function AnketPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (scoreIndex: number) => {
    const newAnswers = [...answers, questions[current].scores[scoreIndex]];
    setAnswers(newAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    const total = answers.reduce((a, b) => a + b, 0);
    return Math.round(total / answers.length);
  };

  if (showResult) {
    const score = calculateScore();
    return (
      <main className="min-h-screen bg-[#0a0e17] pt-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#00d9a3]/10 flex items-center justify-center">
            <Check className="w-10 h-10 text-[#00d9a3]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Anket Tamamlandı</h1>
          <p className="text-gray-400 mb-6">Longevity skorunuz hesaplandı</p>

          <Card className="bg-[#0f1623] border-[#00d9a3]/20 p-8 mb-6">
            <div className="text-5xl font-bold text-white mb-2">
              {score}<span className="text-2xl text-gray-500">/100</span>
            </div>
            <p className="text-[#00d9a3]">Longevity Skoru</p>
          </Card>

          <div className="space-y-3">
            <Button 
              className="w-full bg-[#d4af37] text-black hover:bg-[#d4af37]/90"
              onClick={() => router.push('/randevu')}
            >
              Randevu Al
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-gray-700 text-gray-400"
              onClick={() => router.push('/urunler')}
            >
              Ürünlere Göz At
            </Button>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0e17] pt-20 px-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00d9a3]/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#00d9a3]" />
            </div>
            <span className="text-gray-500">
              {current + 1} / {questions.length}
            </span>
          </div>

          <h2 className="text-xl font-bold text-white mb-6">
            {questions[current].question}
          </h2>

          <div className="space-y-3">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 bg-[#0f1623] border border-gray-800 rounded-xl text-left text-white hover:border-[#00d9a3] transition-colors flex items-center justify-between group"
              >
                <span>{option}</span>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#00d9a3]" />
              </button>
            ))}
          </div>

          <div className="mt-6 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#00d9a3] transition-all duration-300"
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}