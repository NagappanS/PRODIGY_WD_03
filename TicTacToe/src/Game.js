import React, { useRef, useState } from 'react'
import './game.css';
import Button from '@mui/material/Button';
import X from './images/Xpng.png';
import O from './images/Opng.png';

let data = ["","","","","","","","",""];

export default function Game() {
     
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let title = useRef(null);
    let box1=useRef(null);
    let box2=useRef(null);
    let box3=useRef(null);
    let box4=useRef(null);
    let box5=useRef(null);
    let box6=useRef(null);
    let box7=useRef(null);
    let box8=useRef(null);
    let box9=useRef(null);
    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
    const toggle =(e,num)=>{
        if(lock){
            return 0;
        }
        if(count%2===0)
        {
            e.target.innerHTML = `<img src = '${X}'>`;
            if(data[num] === "")
            {
            data[num]="x";
            setCount(++count);
            }
        }
        else
        {
            e.target.innerHTML = `<img src = '${O}'>`;
            if(data[num] === "")
            {
            data[num]="o";
            setCount(++count); 
            }
        }
        win(); 
    }
    const win = ()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
        {
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
        {
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
        {
            won(data[6]);
        }
    }
    const won = (winner) =>{
        setLock(true);
        if(winner==="x")
        {
            title.current.innerHTML = `Congrats : <img src = ${X}> wins`;
        }
        else
        {
           title.current.innerHTML= `Congrats : <img src = ${O} > wins`;
        }
    }
    const reset= ()=>{
        setLock(false)
        data = ["","","","","","","","",""];
        title.current.innerHTML='New Game';
        box_array.map((e)=>{
            e.current.innerHTML="";
        })
    }
  return (
    <div className='main'>
        <h1 className='sub1'>Tic Tac Toe</h1>
        <div className='sub2'>
        <div className='r1'>
            <div className='r1c1' ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
            <div className='r1c1'ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
            <div className='r1c1'ref={box3} onClick={(e)=>{toggle(e,2)}}></div> 
        </div>
        <div className='r2'>
            <div className='r1c1' ref={box4}onClick={(e)=>{toggle(e,3)}}></div>
            <div className='r1c1' ref={box5}onClick={(e)=>{toggle(e,4)}}></div>
            <div className='r1c1'ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className='r3'>
            <div className='r1c1'ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
            <div className='r1c1' ref={box8}onClick={(e)=>{toggle(e,7)}}></div>
            <div className='r1c1'ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
        </div>
      <span><Button variant="contained" color="success" onClick={()=>{reset()}}>Restart Game</Button></span>
      <span1><h4 ref={title}>New Game</h4></span1>
    </div>
  )
}
