import Image from "next/image";
import css from "./Header.module.scss";

function Header({ folderData }: any) {
  console.log(folderData.profileImg);

  return (
    <div className={css.Header}>
      <div className={css.headerProfileBox}>
        <div className={css.headerProfileImg}>
          <Image
            src={folderData.profileImg}
            alt="프로필 이미지"
            width={60}
            height={60}
          />
        </div>
        <p className={css.profileName}>@{folderData.profileName}</p>
      </div>
      <h1 className={css.folderName}>{folderData.folderName}</h1>
    </div>
  );
}

export default Header;
