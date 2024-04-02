import { writeContract } from "@wagmi/core";
import { useCallback } from "react"
import { useConfig } from "wagmi";
import { IContractParam } from "./useContractParams";


/**
 * 单个写合约的方法
 * 
 * @returns 
 */
export const useReadContract = () => {

    const config = useConfig();

    const _writeContract = useCallback(async (contract: IContractParam, functionName: string, args: any[]) => {

        const result = await writeContract(config, {
            abi: contract.abi,
            address: contract.address,
            functionName,
            args,
        });

        return result;


    }, [config]);


    return _writeContract;

}

