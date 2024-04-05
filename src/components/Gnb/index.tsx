import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { getSharedUser, getFolderUser } from "@/src/apis/api";
import logo from "@/src/assets/logo.svg";
import css from "./Gnb.module.scss";

export default function Gnb() {
  const [userData, setUserData] = useState({ email: "", img: "" });
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  const router = useRouter();
  const isSharedPage = router.pathname === "/shared";

  useEffect(() => {
    const getUserData = async () => {
      try {
        let user;
        if (isSharedPage) {
          user = await getSharedUser();
          setUserData({ email: user.email, img: user.profileImageSource });
        } else {
          user = await getFolderUser();
          const { email, image_source: img } = user.data[0];
          setUserData({ email, img });
        }
        setIsUserDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [router.pathname, isSharedPage]);

  return (
    <div className={isSharedPage ? css.isSharedPage : ""}>
      <div className={css.Gnb}>
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <div className={css.profileBox}>
          {isUserDataLoaded ? (
            <>
              <div className={css.profileImg}>
                <Image src={userData.img} alt="프로필 이미지" />
              </div>
              <p className={css.profileEmail}>{userData.email}</p>
            </>
          ) : (
            <button className={css.gnbBtn}>로그인</button>
          )}
        </div>
      </div>
    </div>
  );
}
