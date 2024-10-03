import { IconData } from "app/interfaces/interfaces";
import CardIcon1 from "../../public/icons/icon-card-1.svg";
import CardIcon2 from "../../public/icons/icon-card-2.svg";
import CardIcon3 from "../../public/icons/icon-card-3.svg";

export const cardData = [
  {
    icon: CardIcon1,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    alt: "Brand Recognition Icon",
  },
  {
    icon: CardIcon2,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    alt: "Detailed Records Icon",
  },
  {
    icon: CardIcon3,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    alt: "Fully Customizable Icon",
  },
];



export const icons: IconData[] = [
  {
    src: "/icons/icon-instagram.svg",
    alt: "Instagram",
    key: "instagram",
    route: "https://www.instagram.com/",
  },
  {
    src: "/icons/icon-pinterest.svg",
    alt: "Pinterest",
    key: "pinterest",
    route: "https://pinterest.com/",
  },
  {
    src: "/icons/icon-twitter.svg",
    alt: "Twitter",
    key: "twitter",
    route: "https://x.com/",
  },
  {
    src: "/icons/icon-facebook.svg",
    alt: "Facebook",
    key: "facebook",
    route: "https://www.facebook.com/",
  },
];
