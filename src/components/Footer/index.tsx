import { Image } from "react-bootstrap";
import { SNS_LIST } from "@/src/constant/constant";
import css from "./Footer.module.scss";

export default function Footer() {
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
