import React, { useState } from "react";

import { StrengthTypes } from "../controllers/password/passwordTypes";

import { Icon } from "./index";

interface InputBarProps {
  getStrength: (password: string) => StrengthTypes;
  setStrength: React.Dispatch<React.SetStateAction<StrengthTypes>>;
}

const InputBar: React.FC<InputBarProps> = ({ getStrength, setStrength }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
    setStrength(getStrength(inputValue));
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      className="relative flex items-center 
      mb-3 md:mb-4 lg:mb-5"
    >
      <input
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        type={showPassword ? "text" : "password"}
        className="w-[100%] py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 
        px-2 md:px-3 lg:px-4
        rounded-md md:rounded-lg lg:rounded-xl"
      />

      <div
        className="absolute cursor-pointer
        right-1 lg:right-2"
        onClick={handleShowPassword}
      >
        {showPassword ? (
          <Icon
            id="passwordView"
            className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8"
          />
        ) : (
          <Icon
            id="passwordHidden"
            className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8"
          />
        )}
      </div>
    </div>
  );
};

export default InputBar;
