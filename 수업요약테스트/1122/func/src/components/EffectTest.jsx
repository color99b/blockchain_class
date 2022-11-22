import { useEffect, useState, useMemo, useCallback } from "react";

function EffectTest() {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");

  const [file, setFile] = useState({
    name: "asdf",
    ext: "png",
    type: "image/png",
  });

  useEffect(() => {
    console.log("이팩트훅 테스트 시작");
  }, []);

  useEffect(() => {
    console.log(`숫자가${num}으로변경됐어`);
  }, [num]);

  useEffect(() => {
    console.log(`이름이${name}으로변경됐어`);
  }, [name]);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const increase = () => {
    setNum(num + 1);
  };
  const increaseCallback = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  const memoNum = useMemo(() => {
    return num + 10;
  }, [num]);
  return (
    <div>
      <button onClick={increaseCallback}>{memoNum}</button>
      <div>{name}</div>
      <div>{file.name + "." + file.ext}</div>
    </div>
  );
}

export default EffectTest;
