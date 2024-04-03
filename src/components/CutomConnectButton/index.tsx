import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "../Button";
import styled from "styled-components";
import MetamaskIcon from "@/assets/wallet/metamask.svg";
import OkxIcon from "@/assets/wallet/okx.svg";

const StyledBtn = styled(Button)`
  width: 110px;
  height: 42px;
  flex-shrink: 0;
  margin-right: 27px;
  cursor: pointer;
  &:hover,
  &:active {
    button {
      color: #fff;
    }
  }
  & > div {
    height: 30px;
    display: flex;
    align-items: center;
    button {
      background: none;
      border: none;
      color: #000;
      font-family: Arial;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
      padding: 0;
    }
  }
`;

const ConnectWalletWrapper = styled.div`
  position: absolute;
  top: 46px;
  left: 0;
`;
const ConnectWallet = styled.div`
  border-radius: 8px;
  border: 2px solid #09360f;
  background: #c8ea8e;
  padding: 10px;
  .header {
    color: #fff;
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    padding-bottom: 8px;
    border-bottom: 1px solid #272341;
  }
  .wallets {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    gap: 20px;
    .item {
      border-radius: 8px;
      background: #fff;
      padding: 12px 9px;
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      img {
        width: 24px;
        height: 22.5px;
        flex-shrink: 0;
      }
      .label {
        color: #395111;
        font-family: Arial;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
      &:hover,
      &:active {
        background: #395111;
        .label {
          color: #fff;
        }
      }
    }
  }
`;
/**
 * 自定义connect button
 * @returns
 */
export const CustomConnectButton = () => {
  const wallets = [
    {
      label: "Metamask",
      key: "metamask",
      icon: MetamaskIcon,
    },
    {
      label: "OKX Wallet",
      key: "okx",
      icon: OkxIcon,
    },
  ];
  return (
    <StyledBtn>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          // authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted;
          const connected = ready && account && chain;
          console.log("chain", chain);
          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button onClick={openConnectModal} type="button">
                      Connect Wallet
                    </button>
                  );
                }
                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }
                // return (
                //   <ConnectWallet>
                //     {wallets.map((item) => {
                //       return (
                //         <div className="item" key={item?.key}>
                //           <img src={item?.icon} alt="" />
                //           <p className="label">{item?.label}</p>
                //         </div>
                //       );
                //     })}
                //   </ConnectWallet>
                // );
                return (
                  <div style={{ display: "flex", gap: 6 }}>
                    <button
                      onClick={openChainModal}
                      style={{ display: "flex", alignItems: "center" }}
                      type="button"
                    >
                      {/* {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )} */}
                      {chain.name}
                    </button>
                    <button onClick={openAccountModal} type="button">
                      {account.displayName}
                      {/* {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""} */}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </StyledBtn>
  );
};
