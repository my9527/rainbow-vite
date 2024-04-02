import { createContext, memo, useMemo } from "react";
import { useChainId } from "wagmi";

import { DEFAULT_CHAIN_ID, AppConfigOnChain } from "../../config/common";





export const AppConfigContext = createContext(
    AppConfigOnChain[DEFAULT_CHAIN_ID]
  );
  
  export const AppConfigProvider: FCC<{}> = memo(({ children }) => {
    const chainId = useChainId();
  
    // const chainId = 1;
  
    const config = useMemo(() => {
      return AppConfigOnChain[chainId] || AppConfigOnChain[DEFAULT_CHAIN_ID];
    }, [chainId]);
  
    return (
      <AppConfigContext.Provider value={config} key={chainId}>
        {children}
      </AppConfigContext.Provider>
    );
  });
  
  AppConfigProvider.displayName = "AppConfigProvider";
  