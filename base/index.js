function solution(dartResult) {
  let answer = [];
  const SDT = {
    S: 1,
    D: 2,
    T: 3,
  };

  dartResult.match(/\d+\S[\*|\#]*/g).forEach((item, idx) => {
    item = item.match(/\d+|\S|[\*|\#]/);
    answer.push(Math.pow(item[0], SDT[item[1]]));
    if (item[2] === "*") {
      answer[idx] *= 2;
      if (answer.length > 1) answer[idx - 1] *= 2;
    } else if (item[2] === "#") {
      answer[idx] *= -1;
    }
  });

  return answer.reduce((prev, curr) => prev + curr, 0);
}

solution("1D2S3T*");
// function findSDT(startNum, endNum, dartResult) {
//     let numTemp=0;
//      let numResult =0;

//     for(let i=startNum;i<dartResult.length;i++){
//         if(dartResult[startNum] =="S" || dartResult[startNum] == "D" || dartResult[startNum] == "T"){
//             dartResult.slice(startNum,startNum+4);
//             i = dartResult.length;
//         }

//     }

//     if (dartResult.length == 3){
//         num = dartResult[0];
//     }else if { (dartResult.length == 4) num= 10;}

//     if(dartResult[1] =="S"){
//         numTemp += num;
//     } else if (dartResult[1] == "D"){
//          numTemp += Math.pow(num,2);
//     } else if (dartResult[1] =="T"){
//          numTemp += Math.pow(num,3);
//     }
//     if(dartResult[2]=="*") numTemp = numTemp * 2;
// }
