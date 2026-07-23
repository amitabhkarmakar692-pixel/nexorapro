"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

// ─── Constants ──────────────────────────────────────────────────────────────
const CAKE_DATA = {
  name: "Chocolate Truffle Cake",
  description: "Egg-free Belgian chocolate sponge with Belgian chocolate flavoured cream filling. Intense, dark truffle sauce filling. Glazed in dark chocolate ganache. Decorated with fresh seasonal fruits and edible chocolate decorations.",
  price: "£46.99 - £211.99",
  rating: 5,
  reviews: 0,
  banner: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80",
  images: [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&q=80",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&q=80"
  ],
  shapes: ["Rectangle", "Round", "Square"],
  sizes: ["10\"", "12\"", "14\"", "16\"", "18\"", "20\""],
  disclaimer: [
    "All cake sizes stated are the size of the cake board.",
    "Pictures are only for illustration purposes, actual colour and appearance may differ from the picture, depending on the size.",
    "Dark food colouring may leave stains, but they are perfectly edible.",
    "Cake decorations are subject to availability and may slightly vary."
  ],
  allergens: [
    "100% Vegetarian.",
    "Halal-friendly.",
    "Contains GLUTEN, MILK and SOYA.",
    "May contain traces of Nuts, Oats, Peanut, Sesame and Sulphites.",
    "Due to being produced in a kitchen that handles the above-named allergens, we cannot guarantee allergen-free products."
  ]
};

// ─── Components ─────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex text-amber-400">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function CakePage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedShape, setSelectedShape] = useState(CAKE_DATA.shapes[0]);
  const [selectedSize, setSelectedSize] = useState(CAKE_DATA.sizes[0]);
  const [activeTab, setActiveTab] = useState("allergic");
  const [cakeMessage, setCakeMessage] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const tabs = [
      { id: "allergic", title: "Dietary & Allergens" },
      { id: "disclaimer", title: "Disclaimer" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Placeholder Header */}
      <nav className="p-6 border-b text-center font-bold text-xl">i-cakes</nav>

      <main className="max-w-6xl mx-auto p-6 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <img src={CAKE_DATA.banner} alt="Cake" className="w-full rounded-2xl shadow-lg" />
            <div className="flex gap-4">
              {CAKE_DATA.images.map((img, i) => (
                <img key={i} src={img} alt="Thumbnail" className="w-24 h-24 rounded-lg border-2 border-slate-200" />
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-extrabold mb-2">{CAKE_DATA.name}</h1>
            <Stars rating={CAKE_DATA.rating} />
            <p className="text-2xl font-bold my-4 text-orange-600">{CAKE_DATA.price}</p>
            <p className="text-slate-600 mb-6">{CAKE_DATA.description}</p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="font-semibold block mb-2">Shape</label>
                <div className="flex gap-2">
                  {CAKE_DATA.shapes.map(s => (
                    <button key={s} onClick={() => setSelectedShape(s)} className={`px-4 py-2 rounded-full border ${selectedShape === s ? "bg-orange-600 text-white border-orange-600" : "border-slate-300"}`}>{s}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-semibold block mb-2">Size</label>
                <div className="flex flex-wrap gap-2">
                  {CAKE_DATA.sizes.map(s => (
                    <button key={s} onClick={() => setSelectedSize(s)} className={`px-4 py-2 rounded-full border ${selectedSize === s ? "bg-orange-600 text-white border-orange-600" : "border-slate-300"}`}>{s}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-semibold block mb-2">Message on the cake</label>
                <input type="text" value={cakeMessage} onChange={e => setCakeMessage(e.target.value)} className="w-full p-3 rounded-xl border border-slate-300" placeholder="Type here..." />
              </div>
              <div>
                <label className="font-semibold block mb-2">Pickup Time</label>
                <select value={pickupTime} onChange={e => setPickupTime(e.target.value)} className="w-full p-3 rounded-xl border border-slate-300">
                    <option value="">Choose time</option>
                    <option value="12:00-13:00">12:00-13:00</option>
                    <option value="13:00-14:00">13:00-14:00</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="w-20 p-3 rounded-xl border border-slate-300" min="1" />
              <button className="flex-1 bg-orange-600 text-white font-bold py-3.5 rounded-xl hover:bg-orange-700 transition">Add to Basket</button>
            </div>
          </div>
        </div>

        {/* Tabs/Info Section */}
        <div className="mt-16 border-t pt-8">
            <div className="flex gap-4 border-b mb-4">
                {tabs.map(tab => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`pb-2 font-bold ${activeTab === tab.id ? "text-orange-600 border-b-2 border-orange-600" : "text-slate-500"}`}>{tab.title}</button>
                ))}
            </div>
            
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
                {activeTab === "allergic" && CAKE_DATA.allergens.map((a, i) => <li key={i}>{a}</li>)}
                {activeTab === "disclaimer" && CAKE_DATA.disclaimer.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
        </div>
      </main>
    </div>
  );
}
