# root 폴더에서 front, back 폴더 생성

- front : yarn create react-app front
- back : 폴더, index.js 직접 만들고 npm init -y

# back 세팅 라이브러리

npm i express cors truffle web3
npm i -D prettier-plugin-solidity
npx truffle init

# front 세팅 라이브러리

// yarn add web3 axios

============================================================

# back 진행

- contracts 폴더에 .sol 파일 작성 (event)
- sol 파일을 컴파일
- migration 폴더에 1*deploy*~~~.js 작성
- 위에서 작성한 js를 migration

# front 진행

- custom hook 생성
- metaMask를 web3와 연동
