
import chatscreen from "./components/assets/images/chatpulse/chatscreen.jpg";
import dashboard from "./components/assets/images/chatpulse/dashboard.jpg";
import money_dashboard from "./components/assets/images/money-management/money-dashboard.png";
import money_record from "./components/assets/images/money-management/money-record.png";
export const techStack = [

  { name: "React Native", link: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png" },
  { name: "Javascript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Redux", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
 
  { name: "Jetpack Compose", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jetpackcompose/jetpackcompose-original-wordmark.svg" },
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
    description: 'A chatting app developed in react native and node js',
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
    name: 'Money Management',
    stack: 'Kotlin,Jetpack compose',
    description: 'management app developed using jetpack compose and room db',
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
        name: 'Kotlin',
        url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jetpackcompose/jetpackcompose-original-wordmark.svg",
      },


    ],
    github: "https://github.com/Hisham546/Money-Management"

  },

]