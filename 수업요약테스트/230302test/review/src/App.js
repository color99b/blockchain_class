import useWeb3 from "./useWeb3";

function App() {
  const [web3, account] = useWeb3();
  return (
    <div className="App">
      <h1>Account : {account}</h1>
    </div>
  );
}

export default App;
