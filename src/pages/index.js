import Image from 'next/image'; 

import { useBackground, bac } from "@/context/BackgroundContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { createProfile, getProfile, updateProfile } from '@/services/profileService';

import { useProfile } from '@/context/ProfileContext';

import { PlusGoldIcon } from "@/components/Icons";

export default function Home() {

  const { Profile, Edit, DisplayName, Birthday, Horoscope, Zodiac, Height, Weight, Interests, handleEditProfile, syncProfile } = useProfile();

  const [profile, setProfile] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [horoscope, setHoroscope] = useState("--");
  const [zodiac, setZodiac] = useState("--");
  const [heightMeasurement, setHeightMeasurement] = useState("cm")
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [interest, setInterest] = useState([""]);

  // console.log("content: ",profile, "Edit : ", Edit, imageFile, displayName, gender, birthday, horoscope, zodiac, height, weight)

  const [onEdit, setOnEdit] = useState(false);
  const router = useRouter();
  const {setBackground} = useBackground();

  useEffect(() => {
    setBackground("bg-secondary");
  }, [setBackground])

  useEffect(() => {
    fetchProfileData();
  }, [syncProfile, fetchProfileData])

  const handleInterest = () => {
    event.preventDefault();
    router.push('/interest-edit')
  }  

  const handleEdit = () => {
    if (onEdit == true) {
      handleEditProfile();
      setOnEdit(Edit);      
    } else {
      setOnEdit(true);
      handleEditProfile();}};

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImageFile(objectURL);
      console.log("Uploaded file:", file);
    }
  };

  // World of Gender Dropdown, complicated but fun :v
  const [isDropdownGenderVisible, setDropdownGenderVisible] = useState(false);
  const toggleGenderDropdown = () => setDropdownGenderVisible(!isDropdownGenderVisible);
  const handleGenderSelect = (gender) => {
    setGender(gender);
    setDropdownGenderVisible(false); // Close dropdown after selection
  };

  const getZodiacSign = (date) => {
    const month = new Date(date).getMonth() + 1; // months are 0-indexed
    const day = new Date(date).getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return 'Aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'Taurus';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return 'Gemini';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return 'Cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return 'Libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return 'Scorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Sagittarius';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return 'Capricorn';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return 'Aquarius';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return 'Pisces';
    }

    return '';
  };

  const getChineseZodiac = (year) => {
    const chineseZodiacSigns = [
      'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
    ];

    const startYear = 1900;
    const cycle = 12;

    const index = (year - startYear) % cycle;

    return chineseZodiacSigns[index];
  };

  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    setBirthday(inputDate);

    const zodiac = getZodiacSign(inputDate);
    setHoroscope(zodiac);

    const year = new Date(inputDate).getFullYear();
    const chineseZodiacSign = getChineseZodiac(year);
    setZodiac(chineseZodiacSign)    
  };

  const toggleMeasurement = () => {
    setHeightMeasurement(prevMeasurement => (prevMeasurement === "cm" ? "inches" : "cm"));
  };


const handleOption = (e) => {
  profile ? handleUpdateProfile() : handleCreateProfile()
}

const handleCreateProfile = async (e) => {

    try {
        await createProfile({ displayName, birthday, height, weight, interest });
        await router.push('/');
        console.log("pushed")
    } catch (error) {
        console.error('Create profile failed', error);
    }
};

const fetchProfileData = async () => {
  try {
    console.log("trying fetch data", "the profil is", Profile)
    setProfile(Profile)
    setOnEdit(Edit)
    setDisplayName(DisplayName)
    setBirthday(Birthday)
    setHoroscope(Horoscope)
    setZodiac(Zodiac)
    setHeight(Height)
    setWeight(Weight)
    setInterest(Interests)

    console.log("succedd fetch data", DisplayName, Birthday)
  } catch (error) {
    console.error('Failed to fetch profile data:', error);
  }
};

