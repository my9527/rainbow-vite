import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "../Button";
import styled from "styled-components";
import SwitchImage from "@/assets/switch/switch.svg";
import ErrorIcon from "@/assets/layout/error.svg";

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
  color: #000;
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
const CurChain = styled.div`
  width: 47px;
  height: 46px;
  cursor: pointer;
  margin-right: 20px;
  background-image: url(${SwitchImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 50%;
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
  return (
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
                  <StyledBtn onClick={openConnectModal}>
                    Connect Wallet
                  </StyledBtn>
                );
              }
              if (chain.unsupported) {
                return (
                  <CurChain onClick={openChainModal}>
                    <img alt={"Wrong network"} src={ErrorIcon} />
                  </CurChain>
                );
              }

              return (
                <div style={{ display: "flex", gap: 6 }}>
                  <CurChain onClick={openChainModal}>
                    {chain.hasIcon && (
                      <img
                        alt={chain.name ?? "Chain icon"}
                        src={chain.iconUrl}
                      />
                    )}
                  </CurChain>

                  <StyledBtn onClick={openAccountModal}>
                    {account.displayName}
                  </StyledBtn>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
