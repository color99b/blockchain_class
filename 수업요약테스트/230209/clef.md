# clef

- 기존에 personal을 사용하던 객체를 사용하던 지갑 계정 기능을 외부로 추출
- 수업으로는 계정 생성만 할 생각.

```sh
clef newaccount --keystore ~/myGeth/keystore
# 입력시 사용할 것인지 물어본다 -> ok 입력
  #-> 사용할 것인지 묻는 이유 : personal 객체를 없애면서 만드는 중이라 오류가 많다.
# 10글자 이상의 비밀번호를 입력하면 계정생성 완료
```

- myGeth 의 keystore 폴더에 들어가면 방금 생성한 계정 정보 파일이 있다.
