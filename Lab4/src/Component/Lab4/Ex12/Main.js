import React from "react";
import useOnline from "./index";
const Main = () => {
  const online = useOnline();
  return (
    <div>
      <h1>Network Checked</h1>
      <span>
        you are now ....
        {online === true ? <div>Online</div> : <div>Offline</div>}
      </span>
    </div>
  );
};

export default Main;
