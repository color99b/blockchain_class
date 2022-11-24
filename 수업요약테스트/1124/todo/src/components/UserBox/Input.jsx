function Input(pass, setList) {
  // console.log(pass);
  return (
    <div>
      {pass.id}:{" "}
      <input type={pass.kind} placeholder={pass.id} onInput={(e) => {}} />
    </div>
  );
}

export default Input;
