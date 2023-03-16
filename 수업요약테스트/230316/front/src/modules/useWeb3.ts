import { useCallback, useState } from "react";
import Web3 from "web3";

export const useWeb3 = (): {
  web3?: Web3;
  account: string;
  chainId: string | null;
  logIn: () => void;
} => {
  const [web3, setWeb3] = useState<Web3 | undefined>();
  const [account, setAccount] = useState<string>("");
  const [chainId, setChainId] = useState<string | null>("");

  const logIn = useCallback(async () => {
    try {
      if (window.ethereum) {
        const _web3 = new Web3((window as any).ethereum);
        setWeb3(_web3);
        const [_account]: Array<string> = (await window.ethereum.request({
          method: "eth_requestAccounts",
        })) as Array<string>;
        if (_account) {
          setAccount(_account);
        }
        setChainId(window.ethereum.networkVersion);
      } else {
        console.log("metaMask is not exist");
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  return { web3, account, chainId, logIn };
};
