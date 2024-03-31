import Image from "next/image";
import css from "./modal.module.scss";

const Modal = ({ onClose, title, data, hasBtn, btnTitle, hasInput }: any) => {
  return (
    <div className={css.modalBackground}>
      <div className={css.modalContent}>
        <h1 className={css.modalTitle}>{title}</h1>
        {hasInput ? <input /> : <p className={css.modalTargetData}>{data}</p>}
        {hasBtn ? (
          <button className={css.modalDeleteBtn}>{btnTitle}</button>
        ) : (
          ""
        )}
        <Image
          className={css.close}
          src="https://weekly-mission-week9.vercel.app/images/close.svg"
          alt="close"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
