//케이스 1 안의 내용 다 지우고 복붙하면됨.
case 1 :



console.log(`⠀




`);
console.log(`1. 포켓몬을 꺼낸다`);
console.log(`2. 주먹으로 때린다`);
console.log(`3. 주변에 도움을 청한다.`);
      let j = 0;
      do {
        let select = prompt("행동을 골라주세요");

        j++;
        switch (select) {
          case "1":
            console.log(`1`);

            j = 10000;

            break;
          case "2":
            console.log(`가나다라마바사`);
            j = 10000;
            break;
          case "3":
            console.log(`강낭콩자반`);
            j = 10000;
            break;

          default: {
            let select = confirm(
              "1,2,3번 중에 고르세요. 아니면 만번 입력해보던가"
            );
            break;
          }
        }
      } while (j != 10000);

      i = 10000;

      break;