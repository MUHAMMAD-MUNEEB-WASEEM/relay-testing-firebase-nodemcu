import { useEffect, useState } from "react"
import firebase from "../firebase"

function GetData() {

    const [getList, setGetList] = useState();

    useEffect(async ()=>{
        const getDataRef = firebase.database().ref('test');
        await getDataRef.on('value', (snapshot)=>{
            console.log(snapshot.val())

            const getData = snapshot.val();

            const getList = [];

            for (let id in getData) {
                getList.push(getData[id])
            }
            
            // getList.push(getData);
            
            setGetList(getList);

        })
    },[getList])

    console.log(getList)
    return (
       
            <div>
            
             {getList.map((data, index)=>(
                <div key={index}>
                    <h3>float: {data.float}</h3>
                    <h3>Int: {data.int}</h3>
                </div>
            ))} 
        </div>
      
    )
}

export default GetData
