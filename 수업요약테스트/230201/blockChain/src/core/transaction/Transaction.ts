import TxIn from "./TxIn";
import TxOut from "./TxOut";
import UnspentTxOut from "./UnspentTxOut";
import { SHA256 } from "crypto-js";

export default class Transaction implements ITransaction {
  public txIns: ITxIn[];
  public txOuts: ITxOut[];
  public hash: string;

  constructor(_txIns, _txOuts) {
    this.txIns = _txIns;
    this.txOuts = _txOuts;
    this.hash = this.createHash();
  }

  createHash(): string {
    let txOutStr = "";
    for (let i = 0; i < this.txOuts.length; ++i) {
      const tempTxOut: Array<string | number> = Object.values(this.txOuts[i]);
      //output 내용의 값들만 가져오는 것. 여러개 이기때문에 배열이다.
      for (let j = 0; j < tempTxOut.length; ++j) {
        txOutStr += tempTxOut[j];
      }
    }
    // const txOutStr: string = this.txOuts.reduce(
    //   (prev, curr) => prev + Object.values(curr).join(""),
    //   ""
    // );

    let txInStr = "";
    for (let i = 0; i < this.txIns.length; ++i) {
      const tempTxIn: Array<string | number> = Object.values(this.txIns[i]);
      //output 내용의 값들만 가져오는 것. 여러개 이기때문에 배열이다.
      for (let j = 0; j < tempTxIn.length; ++j) {
        txInStr += tempTxIn[j];
      }
    }

    //  const txInStr: string = this.txIns.reduce(
    //   (prev, curr) => prev + Object.values(curr).join(""),
    //   ""
    // );

    return SHA256(txInStr + txOutStr)
      .toString()
      .toUpperCase();
  }

  createUTXO(): Array<IUnspentTxOut> {
    //transaction에서 utxo를 생성해서 내보내준다.
    const utxo: Array<IUnspentTxOut> = [];
    for (let i = 0; i < this.txOuts.length; ++i) {
      utxo.push(
        new UnspentTxOut(
          this.txOuts[i].address,
          this.txOuts[i].amount,
          this.hash,
          i
        )
      );
    }

    return utxo;
  }
}
