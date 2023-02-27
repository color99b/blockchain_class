# EVM

- Ethereum Virtual Machine

- 스마트 컨트랙트를 실행하기 위한 가상 컴퓨터

- 블록체인 네트워크 노드(peer) 에 포함되어 항상 실행
  - 노드(peer) 끼리의 합의에 사용
  - ByteCode 실행에 사용

# Solidity

- 스마트 컨트랙트 프로그래밍 언어
- 컴파일하여 ByteCode를 생성
- ByteCode 는 트랜잭션의 data로 저장되어 스마트 컨트랙트 실행 시 사용

# geth 새롭게 개인 네트워크 생성

```json
{
  "difficulty": "200000",
  "gasLimit": "3100000",
  "alloc": {},
  "config": {
    "chainId": 61232450,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0
  }
}
```

- config 아래에 추가된 2개의 옵션은 스마트 컨트랙트를 실행하기 위한 옵션이다.

```sh
geth --datadir ~/newGeth --http --http.port 8888 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 61232450 --ws --ws.port 7777 --ws.origins "*" --nodiscover console
```

- nodiscover : 남이 내 노드(peer)를 못 찾게 한다.

# 계정 생성

```sh
geth --datadir ~/newGeth account new
```

# Geth 실행시 unlock

```sh
echo 위에서 생성한 지갑 계정의 비밀번호 >> ~/newGeth/password
echo 1 >> ~/newGeth/password
# newGeth로 가서 ls해보면 처음엔 폴더가 없지만
# echo 1 >> ~/newGeth/password 입력하면 파일이 없으면 파일까지 생기고 없으면 한줄한줄 추가됨

```

- echo : cmd, bash, powershell 에서 사용하는 console.log 다.
- ">>" : 해당 파일에 출력 값을 저장

```sh
# 18.12
geth --datadir ~/newGeth --http --http.addr "0.0.0.0" --http.port 8888 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 61232450 --ws --ws.port 7777 --ws.origins "*" --nodiscover --unlock "0,1" --password ./newGeth/password console
```

```sh
# 16.18
geth --datadir ~/newGeth --http --http.port 8888 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 61232450 --ws --ws.port 7777 --ws.origins "*" --nodiscover --unlock "0,1" --password ./newGeth/password console
```

- unlock : accounts 에서의 index
- password : 비밀번호가 저장된 파일
- password의 한 줄 한 줄이 계정 배열의 index가 되어서 매치가 되야한다.
