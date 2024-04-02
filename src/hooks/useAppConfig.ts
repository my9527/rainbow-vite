import { useContext } from "react";
import { AppConfigContext } from "../contexts/AppConfigProvider";

export const useAppConfig = () => {
    
  const ctx = useContext(AppConfigContext);

  return ctx;
};
