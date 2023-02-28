// solc --abi --bin ./파일명.sol  << 이 작업을 해주는 js이다.
const solc = require("solc");
// 솔리디티 코드를 바이트 코드로 변환시켜주는 컴파일 라이브러리
const fs = require("fs");
// FileSystem, 파일에 접근하여 데이터를 가져오거나 파일을 수정, 생성 등의 기능을 제공하는 라이브러리
const path = require("path");
// 경로에 대한 편의 기능을 제공하는 라이브러리
// 사용 이유는 보통 os에 따른 경로 문자열이 다르기 때문
// windows 는 C:\users ~~~ / Linux 는 /mnt/c/Users~~~

// const contractPath = path.join(__dirname, "contracts", "Test.sol");
// // __dirname : 현재 문서의 경로 ( 폴더 까지만 표기 )
// //      - PS : ES6(import, export) 사용시 __dirname이 없다.
// // path.join : 경로를 합쳐서 하나의 문자열로 변환

// // fs.readFile(contractPath, { encoding: "utf-8" }, (err, data) =>
// //   console.log("data", data)
// // );

// // console.log(fs.readFileSync(contractPath, "utf-8"));

// //readFile은 콜백으로 버퍼가 나오고 (두번째 인자(옵션)로 인코딩방식을 줄 수 있다.) Sync는 함수자체로 파일자체가 나오고
// const data = JSON.stringify({
//   // solc 를 사용하여 솔리디티 코드를 컴파일 시 사용할 설정
//   language: "Solidity",
//   // 언어는 솔리디티다. 솔리디티 이외에도 언어가 있으나 솔리디티가 너무강해서 다른 언어를 거의 사용하지 않는다.
//   sources: {
//     //파일에 대한 설정
//     "Test.sol": {
//       //파일로 생성되는 솔리디티 객체의 이름
//       content: fs.readFileSync(contractPath, "utf-8"),
//       // 파일내용 (코드)
//     },
//   },
//   settings: {
//     // 추가적인 설정
//     outputSelection: {
//       // 가져올 정보 설정
//       "*": {
//         // 파일 이름
//         "*": ["*"],
//         // 가져올 데이터의 키, 값
//       },
//       //outputSelection : 내용은 모든 데이터를 전부 가져와라.
//     },
//   },
// });

// const compiled = JSON.parse(solc.compile(data));
// //컴파일 후 데이터를 객체화
// console.log(compiled);
// // fs.writeFileSync(path.join(__dirname, "Test.json"), JSON.stringify(compiled));
// // console.log(compiled.contracts["Test.sol"]);
// const {
//   abi,
//   evm: { bytecode },
// } = compiled.contracts["Test.sol"].Test;
// // abi, bytecode 추출
// // console.log(abi);
// console.log(bytecode.object);
// // fs.writeFileSync(
// //   path.join(__dirname, "bytecode.json"),
// //   JSON.stringify(bytecode)
// // );

class Compiler {
  /**
   *
   * @param {string} _fileName 파일이름
   */
  static compile(_fileName) {
    const contractPath = path.join(__dirname, "contracts", "Test.sol");
    const data = JSON.stringify({
      // solc 를 사용하여 솔리디티 코드를 컴파일 시 사용할 설정
      language: "Solidity",
      // 언어는 솔리디티다. 솔리디티 이외에도 언어가 있으나 솔리디티가 너무강해서 다른 언어를 거의 사용하지 않는다.
      sources: {
        //파일에 대한 설정
        [_fileName]: {
          // 객체에서 []를 넣으면 안에 매개변수를 전달할 수 있는 것 같다.
          //파일로 생성되는 솔리디티 객체의 이름
          content: fs.readFileSync(contractPath, "utf-8"),
          // 파일내용 (코드)
        },
      },
      settings: {
        // 추가적인 설정
        outputSelection: {
          // 가져올 정보 설정
          "*": {
            // 파일 이름
            "*": ["*"],
            // 가져올 데이터의 키, 값
          },
          //outputSelection : 내용은 모든 데이터를 전부 가져와라.
        },
      },
    });
    // console.log("data", data);
    const compiled = solc.compile(data);
    return Compiler.writeOutput(JSON.parse(compiled));
  }
  /**
   *
   * @param {*} _compiled 컴파일된 솔리디티 객체
   */
  static writeOutput(_compiled) {
    const result = {};

    for (const contractFileName in _compiled.contracts) {
      console.log("asdasd");
      console.log(contractFileName);
      const [contractName] = contractFileName.split(".");
      //구조분해할당
      console.log(contractName);
      const contract = _compiled.contracts[contractFileName][contractName];
      // 객체에서 키에 대한 값을 가져오는데 키를 변수로 입력할 경우 [] 을 사용한다. documnet.form[아이디명][인풋아이디명] 이런느낌
      const abi = contract.abi;
      const bytecode = contract.evm.bytecode.object;
      const tempObj = { abi, bytecode };
      const buildPath = path.join(__dirname, "build", `${contractName}.json`);
      fs.writeFileSync(buildPath, JSON.stringify(tempObj));
      fs.writeFileSync(
        path.join(__dirname, "build", `${contractName}.abi`),
        JSON.stringify(abi)
      );
      fs.writeFileSync(
        path.join(__dirname, "build", `${contractName}.bin`),
        bytecode
      );

      result[contractName] = tempObj;
    }
    return result;
  }
}

module.exports = Compiler;
