"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const products = [
  {
    id: 1,
    name: "Retinol Serum 2.5%",
    brand: "SkinScience",
    price: 450,
    rating: 92,
    category: "Anti-Aging",
    image: "🧴",
  },
  {
    id: 2,
    name: "Hyaluronic Acid",
    brand: "DermaLab",
    price: 320,
    rating: 88,
    category: "Nemlendirici",
    image: "💧",
  },
  {
    id: 3,
    name: "Vitamin C Complex",
    brand: "GlowUp",
    price: 380,
    rating: 95,
    category: "Aydınlatıcı",
    image: "✨",
  },
  {
    id: 4,
    name: "Peptide Krem",
    brand: "LongevityCo",
    price: 520,
    rating: 90,
    category: "Anti-Aging",
    image: "🧬",
  },
  {
    id: 5,
    name: "Niacinamide 10%",
    brand: "PureSkin",
    price: 280,
    rating: 87,
    category: "Leke Karşıtı",
    image: "🌟",
  },
  {
    id: 6,
    name: "Collagen Booster",
    brand: "YouthMax",
    price: 650,
    rating: 93,
    category: "Longevity",
    image: "💎",
  },
];

export default function UrunlerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0e17] via-[#0f1623] to-[#0a0e17] pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-500/10 flex items-center justify-center">
            <ShoppingBag className="w-10 h-10 text-purple-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Bilimsel Ürünler
          </h1>
          <p className="text-gray-400 text-lg">
            Estelongy Puanı'na göre seçilmiş, kanıtlanmış etkinlik
          </p>
        </motion.div>

        {/* Arama ve Filtre */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Input 
              placeholder="Ürün ara..." 
              className="pl-10 bg-[#0f1623] border-gray-700 text-white"
            />
          </div>
          <Button variant="outline" className="border-gray-700 text-gray-400">
            <Filter className="w-4 h-4 mr-2" />
            Filtrele
          </Button>
        </div>

        {/* Ürün Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="bg-[#0f1623] border-purple-500/20 hover:border-purple-500 transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {product.image}
                    </div>
                    <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                      <Star className="w-3 h-3 mr-1 fill-purple-400" />
                      {product.rating} Puan
                    </Badge>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-1">{product.brand}</p>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300">
                    {product.category}
                  </Badge>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-white">
                      {product.price} ₺
                    </span>
                    <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                      Sepete Ekle
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="border-gray-700 text-gray-400" onClick={() => window.history.back()}>
            ← Geri Dön
          </Button>
        </div>
      </div>
    </main>
  );
}