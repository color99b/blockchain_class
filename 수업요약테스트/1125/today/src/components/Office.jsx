import { useContext, useState } from "react";
import { OfficeContext } from "./ReducerTest.jsx";

export default function Office() {
  const { result, requestDispatch } = useContext(OfficeContext);
  const [balance, setBalance] = useState(10000);
  //발급받을 때마다 돈이 줄어들도록한다.

  return (
    <>
      <input type={"radio"} value={"주민등록초본"} name={"type"} />
      주민등록초본
      <input type={"radio"} value={"주민등록등본"} name={"type"} />
      주민등록등본
      <input type={"radio"} value={"건축물대장"} name={"type"} />
      건축물대장
      <input type={"radio"} value={"지방세납세증명"} name={"type"} />
      지방세납세증명
      <input type={"radio"} value={"운전면허 정보"} name={"type"} />
      운전면허 정보
      <input type={"radio"} value={"전입신고"} name={"type"} />
      전입신고
      <input type={"radio"} value={"코로나19 격리통지서"} name={"type"} />
      코로나19 격리통지서
      <input type={"radio"} value={"병적증명서"} name={"type"} />
      병적증명서
      <div
        className="office"
        onClick={(e) => {
          e.stopPropagation();
          const list = document.getElementsByName("type");
          let cardType;
          list.forEach((node) => {
            if (node.checked) {
              cardType = node.value;
            }
          });
          console.log(cardType);
          requestDispatch({
            type: cardType,
            payload: {
              identityCard: cardType,
              pay: 400,
              cash: balance,
            },
          });
          setBalance(balance - 400);
        }}
      >
        {result}
      </div>
    </>
  );
}

// {
//   type: "주민등록초본",
//   payload: {
//     identityCard: "주민등록초본",
//     pay: 400,
//     cash: setBalance(balance - 400),
//   },
// },
// {
//   type: "주민등록등본",
//   payload: { identityCard: "주민등록증", pay: 500 },
// },

// {
//   type: "건축물대장",
//   payload: { identityCard: "건축물대장", pay: 1000 },
// },

// {
//   type: "지방세납세증명",
//   payload: { identityCard: "지방세납세증명", pay: 600 },
// },

// {
//   type: "운전면허 정보",
//   payload: { identityCard: "운전면허 정보", pay: 300 },
// },

// {
//   type: "전입신고",
//   payload: { identityCard: "전입신고", pay: 1500 },
// },

// {
//   type: "코로나19 격리통지서",
//   payload: { identityCard: "코로나19 격리통지서", pay: 3000 },
// },
// {
//   type: "병적증명서",
//   payload: { identityCard: "병적증명서", pay: 0 },
// }
