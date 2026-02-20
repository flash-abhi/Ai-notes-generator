import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import PricingCard from "../components/PricingCard";
import axios from "axios";
import { serverUrl } from "../App";

const Pricing = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [paying, setPaying] = useState(false);
  const [payingAmount, setPayingAmount] = useState(null);
  const navigate = useNavigate();
  const handlePaying = async (amount) => {
    try {
      setPayingAmount(amount);
      setPaying(true);
      const result = await axios.post(serverUrl+"/api/credit/order",{amount},{withCredentials:true})
      if(result.data.url){
        window.location.href = result.data.url;
      }
      setPaying(false)
    } catch (error) {
      setPaying(false);
      console.log(error)
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 relative">
      <button
        onClick={() => navigate("/")}
        className="flex items-center cursor-pointer gap-2 text-gray-600 font-medium text-3xl hover:text-black mb-6"
      >
        <IoArrowBackCircleSharp className="mx-1" />
        Back
      </button>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold">Buy Credits</h1>
        <p className="text-gray-600 mt-2">
          Choose a plan that fits your study needs
        </p>
      </motion.div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingCard
          onBuy={handlePaying}
          title={"Starter"}
          price={"Rs.100"}
          amount={100}
          credits={"50 Credits"}
          description={"Perfect for quick revisions"}
          features={[
            "Generate AI notes",
            "Exam-focused answers",
            "Diagram & charts support",
            "Fast generation",
          ]}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          paying={paying}
          payingAmount={payingAmount}
        />

        <PricingCard
        popular
        title={"Popular"}
        price="Rs 200" 
        amount={200}
        credits={"120 credits"}
        description={"Best value for students"}
        features={[
          "All Starter features",
          "More credits per Rupee",
          "Revision mode access",
          "Priority AI response"
        ]}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        onBuy={handlePaying}
        paying={paying}
        payingAmount={payingAmount}
        />
        <PricingCard
        title={"Pro Learner"}
        price="Rs 500" 
        amount={500}
        credits={"300 credits"}
        description={"For serious exam Preparation"}
        features={[
          "Maximum credit value",
          "Unlimited revisions",
          "Charts & diagram",
          "Ideal for full syllabus"
        ]}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        onBuy={handlePaying}
        paying={paying}
        payingAmount={payingAmount}
        />
      </div>
    </div>
  );
};

export default Pricing;