const handleUpdateProfile = async (e) => {

  try {
      await updateProfile({ displayName, birthday, height, weight, interest });
      handleEditProfile()
      await router.push('/');
      console.log("pushed")
  } catch (error) {
      console.error('Update profile failed', error);
  }
};

  return (
    <div className="p-2 flex flex-col gap-6">
      
      {/** IMG CONTAINER */}
      <div className="w-full relative rounded-xl h-60 foreground2">
      {imageFile ? (
        <Image
          src={imageFile}
          alt="Uploaded Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      ) : (
        <div></div>
      )}
        <span className="p-4 absolute bottom-0 font-semibold">{displayName}</span>

      </div>
      
      {/** ABOUT */}
      <div className="px-8 py-6 m-auto w-full flex flex-col gap-8 rounded-xl foreground3">        

        {
          onEdit 
            ? 
            <div className="w-full flex flex-col gap-6 rounded-xl foreground3">
            {/** UPPER SIDE */}
            <div className="w-full mb-5 flex justify-between">
              <h1>About</h1>
              <button className="text-gold2" onClick={handleOption}>Link & Update</button>
            </div>

            {/** MID SIDE */}
            <div className="flex gap-8 items-center">
                <button className="p-5 rounded-3xl bg-white-8" onClick={() => document.getElementById("imageUpload").click()}>
                  <PlusGoldIcon className="size-10 hover:scale-150" />
                </button>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }} // Hide the input
                    onChange={handleImageUpload}
                  />
                <h1>Add Image</h1>
            </div>

            {/** BOTTOM SIDE */}
            <div className="w-full h-auto flex flex-col gap-3">
    
              {/** Display Name */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm text-white-33">Display Name:</h3>
                <div className="w-3/5 col-span-2 rounded-xl border-2 border-white-22 bg-white-6">
                  <input className="w-full p-3 text-sm text-end text-white-30 bg-transparent" 
                         type="name" 
                         value={displayName || ''}
                         onChange={(e) => setDisplayName(e.target.value)}
                         placeholder="Enter Name"/>
                </div>
              </div>
    
              {/** Gender */}
              <div className="relative flex justify-between items-center">
                
                <h3 className="text-sm text-white-33">Gender:</h3>
                <div className="w-3/5 flex flex-col gap-2">
                  <div className="col-span-2 flex items-center rounded-xl border-2 border-white-22 bg-white-6">
                    <input className="w-full p-3 text-sm text-end text-white-30 bg-transparent" onChange={toggleGenderDropdown} value={gender} type="text" placeholder="Select Gender"/>
                    <svg className="size-6 mr-4" onClick={toggleGenderDropdown} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                  {isDropdownGenderVisible && (
                    <div className="flex flex-col gap-2 rounded-xl border-2 border-white-22 text-white-30 bg-white-6">
                      <div className="p-3 text-sm text-end cursor-pointer hover:bg-gray-200" onClick={() => handleGenderSelect("Male")}>
                        Male
                      </div>
                      <div className="p-3 text-sm text-end cursor-pointer hover:bg-gray-200" onClick={() => handleGenderSelect("Female")}>
                        Female
                      </div>
                    </div>
                  )}  
                </div>
                
              </div>
    
              {/** Birthday */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm text-white-33">Birthday:</h3>
                <div className="w-3/5 col-span-2 rounded-xl border-2 border-white-22 bg-white-6">
                  <input className="w-full p-3 text-sm text-end text-white-30 bg-transparent" 
                         onChange={handleDateChange} 
                         value={birthday || " "}
                         type="date" 
                         placeholder="DD MM YY"/>
                </div>
              </div>
    
              {/** Horoscope */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm text-white-33">Horoscope:</h3>
                <div className="w-3/5 flex flex-col gap-2">
                  <div className="col-span-2 flex items-center rounded-xl border-2 border-white-22 bg-white-6">
                    <input className="w-full p-3 text-sm text-end text-white-30 bg-transparent" readOnly value={horoscope} placeholder="--"/>
                  </div>
                  </div>
              </div>
    
              {/** Zodiac */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm text-white-33">Zodiac:</h3>
                <div className="w-3/5 flex flex-col gap-2">
                  <div className="col-span-2 flex items-center rounded-xl border-2 border-white-22 bg-white-6">
                    <input className="w-full p-3 text-sm text-end text-white-30 bg-transparent" readOnly value={zodiac || ''}  placeholder="--"/>
                  </div>
                  </div>
              </div>
    
              {/** Height */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm text-white-33">Height:</h3>
                <div className="w-3/5 col-span-2 flex items-center rounded-xl border-2 border-white-22 bg-white-6">
                  <input className="w-full p-3 text-sm text-end text-white-30 bg-transparent" 
                         type="number" 
                         value={height || ""}
                         onChange={(e) => setHeight(Number(e.target.value))}
                         placeholder="0"/>
                  <label className={`w-2/5 p-3 text-sm text-center text-white-30 cursor-pointer rounded-xl bg-white-8`}
                    onClick={toggleMeasurement}>
                    {heightMeasurement}
                  </label>
                </div>
              </div>
    
              {/** Weight */}
              <div className="flex justify-between items-center">
                <h3 className="text-sm text-white-33">Weight:</h3>
                <div className="w-3/5 col-span-2 flex items-center rounded-xl border-2 border-white-22 bg-white-6">
                  <input className="w-full p-3 text-sm text-end text-white-30 bg-transparent" 
                         type="number" 
                         value={weight || ""}
                         onChange={(e) => setWeight(Number(e.target.value))}
                         placeholder="0"/>
                  <label className={`w-2/5 p-3 text-sm text-center text-white-30 cursor-pointer rounded-xl bg-white-8`}>
                    Kg
                  </label>
                </div>
              </div>
    
            </div>
            </div>
            :            
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <h1>About</h1>
                <button onClick={handleEdit}><svg className="size-6 underline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg></button>
              </div>

              {
                profile
                ?
                <div className='flex flex-col gap-3 text-white-33'>
                  <div>Birthday: <span className='text-white'>{birthday}</span> </div>
                  <div>Horoscope: <span className='text-white'>{horoscope}</span> </div>
                  <div>zodiac: <span className='text-white'>{zodiac}</span> </div>
                  <div>height: <span className='text-white'>{height}</span> {heightMeasurement} </div>
                  <div>weight: <span className='text-white'>{weight}</span> kg </div>
                </div>
                :
                <div className="text-white-52"><p>Add in your about to help others know yout better</p></div>
              }

              
            </div>
        }        

      </div>

      {/** INTEREST */}
      <div className="px-4 py-6 m-auto w-full flex flex-col gap-8 rounded-xl foreground3">

        <div className="flex justify-between">
          <h1>Interest</h1>
          <button onClick={handleInterest}><svg className="size-6 underline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
          </svg></button>
        </div>

        {
          profile
          ?
          <div className="flex gap-2 flex-wrap">
          {interest.map((item, index) => (
            <div key={index} className="px-4 py-2 rounded-md bg-white-8">
                {item}
              </div>
          ))}
          </div>
          :
          <div className="text-white-52"><p>Add in your interest to find a better match</p></div>
        }        

      </div>

    </div>
  );
}
