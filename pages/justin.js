import { useState } from "react";
function Counter() {
    const [state, setState] = useState(0);
  
    function buttonAdd() {
      console.log("button clicked");
      setState(state + 1);
    }
  
    function buttonSub() {
      console.log("button clicked");
      setState(state - 1);
    }
  
    function buttonZero() {
      console.log("button clicked1");
      setState(0);
    }
  
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h3> counter : {state}</h3>
        <p style={{ border: "5px solid", margin: "50px" }}>
          <button
            style={{ border: "5px solid red", margin: "20px" }}
            onClick={buttonAdd}
          >
            counter up
          </button>
          <button
            style={{ border: "5px solid green", margin: "20px" }}
            onClick={buttonSub}
          >
            counter down
          </button>
          <button
            style={{ border: "5px solid blue", margin: "20px" }}
            onClick={buttonZero}
          >
            Zero
          </button>
        </p>
      </div>
    );
  }
  export default Counter;
  