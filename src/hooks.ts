import { useState } from "react";
import { getMe } from "./lib/get-user-api";
import { recoilPersist } from 'recoil-persist'
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
export const API_BASE_URL = "https://desafio-final-dwf-m7.herokuapp.com";
// export const API_BASE_URL = "http://localhost:3011";
const { persistAtom } = recoilPersist({
    key: "data",
    storage: localStorage,
});

// ATOM DE TOKEN
export const token = atom({
    key: "token",
    default: null,
    effects_UNSTABLE: [persistAtom],
});

// ATOM DE _geoloc
export const geoloc = atom({
    key: "_geoloc",
    default: {
        lat: null,
        lng: null
    },
    effects_UNSTABLE: [persistAtom],
});

// ATOM DE ImageDataURL
export const ImageDataURL = atom({
    key: "ImageDataURL",
    default: null
});

// ATOM DE USERDATA
export const userEmail = atom({
    key: "email",
    default: null,
    effects_UNSTABLE: [persistAtom],
});

// ATOM DE LOCATION BEFORE
export const locationBefore = atom({
    key: "Location before",
    default: "/home",
});

export const userData = selector({
    key: "userData",
    get: async ({ get }) => {
        const[token, setToken] = useToken();
        const myUserData = getMe(token);
        return myUserData;
    },
});


export const useToken = () => useRecoilState(token);
export const useGeoloc = () => useRecoilState(geoloc);
export const useImageDataURL = () => useRecoilState(ImageDataURL);
export const useLocationBefore = () => useRecoilState(locationBefore);
export const useUserEmail = () => useRecoilState(userEmail);
export const useUserData = () => useRecoilValue(userData);

// CUSTOM HOOKS QUE SE USAN A TRAVÉS DE LAS PÁGINAS (MENU OPEN Y REPORTAR/EDITAR MASCOTA)
export const useLocation = () => useState(null);
export const useToggle = () => useState(false);


