import { useBackground, bac } from "@/context/BackgroundContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Navbar from "@/components/Navbar";

import { useProfile } from "@/context/ProfileContext";

export default function Home() {

  const [interests, setInterests] = useState([""]);
  const { Interests, syncInterests } = useProfile();

  const router = useRouter();
  const {setBackground} = useBackground();

  useEffect(() => {
    setBackground("bg-default");
    setInterests(Interests);
  }, [setBackground, Interests])

  const handleInterest = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newInterest = e.target.value.trim();

      setInterests((prevInterests) => [...prevInterests, newInterest]);
      e.target.value = "";
    }
  };

  const handleInterestSave = () => {
    syncInterests({interests})
    router.push("/")
  };

  const deleteInterest = (indexToDelete) => {
    setInterests((prevInterests) => 
      prevInterests.filter((_, index) => index !== indexToDelete)
    );
  }

  return (
    <>
    <Navbar interestsSave={handleInterestSave} />
    
    <div className="p-8 flex flex-col gap-6 overflow-scroll">      
      
      <p className="text-gold2 font-medium">Tell everyone about yourself</p>
      <h1 className="text-xl font-black">What interest you?</h1>

      <div className="w-full p-6 flex flex-col gap-6 rounded-xl bg-white-6 mt-5">
        <input className="w-full pl-5 bg-transparent" 
               type="text"
               onKeyDown={handleInterest}
               placeholder="Type your interest here"
               />
        
        <div className="flex gap-2 flex-wrap">
          {
            interests.map((item, index) => (

              <div key={index} className="px-4 py-2 flex gap-2 rounded-md bg-white-8">
                {item}
                <svg xmlns="http://www.w3.org/2000/svg" 
                     fill="none" viewBox="0 0 24 24" 
                     strokeWidth={1.5} stroke="currentColor"
                     onClick={() => deleteInterest(index)} 
                     className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>

            ))
          }
        </div>

      </div>

    </div>
    </>
  );
}
