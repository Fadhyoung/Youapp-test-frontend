import React, { createContext, useState, useContext } from 'react';

import { getProfile } from '@/services/profileService';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [Profile, setProfile] = useState(false);
    const [Edit, setEdit] = useState(false);
    const [DisplayName, setDisplayName] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [Horoscope, setHoroscope] = useState("--");
    const [Zodiac, setZodiac] = useState("--");
    const [Height, setHeight] = useState(0);
    const [Weight, setWeight] = useState(0);
    const [Interests, setinterests] = useState([""]);

    console.log ("profil context: ", Profile, "Edit: ", Edit, DisplayName, Birthday, Height, Zodiac, Height, Weight, Interests)

    const syncProfile = async () => {

        const profileData = await getProfile();
        console.log('Profile Data:', profileData.data);
        const { name, birthday, horoscope, zodiac, height, weight, interests } = profileData.data;
        if (name && birthday && horoscope && zodiac && height && weight && interests) {
            setProfile(true);
            setDisplayName(name);
            setBirthday(birthday);
            setHoroscope(horoscope);
            setZodiac(zodiac);
            setHeight(height);
            setWeight(weight);
            setinterests(interests);
        } else {
            setProfile(false);
        }

    };

    const syncInterests = async ({interests = []}) => {

        console.log("syncInterest: ", interests);

        setinterests(interests)
    }

    const handleEditProfile = () => {
        setEdit((prevEdit) => !prevEdit);
        console.log("edit: ", Edit)
    }

    return (
        <ProfileContext.Provider value={{ Profile, Edit, DisplayName, Birthday, Horoscope, Zodiac, Height, Weight, Interests, handleEditProfile, syncProfile, syncInterests }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
