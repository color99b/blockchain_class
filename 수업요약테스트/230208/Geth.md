# Geth

- 계정 생성을 위해서 go-ethereum 폴더에서 아래 명령어 실행

```sh
make all
#make geth 상위호환
```

- geth 명령어 만으로 실행시 기본적으로 mainnet에 접근하도록 되어있다.

```sh
Chain ID: 1 (mainnet)
```

# private Ethereum Network

- 개인 이더리움 서버를 열어보자
- genesis.json 파일을 만들어서 기본 설정을 입력한다.

```json
{
  "difficulty": "200000",
  "gasLimit": "3100000",
  "alloc": {
    "0x85582800628B2C4c0437639109E8C13C79279090": {
      "balance": "100000000"
    }
  },
  "config": {
    "chainId": 50,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0
  }
}
```

- difficulty : 문제 난이도
- gasLimit : 블록당 가스 지출 제한량 (블록당 최대 거래 수수료?)
- alloc : 제네시스 블록 생성 시 지갑에 보상 지급(빈 객체도 상관 없다.)
- config
  - chainId : 블록체인 네트워크 식별 ID
  - homesteadBlock : 이더리움 버전
  - eip는 Ethereum Improvmment Proposal 을 의미하며 기본값은 0이다.
    - 이더리움 핵심 프로토콜 사양 등의 표준을 설명한다.

# geth 로 개인 이더리움 네트워크 생성

```sh
# 개인 이더리움 네트워크 생성
geth --datadir myGeth init genesis.json
```

- myGeth 폴더가 생성되고 그 안에 아래와 같이 폴더가 생성된다.

```sh
├── geth
│   ├── LOCK
│   ├── chaindata  블록헤더 내용, 블록 바디의 트랜잭션 내용 파일이 저장
│   ├── lightchaindata
│   └── nodekey
└── keystore : geth가 갖고있는 계정 정보가 저장

```

- 생성된 개인 이더리움 네트워크를 실행하자
  ??? datadir 옵션을 사용하지 않았을 때 네트워크 정보는 어디에 저장되는가?
  - Linux : ~/.ethereum
  - Mac : ~/Library/Ethereum ( 기본 숨긴 폴더 )

??? Looking for peeres 메세지 계속 나오는 이유는 peer 가 충분히 연결되지 않았기에 추가하도록 시도하는것.

```sh
geth --datadir ~/myGeth
```

# 열려있는 서버에 접근해서 데이터를 뜯어보자

## IPC

- inter-Process Communication
- 프로세스 간 통신을 이야기한다.
  - process : 컴퓨터에서 실행되고 있는 프로그램
- geth로 열어둔 서버에 접근하는 명령어

```sh
geth attach ~/myGeth/geth.ipc
```

- IPC 연결 후에 사용하는 명령어들을 js 기준의 객체와 같다.

  - admin: 1.0 : peer의 정보
  - debug: 1.0
  - engine: 1.0
  - eth: 1.0 : chain 정보
  - ethash: 1.0
  - miner: 1.0 채굴 정보
  - net: 1.0
  - rpc: 1.0
  - txpool: 1.0 트랜잭션 풀
  - web3: 1.0 통신 관련 정보

  ```sh
  eth.accounts # Geth가 가지고 있는 지갑계정
  miner.setEtherbase(eth.accounts[0]) # 채굴시 보상받을 계정으로 0번째 계정을 설정
  eth.coinbase # 현재 채굴 보상을 받는 계정을 확인
  miner.start() # 채굴 시작
  miner.stop() # 채굴 중단
  eth.getBlock("latest") # 마지막 블록을 가져온다.
  web3.fromWei(eth.getBalacne(eth.accounts[0]), "ether");
  eth.sendTransaction({from:eth.accounts[0], to: eth.accounts[1], value: web3.toWei(1, "ether")})
  #eth.sendTransaction({from:"", to: "", value: 0})
  ```

  ## 계정 잠금 풀기

  ```sh
  geth --datadir ~/myGeth --unlock "지갑주소"
  # 실행후 비밀번호 입력하고 enter입력
  ```

  ## miner.start() 시 아래 내용이 뜨는 이유

  - Generating DAG in progress < 블로을 계산할 때 빠르게 계산하기 위해 미리 준비한다.

```sh
eth.getBalance("지갑주소") #지갑의 돈을 받아 출력한다.
eth.getBlock(0) # 제네시스 블록 가져와 출력
#web3.fromWei(eth.getBalance("지갑주소"), "ether")
web3.fromWei(eth.getBalance("0x85582800628B2C4c0437639109E8C13C79279090"), "ether")

```

## 이더리움에서 사용하는 코인 단위

- wei : 이더리움의 최소 단위
- kwei : 1,000 wei
- Mwei : 1,000,000 wei
- Gwei : 1,000,000,000 wei
- Twei : 1,000,000,000,000 wei
- Pwei : 1,000,000,000,000,000 wei
- Ether : 1,000,000,000,000,000,000 wei
  - 0.2 Ether = 200,000,000,000,000,000 wei

# nvm 실행 오류 시

- 글자에 색상이 사라졌을 때

```sh
source ~/.bashrc
```
