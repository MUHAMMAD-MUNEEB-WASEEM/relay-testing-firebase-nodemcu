import { useState } from "react";
import firebase from "../../firebase";
import './SendData.css'

function SendData() {
    const [vp1, setVp1] = useState();
    const [vp2, setVp2] = useState();
    const [vp3, setVp3] = useState();
    const [va1, setVa1] = useState();
    const [va2, setVa2] = useState();
    const [va3, setVa3] = useState();
    const [ip1, setIp1] = useState();
    const [ip2, setIp2] = useState();
    const [ip3, setIp3] = useState();
    const [ia1, setIa1] = useState();
    const [ia2, setIa2] = useState();
    const [ia3, setIa3] = useState();


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
        <div className="sendData">
              <div className="container">
                <div className="voltage__container">
                  <div className="voltage__heading"><h1>Voltage</h1></div>
                  <input type="number" value={vp1} onChange={(e)=>setVp1(e.target.value)} placeholder="Phase R Magnitude" />
                  <br/>
                  <br/>
                  <input type="number" value={vp2} onChange={(e)=>setVp2(e.target.value)} placeholder="Phase Y Magnitude" />
                  <br/>
                  <br/>
                  <input type="number" value={vp3} onChange={(e)=>setVp3(e.target.value)} placeholder="Phase B Magnitude" />
                  <br/>
                  <br/>
                  <input type="number" value={va1} onChange={(e)=>setVa1(e.target.value)} placeholder="Phase R Angle" />
                  <br/>
                  <br/>
                  <input type="number" value={va2} onChange={(e)=>setVa2(e.target.value)} placeholder="Phase Y Angle" />
                  <br/>
                  <br/>
                  <input type="number" value={va3} onChange={(e)=>setVa3(e.target.value)} placeholder="Phase B Angle" />
                  <br/>
                  <br/>
                </div>

                <div className="sendData__Button">
                  <button onClick={sendData}>Detect Fault</button>
                </div>


                <div className="current__container">
                <div className="current__heading"><h1>Current</h1></div>
                  <input type="number" value={ip1} onChange={(e)=>setIp1(e.target.value)} placeholder="Phase R Magnitude" />
                  <br/>
                  <br/>
                  <input type="number" value={ip2} onChange={(e)=>setIp2(e.target.value)} placeholder="Phase Y Magnitude" />
                  <br/>
                  <br/>
                  <input type="number" value={ip3} onChange={(e)=>setIp3(e.target.value)} placeholder="Phase B Magnitude" />
                  <br/>
                  <br/>
                  <input type="number" value={ia1} onChange={(e)=>setIa1(e.target.value)} placeholder="Phase R Angle" />
                  <br/>
                  <br/>
                  <input type="number" value={ia2} onChange={(e)=>setIa2(e.target.value)} placeholder="Phase Y Angle" />
                  <br/>
                  <br/>
                  <input type="number" value={ia3} onChange={(e)=>setIa3(e.target.value)} placeholder="Phase B Angle" />
                  <br/>
                  <br/>
                  </div>
              </div>
          

        </div>
    )
}

export default SendData
