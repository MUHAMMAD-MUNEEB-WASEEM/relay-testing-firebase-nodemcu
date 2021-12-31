import { useState } from "react";
import firebase from "../firebase";

function SendData() {
    const [int, setInt] = useState(0);
    const [float, setFloat] = useState(0);


  const sendData =  () => {
    const sendDataRef = firebase.database().ref('test/current');
    const data = {
      int: Number(int),
      float: Number(float)
    };

    sendDataRef.set(data);
  };
    return (
        <div>
            <h3>Enter Int Value: </h3>
            <input type="number" value={int} onChange={(e)=>setInt(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <h3>Enter Float Value: </h3>
            <input type="number" value={float} onChange={(e)=>setFloat(e.target.value)} placeholder="Enter Float Value"/>
            <br/>
            <br/>
            <button onClick={sendData}>Send Data</button>
        </div>
    )
}

export default SendData
