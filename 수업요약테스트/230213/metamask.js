console.log(window.ethereum);
const nowAccountElem = document.getElementById("now-account");
const nowAccountBalanceElem = document.getElementById("now-account-balance");
const toElem = document.getElementById("to");
const etherElem = document.getElementById("ether");

if (window.ethereum) {
  const isConnected = window.ethereum.isConnected();
  console.log("js 읽자마자 isc", isConnected);

  const getBalance = async (accounts) => {
    nowAccountElem.innerHTML = accounts[0];
    const balance = await ethereum.request({
      method: "eth_getBalance",
      // params: ["0x85582800628B2C4c0437639109E8C13C79279090"],
      params: accounts,
    });
    console.log(parseInt(balance) / Math.pow(10, 18));

    nowAccountBalanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18);
  };
  ethereum.on("connect", async (connectInfo) => {
    console.log(connectInfo);

    const isConnected = window.ethereum.isConnected();
    console.log("conntect 후 isc", isConnected);

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // nowAccountElem.innerHTML = accounts[0];
      // const balance = await ethereum.request({
      //   method: "eth_getBalance",
      //   // params: ["0x85582800628B2C4c0437639109E8C13C79279090"],
      //   params: accounts,
      // });
      await getBalance(accounts);
    } catch (error) {
      console.log(error);
    }
  });
  ethereum.on("accountsChanged", async (accounts) => {
    console.log(accounts);
    // const balance = await ethereum.request({
    //   method: "eth_getBalance",
    //   // params: ["0x85582800628B2C4c0437639109E8C13C79279090"],
    //   params: accounts,
    // });
    // nowAccountElem.innerHTML = accounts[0];
    // nowAccountBalanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18);

    // console.log(parseInt(balance) / Math.pow(10, 18));
    await getBalance(accounts);
  });

  ethereum.on("chainChanged", (chainId) => {
    console.log(chainId);
  });

  document.getElementById("sendTransaction").onclick = () => {
    const from = nowAccountElem.innerHTML;
    const to = toElem.value;
    const value = "0x" + (+etherElem.value * Math.pow(10, 18)).toString(16);

    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: from,
            to: to,
            value: value,
          },
        ],
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
