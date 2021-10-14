import { atom } from "recoil";

export const loginState = atom({
  key: "isLogin",
  default: false,
});

export const userNameState = atom({
  key: "nickname",
  default: "",
});

export const slimeColorState = atom({
    key: "slimeColor",
    default: "",
  });

export const levelState = atom({
    key: "level",
    default: 0
});

export const skillsState = atom({
    key: "skills",
    default: []
});

export const userDataState = atom({
    key: "data",
    default: {nickname: '', level: 0, slimeColor: '', skills: ['']}
});

export const componentState = atom({
  key: "component",
  default: "",
});