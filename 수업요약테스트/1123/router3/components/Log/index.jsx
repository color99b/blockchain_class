import { Outlet } from "react-router-dom";
function Log() {
  return (
    <div>
      LOG! <Outlet />
    </div>
  );
}

export default Log;
console.log("");
