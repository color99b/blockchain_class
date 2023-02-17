1. server index 작성 및 cros로 react 연동
2. api routes로 web3 연결
3. ubuntu에서 geth를

```sh
#18.12
geth --datadir ~/myGeth --ws.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 50 --ws --ws.port 8081 --ws.addr "0.0.0.0" --ws.origins "*" console
```

```sh
#16.18
geth --datadir ~/myGeth --ws.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 50 --ws --ws.port 8081 --ws.origins "*" console
```

로 여는데 노드버전이 16.18이면 --ws.addr 을 지우고 18.16이면 -ws.addr을 붙이며 연다.

?? 블록을 다 가져와서 검색할거냐? 테이블 2개 관계형

?? 블록과 hash를 table 1개, 블록은 block 따로

??

// transaction table
