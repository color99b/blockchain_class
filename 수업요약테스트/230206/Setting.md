# GETH를 위한 세팅

-geth : Go로 구현된 이더리움 서버

# Golang

-google에서 개발한 프로그래밍 언어

- 이름은 Go이지만 검색 등에서 불편해서 Golang이라고 부른다.
- 설치

```sh
# Windows
sudo apt-get install golang

# Mac Os
sudo brew intsall golang
```

- 버전확인

```sh
go version
```

- 아래의 프로그램들을 함께 설치하자
- libgmp3-dev : 다중 정밀도 산술 라이브러리
- tree : 디렉토리를 tree 형태로 보여준다.
- make : 통합 컴파일러, 다양한 언어에 대해서 알아서 build를 해준다.
- build-essential : build에 필요한 기본 라이브러리들을 제공

```sh
sudo apt-get install libgmp3-dev tree make build-essential
```

# Go-Ethereum

-Geth -이더리움에서 제공하는 공식 소프트웨어

- 설치

```sh
git clone http://github.com/ethereum/go-ethereum
```

-빌드

- go-ethereum 폴더에서 실행

```sh
make geth
```

-geth 실행

- go-ethereum/build/bin 폴더내의 geth실행

```sh
./geth
```

# 생성한 geth를 위치에 상관없이 명령어로 사용할 수 있도록 만들자

- pwd로 확인한 geth의 경로
  - /home/kyj(ubuntu 사용자명)/geth/go-ethereum/build/bin
- bash profile 만들기

  - 파밀명 : .bash_profile

  ```sh
  vi ~/.bash_profile
  ```

  - 방법은 vi

    - 내용은 아래와 같다.

    ```
    export PATH=$PATH:/home/kyj/geth/go-ethereum/build/bin

    입력후 수정완료시
    esc- > :wq! -> enter
    ```

  아래의 명령어를 입력하면 완료

  ```sh
  source ~/.bash_profile
  ```
