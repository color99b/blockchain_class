// POST /?name=asd HTTP/1.1
// Content-Type: application/json
// User-Agent: PostmanRuntime/7.30.0
// Accept: */*
// Postman-Token: 3374e1ad-6cbf-4bb1-8b56-598f11904df2
// Host: localhost:4193
// Accept-Encoding: gzip, deflate, br
// Connection: keep-alive
// Content-Length: 22

// {
//     "asd": "asd"
// }

// GET /favicon.ico HTTP/1.1
// Host: localhost:4193
// Connection: keep-alive
// sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"
// sec-ch-ua-mobile: ?0
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
// sec-ch-ua-platform: "Windows"
// Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8
// Sec-Fetch-Site: same-origin
// Sec-Fetch-Mode: no-cors
// Sec-Fetch-Dest: image
// Referer: http://localhost:4193/
// Accept-Encoding: gzip, deflate, br
// Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7

const getQuery = (queryString) => {
  if (!queryString) return {};
  // const query = {};
  // queryString = queryString.split("&");
  // //각 쿼리는 &표시로 나눠진다.
  // for (let i = 0; i < queryString.length; ++i) {
  //   const temp = queryString[i].split("=");
  //   //나눠진 각 쿼리를 "="을 기준으로 나눠서
  //   query[temp[0].trim()] = temp[1].trim();
  //   // name = kjy => query{name : kjy}
  // }
  // return query;

  return queryString
    .split("&")
    .map((item) => item.split("="))
    .reduce((prev, curr) => {
      prev[curr[0]] = curr[1].trim();
      return prev;
    }, {});
};

const getMessage = (lines) => {
  const headers = {};
  while (true) {
    const temp = lines.shift();
    if (!temp) break;
    //요청에 포함된 정보에서 body를 넣기전에 빈줄 한 줄이 있어서 빈줄만나면 while문 탈출
    const index = temp.indexOf(":");
    let value = temp.slice(index + 1).trim();
    if (!isNaN(parseInt(value))) value = +value;
    headers[temp[0].toLowerCase() + temp.slice(1, index).replaceAll("-", "")] =
      value;
    // Host : localhost:8080 일때 :가 2개여서 3개로 나눠질까봐
    // 키          값   2개로 나누기 위해 indexOf로 처음 : 만 찾는다.
  }
  let body = lines.join("");
  // console.log(headers[]);

  if (body) {
    if (
      global.isJson &&
      headers["contentType"].indexOf("application/json") > -1
    ) {
      body = JSON.parse(body);
    } else if (
      headers["contentType"].indexOf("application/x-www-form-urlencoded") > -1
    ) {
      body = getQuery(body);
    }
  }
  return { headers, body };
};

const im = {
  이름: "김영준",
  언어: ["JavaScript", "HTML", "CSS", " C", "Solidity"],
  기술스택: ["React", "Node", "Mysql", "BlockChain"],
  직장: {
    이름: "경일게임아카데미",
    주소: "금복빌딩 45",
    전화번호: "0123123",
  },
};

//parser란? : parsing 하는 메서드에 붙는 이름.
//parsing : 사전적 의미로는 구문분석, 문장을 구성 성분으로 분해하고 위계 관계를 분석하여 문장의 구조를 결정
// 정보를 분해분석하여 원하는 형태로 조립하는 것
const parser = (data) => {
  const lines = data.split("\r\n");
  console.log("lines", lines);
  const firstLine = lines.shift().split(" ");
  // console.log("firstLine", firstLine);
  // const method = firstLine[0];
  // const url = firstLine[1];
  // const version = firstLine[2];
  const [method, url, version] = lines.shift().split(" ");
  // console.log("method", method);
  // console.log("url", url);
  // console.log("version", version);

  // const path = url.split("?")[0];
  // const queryString = url.split("?")[1];
  //url을 라우터와 쿼리로 나눈다.
  const [path, queryString] = url.split("?");
  const query = getQuery(queryString);
  console.log("path", path);
  console.log("queryString", queryString);
  console.log("query", query);

  const dataObj = getMessage(lines);
  return { method, url, version, path, query, ...dataObj };
};

module.exports = parser;
