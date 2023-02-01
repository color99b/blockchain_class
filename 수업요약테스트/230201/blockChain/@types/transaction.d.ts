declare interface ITxOut {
  //transaction의 결과 (output)
  address: string;
  amount: number;
}

declare interface ITxIn {
  //transaction 에서 사용되는 잔액(input)
  txOutId: string; //transaction 의 hash
  txOutIndex: number; // transaction의 몇 번째 output인가.
  signature?: string;
  // signature : string | undefined;
  // undefined가 아닌 null 이면 빈칸일 시 빨간 줄이 뜬다.
  // - undefined는 값이 지정되지 않은 빈 값
  // - null은 값이 비어있다고 정의된 값.

  // | 는 비트 연산자 중 or를 뜻하는데 비트 or연산 2진수임.
  // 게임에서 상태이상을 따질때 기절1, 출혈10, 감전 100, 화상 1000,...
  // 000110 << 출혈 + 감전 / 01100 <- 화상, 감전
  // ts에서 ||가 아니라 |를 쓰는 이유는 자료형이 위처럼 비트 연산되기 때문인듯하다.
}

declare interface ITransaction {
  txIns: Array<ITxIn>;
  txOuts: Array<ITxOut>;
  hash: string;
}

declare interface IUnspentTxOut {
  address: string;
  amount: number;
  txOutId: string; //transaction 의 hash
  txOutIndex: number; // transaction의 몇 번째 output
}
