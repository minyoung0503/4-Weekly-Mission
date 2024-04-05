import Image from "next/image";
import searchIcon from "@/public/assets/Search.svg";
import css from "./LinkSearch.module.scss";

function LinkSearch({ value, onChange, onReset, inputRef }: any) {
  return (
    <div className={css.LinkSearch}>
      <div className={css.inputBox}>
        <input
          className={css.linkSearchInput}
          value={value}
          onChange={onChange}
          placeholder="링크를 검색해 보세요."
          ref={inputRef}
        />
        <button className={css.searchBtn}>
          <Image src={searchIcon} alt="search" />
        </button>
        {value && (
          <button className={css.delete} onClick={onReset}>
            <Image
              src="https://weekly-mission-week9.vercel.app/images/close.svg"
              alt="delete"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {value && (
        <h1 className={css.searchResultText}>
          <span className="searchValue">{value}</span>으로 검색한 결과입니다.
        </h1>
      )}
    </div>
  );
}

export default LinkSearch;
