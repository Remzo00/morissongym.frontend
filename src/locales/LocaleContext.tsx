import React, { Dispatch, SetStateAction, useState } from "react";
import i18n from "./i18n";

type defaultValue = {
  locale: string;
  setLocale: Dispatch<SetStateAction<string>>;
};

export const LanguageContext = React.createContext({} as defaultValue);

const LanguageContextProvider = ({ children }: any) => {
  const [locale, setLocale] = useState(i18n.language);
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
