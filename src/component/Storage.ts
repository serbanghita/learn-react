export interface IAppStorageData {
  user: IUser;
  menu: IMenuItem[];
  letters: ICard[];
  numbers: ICard[];
  products: ICard[];
  wall: IWallMsg[];
}

export interface IUser {
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  username: string;
  email: string;
  gender: "male" | "female";
  profilePic: string;
}

export interface IMenuItem {
  id: string;
  label: string;
  link: string;
  selected: boolean;
  notifications?: number;
}

export interface ICard {
  title: string;
  subtitle: string;
  body: string;
  imgSrc: string;
  btnLabel: string;
  canBuy: boolean;
}

export interface IWallMsg {
  username: string;
  message: string;
  avatar: string;
}

const AppStorageData: IAppStorageData = {
  user: {
    isLoggingIn: false,
    isLoggedIn: false,
    username: "",
    email: "",
    gender: "male",
    profilePic: "img/avatar-4.png"
  },
  menu: [
    { id: "wall", label: "Wall", link: "/", selected: true, notifications: 2 },
    { id: "list-of-letters", label: "List of letters", link: "/list/letters", selected: false },
    { id: "list-of-numbers", label: "List of numbers", link: "/list/numbers", selected: false },
    { id: "my-profile", label: "My profile", link: "/myprofile", selected: false },
    { id: "logout", label: "Logout", link: "/logout", selected: false }
  ],
  letters: [
    { title: "A", subtitle: "Letter A", body: "", btnLabel: "Buy", imgSrc: "", canBuy: true },
    { title: "B", subtitle: "Letter B", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "C", subtitle: "Letter C", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "D", subtitle: "Letter D", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "E", subtitle: "Letter E", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "F", subtitle: "Letter F", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "G", subtitle: "Letter G", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "H", subtitle: "Letter H", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "I", subtitle: "Letter I", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "J", subtitle: "Letter J", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "K", subtitle: "Letter K", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "L", subtitle: "Letter L", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "M", subtitle: "Letter M", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "N", subtitle: "Letter N", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "O", subtitle: "Letter O", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "P", subtitle: "Letter P", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Q", subtitle: "Letter Q", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "R", subtitle: "Letter R", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "S", subtitle: "Letter S", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "T", subtitle: "Letter T", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "U", subtitle: "Letter U", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "V", subtitle: "Letter V", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "W", subtitle: "Letter W", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "X", subtitle: "Letter X", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Y", subtitle: "Letter Y", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Z", subtitle: "Letter Z", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
  ],
  numbers: [
    { title: "Zero", subtitle: "Number 0", body: "", btnLabel: "Buy", imgSrc: "", canBuy: true },
    { title: "One", subtitle: "Number 1", body: "", btnLabel: "Buy", imgSrc: "", canBuy: true },
    { title: "Two", subtitle: "Number 2", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Three", subtitle: "Number 3", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Four", subtitle: "Number 4", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Five", subtitle: "Number 5", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Six", subtitle: "Number 6", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Seven", subtitle: "Number 7", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Eight", subtitle: "Number 8", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Nine", subtitle: "Number 9", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Ten", subtitle: "Number 10", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false },
    { title: "Eleven", subtitle: "Number 11", body: "", btnLabel: "Buy", imgSrc: "", canBuy: false }
  ],
  products: [
    {
      title: "First Product",
      subtitle: "500 bits",
      body: "Sed aliquet sit amet est a cursus. Nullam tempus quam augue, eget aliquet libero tempus quis!",
      btnLabel: "Buy now!",
      imgSrc: "img/osx-el-capitan.jpg",
      canBuy: true
    },
    {
      title: "Second Product",
      subtitle: "1000 bits",
      body: "Morbi iaculis nunc urna, a aliquet ipsum viverra ut!",
      btnLabel: "Purchase",
      imgSrc: "img/osx-el-capitan-2.jpg",
      canBuy: true
    },
  ],
  wall: [
    { username: "Thor Odinson", message: "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle", avatar: "img/avatar-1.png" },
    { username: "Bruce Banner", message: "The Strategic Homeland Intervention, Enforcement, and Logistics Division", avatar: "img/avatar-2.png" },
    { username: "Tony Stark", message: "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle", avatar: "" },
    { username: "Steve Rogers", message: "The Strategic Homeland Intervention, Enforcement, and Logistics Division", avatar: "img/avatar-4.png" },
    { username: "Natasha Romanoff", message: "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle", avatar: "img/avatar-3.png" },
  ]
};

export default AppStorageData;
