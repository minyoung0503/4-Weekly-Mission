import { useState, useEffect } from "react";
import { getUsersLink } from "@/src/apis/api";
import Image from "next/image";
import Cards from "@/src/components/Cards";
import shareIcon from "@/public/assets/share.svg";
import penIcon from "@/public/assets/pen.svg";
import deleteIcon from "@/public/assets/delete.svg";
import addIcon from "@/public/assets/add.svg";
import css from "./FolderItem.module.scss";

interface Props {
  usersFolderData: any;
  searchKeyword: any;
}

function FolderItem({ usersFolderData, searchKeyword }: Props) {
  const [selectedFolder, setSelectedFolder] = useState({ id: 1, name: "전체" });
  const [cardList, setCardList] = useState([]);
  const folderList = [{ id: 1, name: "전체" }, ...usersFolderData];

  const handleFolderClick = (data: any) => {
    setSelectedFolder(data);
  };

  useEffect(() => {
    const getFolderData = async () => {
      try {
        const card = await getUsersLink(
          selectedFolder.name === "전체" ? "" : `?folderId=${selectedFolder.id}`
        );
        setCardList(card.data);
      } catch (error) {
        console.log(error);
      }
    };

    getFolderData();
  }, [selectedFolder]);

  return (
    <div className={css.FolderItem}>
      <div className={css.folderItemContainer}>
        <div className={css.folderListBar}>
          <div className={css.folderList}>
            {folderList.map((data) => (
              <button
                key={data.id}
                onClick={() => handleFolderClick(data)}
                className={
                  selectedFolder.name === data.name
                    ? css.selectedFolder
                    : css.folderButton
                }
              >
                {data.name}
              </button>
            ))}
          </div>
          <button className={css.addFolder}>
            <p>폴더 추가</p>
            <Image src={addIcon} alt="폴더 추가" width={16} height={17} />
          </button>
        </div>
        <div className={css.optionBar}>
          <h1 className={css.folderTitle}>{selectedFolder.name}</h1>
          {selectedFolder.name !== "전체" && (
            <div className={css.optionList}>
              <button className={css.option}>
                <Image src={shareIcon} alt="공유" width={18} height={19} />
                <span>공유</span>
              </button>
              <button className={css.option}>
                <Image src={penIcon} alt="이름 변경" width={18} height={19} />
                <span>이름 변경</span>
              </button>
              <button className={css.option}>
                <Image src={deleteIcon} alt="삭제" width={16} height={17} />
                <span>삭제</span>
              </button>
            </div>
          )}
        </div>
        <Cards
          cardList={cardList}
          showStarKebab
          searchKeyword={searchKeyword}
        />
      </div>
    </div>
  );
}

export default FolderItem;