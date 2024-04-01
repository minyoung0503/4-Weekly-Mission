import { Image } from "react-bootstrap";
import facebookIcon from "@/src/assets/facebook.svg";
import twitterIcon from "@/src/assets/twitter.svg";
import youtubeIcon from "@/src/assets/youtube.svg";
import instagramIcon from "@/src/assets/instagram.svg";
import css from "./Footer.module.scss";

export default function Footer() {
  const SNS_LIST = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      src: facebookIcon,
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/",
      src: twitterIcon,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/",
      src: youtubeIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      src: instagramIcon,
    },
  ];

  return (
    <div className={css.Footer}>
      <p className={css.copyright}>©codeit - 2023</p>
      <div className={css.footerLink}>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className={css.sns}>
        {SNS_LIST.map(({ name, href, src }) => (
          <a key={name} href={href}>
            <Image src={src} alt={name} />
          </a>
        ))}
      </div>
    </div>
  );
}
