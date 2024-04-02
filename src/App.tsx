// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { CustomConnectButton } from "./components/CutomConnectButton";

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <CustomConnectButton />
    </div>
  );
}

export default App;