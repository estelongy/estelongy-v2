"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function GirisPage() {
  return (
    <main className="min-h-screen bg-[#0a0e17] pt-20 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-[#d4af37]" />
          </div>
          <h1 className="text-3xl font-bold text-white">Giriş Yap</h1>
        </motion.div>

        <Card className="bg-[#0f1623] border-gray-800 p-6">
          <form className="space-y-4">
            <div>
              <Label className="text-gray-300">E-posta</Label>
              <Input className="bg-gray-800 border-gray-700 text-white mt-1" placeholder="ornek@email.com" />
            </div>
            <div>
              <Label className="text-gray-300">Şifre</Label>
              <Input type="password" className="bg-gray-800 border-gray-700 text-white mt-1" placeholder="••••••" />
            </div>
            <Button className="w-full bg-[#d4af37] text-black hover:bg-[#d4af37]/90">
              Giriş Yap
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            <Link href="/kayit" className="text-[#d4af37]">Kayıt ol</Link>
          </div>
        </Card>
      </div>
    </main>
  );
}