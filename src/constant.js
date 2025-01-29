
import chatscreen from "./components/assets/images/chatpulse/chatscreen.png";
import loginScreen from "./components/assets/images/chatpulse/loginScreen.png";
import dashboard from "./components/assets/images/chatpulse/dashboard.png";
import money_dashboard from "./components/assets/images/money-management/money-dashboard.png";
import money_record from "./components/assets/images/money-management/money-record.png";
import wall_home from "./components/assets/images/wallpaper/home.png";
import wall_favourites from "./components/assets/images/wallpaper/favourites.png";
import wallpaper from "./components/assets/images/wallpaper/wallpaper.png";
export const techStack = [

  { name: "React Native", link: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png" },
  { name: "Javascript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Redux", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
  { name: "Jest", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },

  { name: "Jetpack Compose", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg" },
  { name: "React", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  { name: "Express", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" },
  { name: "NodeJS", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Android Studio", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "Xcode", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" },
  { name: "Vscode", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Mongo DB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" },
  { name: "Firebase", link: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },


]

export const personalProjects = [
  {
    name: 'ChatPulse',
    stack: 'React Native',
    description: `A chatting application made in React Native for realtime communication.by using Socket-IO I successfully implemented realtime
    messaging.this was one of my passion project from long time.along with realtime messages users canalso see online status and typing status indicators
   there's option to add profile picture. `,
    // Features: [
    //   { point: 'Real-time communication with users.' },
    //   { point: 'Typing status indicators.' },
    //   { point: 'Online status visibility.' },
    //   { point: 'Easy access to chats.' },
    //   { point: 'Users can add profile pictures and crop or rotate them.' },
    // ],
    images: [
      {
        url: loginScreen

      },
      {
        url: dashboard

      },
      {
        url: chatscreen

      },
      
    ],
    techLinks: [
      {
        name: 'React Native',
        url: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
      },
      {
        name: 'TypeScript',
        url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: 'MongoDB',
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
      },
      {
        name: 'Express',
        url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      }
    ],
    github: "https://github.com/Hisham546/ChatPulse"

  },

  {
    name: 'Wall X ',
    stack: 'React Native',
    description: `Made a wallpaper app using react native.one of the first project I done in React Native.nothing fancy.wallpapers are fetching from Pexels Api
    users can view ,download or see the details of wallpapers.dark mode and select favourite wallpaper options are also available.`,
    // Features: [
    //   { point: 'user can download,view the wallpaper ' },
    //   { point: 'select favourite wallpaper option' },
    //   { point: 'Dark mode option' },
    // ],
    images: [
      {
        url: wall_home

      },
      {
        url: wallpaper

      },
      {
        url: wall_favourites

      }
    ],
    techLinks: [
      {
        name: 'React Native',
        url: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
      },
      {
        name: 'JavaScript',
        url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },


    ],
    github: "https://github.com/Hisham546/WALLX"

  },
  {
    name: 'Money Management',
    stack: 'Kotlin,Jetpack compose',
    description: `Made a finance management app in native android.this project was mainly developed to learn Jetpack Compose.
    made on Jetpack Compose.all data are stored locally using RoomDB.users can add income with selecting a category and add their expense also.`,
    // Features: [
    //   { point: 'Using jetpack compose and Kotlin' },
    //   { point: 'RoomDB for local storage' },
    //   { point: 'user can add their income with category' },
    //   { point: 'also update their expenses as well' },

    // ],
    images: [
      {
        url: money_dashboard

      },
      {
        url: money_record

      }
    ],
    techLinks: [
      {
        name: 'Jetpack Compose',
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg",
      },
      {
        name: 'RoomDB',
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg",
      },

    ],
    github: "https://github.com/Hisham546/Money-Management"

  },

]