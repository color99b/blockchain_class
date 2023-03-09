# 오늘 test 순서

```sh
날짜 루트 폴더에 back, front 없이 그냥 바로 init
npm init -y
npm i truffle
npm i -D prettier-plugin-solidity
npx truffle init
```

- IERC20.sol contracts 생성
- ERC20.sol contracts 생성

# interface 원칙

- https://docs.soliditylang.org/en/v0.8.19/contracts.html#interfaces
- They cannot inherit from other contracts, but they can inherit from other interfaces.
  - interface는 컨트랙트를 extends 할 수 없고 interface는 interface 끼리만 상속이 가능하다.
- All declared functions must be external in the interface, even if they are public in the contract.
- They cannot declare a constructor
  - 생성자 불가
- They cannot declare state variables
  - 변수 불가
- They cannot declare modifiers.
  - 한정자(modifier) 불가

# ERC20 토큰 구현

- IERC20을 상속받아 구현

```solidity
import "./IERC20.sol";

// IERC20 을 가져온다.,

contract ERC20 is IERC20 {
  // is는상속받은 옵션이다. == extends
  string public name;
  string public symbol;
  uint8 public decimals = 18;

  uint public override totalSupply;
  // interface에서 선언된 함수는 기본적으로 virtual 옵션을 갖는다.( 생략되어 있음)
  // virtual 옵션이 있는 메서드를 상속받을 경우 override 옵션을 추가해야한다.
  // 상속할 때 상속 받는 컨트랙트에서메서드를 다시 작성하여 덮어쓸 경우 상속하는 메서드는 virtual, 상속 받는 메서드는 override 옵션을 가져야한다.
  mapping(address => uint) public balances;
  mapping(address => mapping(address => uint)) public override allowance;

  // {address : {address :uint}}

  function balanceOf(address account) external view override returns (uint) {
    return balances[account];
  }

  function transfer(
    address recipient,
    uint amount
  ) external override returns (bool) {
    balances[msg.sender] -= amount;
    balances[recipient] += amount;
    emit Transfer(msg.sender, recipient, amount);
    return true;
  }

  function approve(
    address spender,
    uint amount
  ) external override returns (bool) {
    allowance[msg.sender][spender] = amount;
    emit Approval(msg.sender, spender, amount);
    return true;
  }

  //msg.sender, 트랜잭션을 보낸 지갑 계정의 토큰을 spender에게 amount만큼 사용할 수 있도록 권한을 위임한다.
  //대리로 대신 팔아달라고 부탁하는 느낌, 엄카같은 느낌

  function transferFrom(
    address sender,
    address recipient,
    uint amount
  ) external override returns (bool) {
    require(allowance[sender][msg.sender] >= amount);
    allowance[sender][msg.sender] -= amount;
    balances[recipient] += amount;
    balances[sender] -= amount;
    emit Transfer(sender, recipient, amount);
    return true;
  }
}

// approve메서드로 토큰에 대해 권한을 부여받은 지갑 계정(spender) 가 위임받은 토큰을 다른 계정에 보낼 때 사용하는 메서드
// -approve 메서드의 msg.sender => transferFrom 메서드의 sender
// -approve 메서드의 spender => trasnferFrom 메서드의 msg.sender

function mint(uint amount) internal {
  //토큰 발행 메서드
  balances[msg.sender] += amount;
  // 트랜잭션을 보낸 지갑 계정에 원하는 만큼 토큰 추가
  totalSupply += amount;
  // 총수량에 추가
  emit Transfer(address(0), msg.sender, amount);
  // address(0)은 주소에서의 null을 뜻한다.
}

function burn(uint amount) external {
  //토큰 삭제 메서드, 소각이라고 말한다.
  balances[msg.sender] -= amount;
  totalSupply -= amount;
  emit Transfer(msg.sender, address(0), amount);
}
```

## Interface 구현

- 표준에 지키기 위헤서 선언을 먼저 해두자.
- typescript 에서 했던것과 마찬가지로 정의를 하지 않고 선언만
- file명 : IERC20.sol

```solidity
// 토큰은 코인이라고 생각하면 되지만 토큰은 가치가 없을 수도 있고, 코인은 가치가 있어야만 하는것.
interface IERC20 {
  function totalSupply() external view returns (uint);

  // 토큰(코인)의 총 수량
  function balanceOf(address account) external view returns (uint);

  //지갑 계정의 잔액(토큰)
  function transfer(address recipient, uint amount) external returns (bool);

  // 토큰 보내기
  function allowance(address owner, address spender) external returns (uint);

  // 권한을 위임 받은 토큰을 관리하는 데이터 공간
  function approve(address spender, uint amount) external returns (bool);

  // 권한을 위임하는 메서드
  function transferFrom(
    address spender,
    address recipient,
    uint amount
  ) external returns (bool);

  // 권한을 위임 받은 토큰에 대해 거래(보내기)
  event Transfer(address indexed from, address indexed to, uint amount);
  // 거래 시 기록하는 이벤트
  event Approval(address indexed owner, address indexed spender, uint amount);
  // 권한 위임 시 기록하는 이벤트
}
```

- totalSupply() : 토큰의 총 수량 반환
- balanceOf(account) : 지갑 계정(account) 의 잔액 반환
- transfer(recipient, amount) : 수령인(recipient) 에게 n(amount) 개의 토큰을 보낸다. -> 트랜잭션 발생
- allowance (owner, spender) : 현재 지갑 계정(owner)이 다른 누구(spender? 다른지갑계정 | CA)에게 얼마의 토큰에 대한 권한을 줬는지 반환
- approve(spender, amount) : allowance 에서 확인할 수 있는 권한 위임을 실행하는 메서드, spender(누구) 에게 amount 만큼의 토큰에 대한 권한을 위임
- transferForm (spender, recipient, amount) : 위임 받은 지갑 꼐정 (spender) 이 누구(recipient) 에게 amount 만큼의 토큰을 보낸다.
- Transfer(from, to, amount) : 누가 누구에게 얼마만큼의 토큰을 보냈는지 기록
- Approval(owner, spender, amount) : 누가(owner) 누구(spender) 에게 얼마만큼의 토큰에 대한 권한을 위임했는지 기록

### 추가설명

- method options
  - external : 해당 스마트 컨트랙트 내부에서 호출하지 못하고 외부에서만 호출 할 수 있도록 설정
  - internal : 해당 스마트 컨트랙트 외부에서 호출하지 못하고 내부에서만 호출 할 수 있도록 설정
    - external과 internal은 가시성이라고 부르고 외부에서 보이는지 내부에서 보이는지를 설정.
  - view : 해당 스마트 컨트랙트의 변수(data)를 사용할 수 있지만 수정하지 못하도록 설정
  - pure :해당 스마트 컨트랙트의 변수(데이터)를 사용할수도 수정할수도 없도록 설정
    - view 와 pure는 외부에서 호출 시 gas를 소모하지 않는다.
- event 옵션

  - indexed : 이벤트를 받아올 시 검색 또는 필터링을 할 수 있도록 설정
    - mySQL에서의 index와 같다.

- 익명함수(화살표함수같은느낌 이름없는 함수)
  - 받은 트랜잭션 내에 data가 없을 때 실행된다. => 토큰을 보내는 트랜잭션일때, 오류 트랜잭션일때
    - sendTransaction({from:~, to:~, value:value}) << Ether 보낼때
    - sendTransaction({from:~, data:data}) << smart contract 보낼때
  - fallback() : 기존의 익명함수, value의 유무와 관계없이 실행된다.
  - receive() : 추가된 익명함수 , value가 있을 때 실행된다.
