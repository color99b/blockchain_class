## 블록체인

- 장부와 장부간에 proof of work 로 연결된것.
- 처음 블록 ( genesis) 에서 처음 proof of work 를 통해 코인을 받고 거래가 발생하고 발생한 장부를 proof of work를 통해 다시 묶고(블록) 의 반복

-sha256 : 입력값이 같으면 동일한 값이 나옴
-proof of work : 작업 증명 시스템 :

-거래할 때 확인하는것
-> 1. 상대방이 진짜 자신이 주장하는 사람인가? identify - >
A가 B에게 I will give you 10 coins 라고 보낸다고 하면
a가 보내는 msg 와 시크릿키는 Signiture(서명), Encrypted Message를 반환
sign(msg, sk){
...
return Signiture, Encrypted Message
}
B는 Signiture, Encrypted Messaged와 publick 키를 받아
Verify(Encrypted Messaged, Signiture, pk){
...
return Msg
}
메세지를 반환받는다.
즉 서명과 암호화된 메시지가 서로 같지 않으면 상대방측에서 메시지가 출력되지 않는다.
메시지 내용이 조금이라도 바뀌면 시그니쳐가 바뀌기때문에 가지고 있다가 도용 불가능`

-> 2. 정말 그러한 자산을 가지고 있는가 ?
