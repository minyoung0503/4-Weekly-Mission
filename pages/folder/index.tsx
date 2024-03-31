import { useEffect, useRef, useState } from "react";
import { getUsersFolder } from "@/src/apis/api";
import AddLinkInput from "@/src/components/AddLinkInput";
import LinkSearch from "@/src/components/LinkSearch";
import FolderItem from "@/src/components/FolderItem";

function FolderPage() {
  const [usersFolderData, setUsersFolderData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const usersFolder = await getUsersFolder();
        setUsersFolderData(usersFolder.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const handleResetSearch = () => {
    setSearchKeyword("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  console.log(searchKeyword);

  return (
    <>
      <AddLinkInput />
      <LinkSearch
        value={searchKeyword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchKeyword(e.target.value)
        }
        onReset={handleResetSearch}
        inputRef={inputRef}
      />
      <FolderItem
        usersFolderData={usersFolderData}
        searchKeyword={searchKeyword}
      />
    </>
  );
}

export default FolderPage;
