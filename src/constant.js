
import chatscreen from "./components/assets/images/chatpulse/chatscreen.jpg";
import dashboard from "./components/assets/images/chatpulse/dashboard.jpg";
import money_dashboard from "./components/assets/images/money-management/money-dashboard.png";
import money_record from "./components/assets/images/money-management/money-record.png";
import wall_home from "./components/assets/images/wallpaper/home.png";
import wall_favourites from "./components/assets/images/wallpaper/favourites.png";
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
    description: `Developed a chatting app where user can create account and send messages to other users in realtime.
    user active status online will also updates in realtime.app was developed using react native.for 
    backend node and express is used.socket.io is used for realtime updates `,
    images: [
      {
        url: dashboard

      },
      {
        url: chatscreen

      }
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
    description: `Made a wallpaper app using react native .user can download,see wallpaper details and can also save it as favourite.wallpapers
    are pulling from pexels api`,
    images: [
      {
        url: wall_home

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
    description: `made a finance management app in jetpack compose and roomDB.user can add their income with category.also update their expenses as well`,
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