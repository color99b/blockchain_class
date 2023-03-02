import useWeb3 from "./useWeb3";
import Counter from "./Counter";
function App() {
  //Test CA : 0xFe92bC76C7aFe42B78312E42100D04dF4C876e20
  //Counter CA : 0x4c23E1ea48c808fCC2e8EC0E4332f9d54054eE51

  const [web3, account] = useWeb3();
  if (!account) return <h1>메타마스크 설치 및 계정 연결해줘</h1>;
  return (
    <div className="App">
      <h1>Account : {account}</h1>
      <Counter web3={web3} account={account} />
    </div>
  );
}

export default App;
