import { useState, ChangeEvent, FocusEvent } from "react";
import Image from "next/image";
import eyeOn from "@/public/assets/eye-on.svg";
import eyeOff from "@/public/assets/eye-off.svg";
import css from "./Input.module.scss";

interface InputProps {
  inputType?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ inputType = "email", onChange }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const visibleInputType =
    inputType === "password" && !showPassword ? "password" : "email";

  const emailReg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const pattern = inputType === "email" ? emailReg : passwordReg;

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsError(true);
      setErrorMessage(
        inputType === "email"
          ? "이메일을 입력해 주세요"
          : "비밀번호를 입력해 주세요"
      );
    } else if (!pattern.test(e.target.value)) {
      setIsError(true);
      setErrorMessage(
        inputType === "email"
          ? "올바른 이메일 주소가 아닙니다."
          : "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
      );
    } else {
      setIsError(false);
      setErrorMessage("");
    }
  };

  return (
    <div className={css.inputAndError}>
      <div className={css.inputContainer}>
        <input
          className={`${css.input} ${isError && css.isError}`}
          type={visibleInputType}
          placeholder={
            inputType === "email"
              ? "이메일을 입력해 주세요"
              : "비밀번호를 입력해 주세요"
          }
          onBlur={handleBlur}
          onChange={onChange}
        />
        {inputType === "password" && (
          <button className={css.eyeToggleBtn} onClick={handleTogglePassword}>
            <Image src={showPassword ? eyeOn : eyeOff} alt="eyeIcon" />
          </button>
        )}
      </div>
      {isError && <p className={css.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
