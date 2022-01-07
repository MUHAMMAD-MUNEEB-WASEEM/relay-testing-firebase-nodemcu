import { useState } from "react";
import firebase from "../firebase";

function SendData() {
    const [vp1, setVp1] = useState(0);
    const [vp2, setVp2] = useState(0);
    const [vp3, setVp3] = useState(0);
    const [va1, setVa1] = useState(0);
    const [va2, setVa2] = useState(0);
    const [va3, setVa3] = useState(0);
    const [ip1, setIp1] = useState(0);
    const [ip2, setIp2] = useState(0);
    const [ip3, setIp3] = useState(0);
    const [ia1, setIa1] = useState(0);
    const [ia2, setIa2] = useState(0);
    const [ia3, setIa3] = useState(0);


  const sendData =  () => {
    const sendDataRef = firebase.database().ref('test/current');
    const data = {
      vp1: Number(vp1),
      vp2: Number(vp2),
      vp3: Number(vp3),
      va1: Number(va1),
      va2: Number(va2),
      va3: Number(va3),


      ip1: Number(ip1),
      ip2: Number(ip2),
      ip3: Number(ip3),
      ia1: Number(ia1),
      ia2: Number(ia2),
      ia3: Number(ia3),
    };

    sendDataRef.set(data);
  };
    return (
        <div>
            <h3>Enter Vp1: </h3>
            <input type="number" value={vp1} onChange={(e)=>setVp1(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={vp2} onChange={(e)=>setVp2(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={vp3} onChange={(e)=>setVp3(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={va1} onChange={(e)=>setVa1(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={va2} onChange={(e)=>setVa2(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={va3} onChange={(e)=>setVa3(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={ip1} onChange={(e)=>setIp1(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={ip2} onChange={(e)=>setIp2(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={ip3} onChange={(e)=>setIp3(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={ia1} onChange={(e)=>setIa1(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={ia2} onChange={(e)=>setIa2(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <input type="number" value={ia3} onChange={(e)=>setIa3(e.target.value)} placeholder="Enter Int Value" />
            <br/>
            <br/>
            <button onClick={sendData}>Send Data</button>
        </div>
    )
}

export default SendData
