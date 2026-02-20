import React, { useState } from "react";
import { motion } from "framer-motion";

const PricingCard = ({
  title,
  price,
  amount,
  credits,
  description,
  features,
  popular,
  selectedPrice,
  setSelectedPrice,
  onBuy,
  paying,
  payingAmount,
}) => {
  const isSelected = selectedPrice === amount;
  const isPayingThisCard = paying && payingAmount === amount;
  const [loading,setLoading] = useState(false);
  return (
    <motion.div
      onClick={() => setSelectedPrice(amount)}
      whileHover={{ y: -4 }}
      className={`relative rounded-xl p-6 bg-white border transition ${isSelected ? "border-black" : popular ? "border-indigo-500" : "border-gray-200"}`}

    >
       {popular && !isSelected && <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded bg-indigo-600 text-white">Popular</span>}
      {isSelected && <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded bg-black text-white">
            Selected
       </span>}
       <h2 className="text-xl font-semibold">{title}</h2>
       <p className="text-sm text-gray-500 mt-1">{description}</p>
       <div className="mt-4">
        <p className="text-3xl font-bold">{price}</p>
        <p className="text-sm text-indigo-600">{credits}</p>
       </div>
       <button disabled={isPayingThisCard}
       onClick={(e) => {
        e.stopPropagation()
        onBuy(amount);
        setLoading(true)
       }} 
       className={`w-full mt-5 py-2 ${loading? "cursor-none":"cursor-pointer"}  rounded-lg font-medium transition ${isPayingThisCard? "bg-gray-300 cursor-not-allowed": isSelected? "bg-black text-white": "bg-indigo-600 text-white hover:bg-indigo-700"}`}>
            {loading ? "Redirecting...":"Buy Now"}
       </button>
       <ul className="mt-5 space-y-2 text-sm text-gray-600">
        {features.map((f,i) => (
            <li key={i} className="flex gap-2">
                <span className="text-green-600">✔️</span>{f}
            </li>
        ))}
       </ul>
    </motion.div>
  );
};

export default PricingCard;
