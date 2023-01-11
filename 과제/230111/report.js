document.getElementById("result").onclick = () => {
  const result = document.getElementById("resultNum");

  const num = document.getElementById("num").value;
  switch (document.getElementById("left").value) {
    case "10":
      console.log("12312312");

      switch (document.getElementById("right").value) {
        case "2":
          result.innerText = tenTotwo(num);
          break;
        case "16":
          result.innerText = tenToSix(num);
          break;
        default:
          break;
      }

      break;
    case "16":
      console.log("12312312");

      switch (document.getElementById("right").value) {
        case "10":
          result.innerText = sixToten(num);
          break;
        case "16":
          break;
        default:
          break;
      }

      break;
    default:
      break;
  }
};

const tenTotwo = (num) => {
  const tempArr = [];

  for (; !(num == 3 || num == 2); ) {
    tempArr.unshift(num % 2);
    console.log("들어옴");
    num = parseInt(num / 2);
  }
  if (num == 2) {
    tempArr.unshift(0);
    tempArr.unshift(1);
  } else {
    tempArr.unshift(1);
    tempArr.unshift(1);
  }
  const result = tempArr.reduce((acc, cur) => {
    return acc.toString() + cur.toString();
  });
  return result;
};

const tenToSix = (num) => {
  const tempArr = [];
  for (; num >= 16; ) {
    let temp = num % 16;
    if (num % 16 >= 10) {
      switch (num % 16) {
        case 10:
          temp = "A";
          break;

        case 11:
          temp = "B";
          break;

        case 12:
          temp = "C";
          break;

        case 13:
          temp = "D";
          break;

        case 14:
          temp = "E";
          break;

        case 15:
          temp = "F";
          break;

        default:
          break;
      }
    }
    tempArr.unshift(temp);
    num = parseInt(num / 16);
  }
  if (num >= 10) {
    switch (num) {
      case 10:
        num = "A";
        break;

      case 11:
        num = "B";
        break;

      case 12:
        num = "C";
        break;

      case 13:
        num = "D";
        break;

      case 14:
        num = "E";
        break;

      case 15:
        num = "F";
        break;

      default:
        break;
    }
  }
  tempArr.unshift(num);

  const result = tempArr.reduce((acc, cur) => {
    return acc.toString() + cur.toString();
  });
  return result;
};

const sixToten = (num) => {
  console.log(num.toString().split(""));
  let result = 0;
  const temp = [...num.toString()].reverse();
  console.log(temp);
  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "A":
        temp[i] = 10;
        break;

      case "B":
        temp[i] = 11;
        break;

      case "C":
        temp[i] = 12;
        break;

      case "D":
        temp[i] = 13;
        break;

      case "E":
        temp[i] = 14;
        break;

      case "F":
        temp[i] = 15;
        break;

      default:
        break;
    }
    result += temp[i] * 16 ** i;
  }
  return result;
};
