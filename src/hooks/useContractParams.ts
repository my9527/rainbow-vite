import { useAppConfig } from "./useAppConfig"
import { AbiItem } from "viem";
import { useMemo } from "react";



import { useChainId } from "wagmi";



export type IContractParam = {
    address: `0x${string}`;
    abi: AbiItem[];
    chainId: number;
}




export const useContractParams = (address: string) => {

    const config = useAppConfig();
    const chainId = useChainId();

    const contracts = useMemo(() => {

        // 根据链获取对应contract map
        const _contracts = {
            // example
            // [config.contract_address.DelegationHubImplementationAddress] : {
            //     address: config.contract_address.DelegationHubImplementationAddress,
            //     abi: DelegationHubAbi,
            //     chainId: chainId,
            // },
            
        } as Record<`0x${string}`, IContractParam>

        return _contracts;




    }, [config, chainId]);

    return contracts[address as `0x${string}`];


}