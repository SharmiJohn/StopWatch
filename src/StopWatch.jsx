import React ,{useEffect,useState}from 'react'

function StopWatch() {
    const[timer,settimer]=useState(false);
    const[minute,setminute]=useState(0);
    const[sec,setsec]=useState(0);
    const handleReset=()=>{
        settimer(false);
        setminute(0);
        setsec(0);
    }
    const handleClick=()=>{
        settimer((prev)=>!prev)
    }
    useEffect(()=>{
        let intervalId;
        if(timer===true){
            intervalId=setInterval(()=>{
                if(sec>58){
                  setminute((prev)=>prev+1);
                  setsec(0);
                }
                else{
                    setsec((prev)=>prev+1);
                }
            },1000)
           
        }
        console.log(intervalId)
        return()=>{
            clearInterval(intervalId)
        }
    },[timer,sec])
  return (
    <div><h2>Stopwatch</h2>
    <p>Time: {minute}:{sec>9?(sec):("0"+sec)}</p>
    <button onClick={()=>handleClick()}>{timer?"Stop":"Start"}</button>
    <button onClick={()=>handleReset()}>Reset</button></div>
  )
}

export default StopWatch