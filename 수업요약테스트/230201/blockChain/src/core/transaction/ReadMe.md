# Transaction

- 거래 내역, 거래에 대한 최소 단위, 보내는 내역과 받는 내역이 함께 있어야한다.

- UTXO를 사용하는 이유 : 각 거래에 대해서 확실한 log history를 남기기 위해서 사용한다.

- 그림을 보면서 이해해보자.

1. miner가 BitCoin을 채굴했다.

- miner는 50BTC를 받는다.
- transaction 이 추가된다.
  -tx는 transaction 의 약자로 보통 hash를 뜻한다.
  트랜잭션을 찾기 위한 고유값이다.
  -input : 이전 거래 결과 내역

  - 현재 생성된 트랜젝션은 채굴(마이닝)을 통해서 처음 생성되어 input 내역이 없다.
  - 이런 트랜젝션을 코인베이스 트랜잭션이라고 한다.

  -output : 이번 거래 결과 내역
  -miner가 50BTC를 받게되는 내용이 적혀있다.

  - 해당 output은 UnspentTransactionOutput에 저장된다.
  - UnspentTransactionOutput(UTXO)
    - unpsnet : 소비되지 않은 + transaction : 트랜젝션 + output : 결과
      - 소비되지 않은 트랜젝션의 결과 -> 잔액이다.
      - miner는 50 BTC를 가지고 있다.
      - Tx는 트랜젝션을 찾기 위한 값이다. -> 이 결과가 어떤 트랙젝션에서 나왔는지 찾기 위함.

2. miner가 tester에게 10BTC를 보낸다.

- UTXO에서 address가 miner인 데이터를 input으로 가져온다.
- 받는 사람 (tester)의 10BTC에 대한 output과 보내는 사람 (miner)의 잔금, 40BTC에 대한 output을 내보낸다.

3. miner가 tester에게 2BTC를 보낸다.

- UTXO에서 address가 miner인 데이터를 input으로 가져온다.
- 받는 사람 (tester)의 2BTC에 대한 output과 보내는 사람 (miner)의 잔금, 38BTC에 대한 output을 내보낸다.

4. tester가 miner에게 11BTC를 보낸다.

- UTXO에서 tester의 output을 input으로 가져온다.
  - 1번째 output은 10 BTC로 11BTC보다 부족하다.
  - 2번째 output을 추가시 12BTC로 11BTC를 보낼 수 있다.
- 받는 사람(miner)의 11BTC에 대한 output과 보내는 사람(tester)의 잔금, 1BTC에 대한 output을 내보낸다.

- 위의 설명과 같이 트랜젝션의 결과(output)을 UTXO에 추가했다가 다음 트랜젝션에서 input으로 가져다 사용하는 방법으로 거래가 이루어진다.
