"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "../auth/actions";
import Link from "next/link";

export default function KayitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0e17] via-[#0f1623] to-[#0a0e17] pt-20 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00d9a3]/10 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-[#00d9a3]" />
          </div>
          <h1 className="text-3xl font-bold text-white">Kayıt Ol</h1>
          <p className="text-gray-400 mt-2">Estelongy dünyasına katılın</p>
        </motion.div>

        <Card className="bg-[#0f1623] border-gray-800 p-6">
          <form action={signup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">Ad Soyad</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <Input 
                  id="name" 
                  name="name"
                  type="text" 
                  placeholder="Adınız Soyadınız" 
                  className="pl-10 bg-gray-800/50 border-gray-700 text-white" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">E-posta</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="ornek@email.com" 
                  className="pl-10 bg-gray-800/50 border-gray-700 text-white" 
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">Şifre</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <Input 
                  id="password" 
                  name="password"
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-10 bg-gray-800/50 border-gray-700 text-white" 
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-[#00d9a3] text-black hover:bg-[#00d9a3]/90 mt-2">
              Kayıt Ol
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            Zaten hesabınız var mı?{" "}
            <Link href="/giris" className="text-[#00d9a3] hover:underline">
              Giriş yapın
            </Link>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <Link href="/" className="text-gray-500 hover:text-gray-400 text-sm">
            ← Ana sayfaya dön
          </Link>
        </div>
      </div>
    </main>
  );
}