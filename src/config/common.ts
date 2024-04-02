


import { base, baseSepolia } from "./chains"





export enum CHAINS_ID {
    'Base' = base.id,
    "BaseSepolia" = baseSepolia.id,
}




export const DEFAULT_CHAIN_ID = CHAINS_ID['BaseSepolia']; // 生产应该改为 Base


// app 基于 chain 的配置项
export const AppConfigOnChain = {

    [CHAINS_ID.BaseSepolia]: {
        chain: baseSepolia,
        graph: {
            base: "https://gql-testnet.substancex.io/subgraphs/name/substanceexchangedevelop/iotex_testnet",
        },

        // config rpc
        rpc: {
            http: "https://babel-api.testnet.iotex.one",
            wss: "wss://babel-api.testnet.iotex.io/ws",
        },
        api: {
            http: "https://api-iotex-test.substancex.io/api/backend/",
            common: "https://api-testnet.substancex.io/api/backend/",
            wss: "wss://api-testnet.substancex.io/",
        },

    },
    [CHAINS_ID.Base]: {
        chain: base,
        graph: {
            base: "https://gql-testnet.substancex.io/subgraphs/name/substanceexchangedevelop/iotex_testnet",
        },

        // config rpc
        rpc: {
            http: "https://babel-api.testnet.iotex.one",
            wss: "wss://babel-api.testnet.iotex.io/ws",
        },
        api: {
            http: "https://api-iotex-test.substancex.io/api/backend/",
            common: "https://api-testnet.substancex.io/api/backend/",
            wss: "wss://api-testnet.substancex.io/",
        },

    }

}