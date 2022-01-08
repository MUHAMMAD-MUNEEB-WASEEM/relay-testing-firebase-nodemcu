import { useEffect, useState } from "react"
import firebase from "../../firebase"

import './GetData.css';


function GetData() {

     const [getList, setGetList] = useState();

     //For multiple values

    // useEffect( ()=>{
    //     const getDataRef = firebase.database().ref('test');
    //      getDataRef.on('value', (snapshot)=>{
    //         console.log(snapshot.val())

    //         const getData = snapshot.val();
            
            
    //         const getList = []

    //         for (let id in getData) {
    //             getList.push(getData[id])
    //         }
            
    //         // getList.push(getData);
            
    //         setGetList(getList);

    //     })
    // },[])

    // console.log(getList[0].float)
    // console.log(getList[0].int)


    //GEtting String

    const [string, setString] = useState("");

     useEffect( ()=>{
        const getDataRef = firebase.database().ref('test/current/str');
         getDataRef.on('value', (snapshot)=>{
            console.log(snapshot.val())

            setString(snapshot.val());
            

        })
    },[])

    console.log(string);

    return (
       
            <div className="getData">
            
            

                {/* {getList != null ? (
                
                <>
                     {getList .map((data, index)=>(
                            <>
                        {getList.length > 0 && (
                            <div>
                            <h3>float: {getList[0].float}</h3>
                            <h3>Int: {getList[0].int}</h3> 
                        </div>
                        )}
                        </> 
                        ))} 
                
                </>):(<div>Please Enter Data Above</div>)} */}

                {/* <h1>{string}</h1> */}
                <div className="getData__heading"><h1>Double Line To Ground Fault</h1></div>
                
                   
        </div>
      
    )
}

export default GetData