import { useState } from "react";

const Card = ({task}) => {
    const [check , setCheck]= useState(false)
  return (
    <>
    
      <div key={task.id} className="card" style={{backgroundColor : check ? '#abffab ' : 'white'}} onClick={()=> setCheck(!check)}>
        <h1 style={{textDecoration : check ?'line-through' : 'none' }} >{task.title}</h1>
        <p>{task.description}</p>
      </div>
    </>
  );
};

export default Card;
