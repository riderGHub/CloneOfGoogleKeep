 import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Listed=(props)=>{

   const del=()=>{
       props.DeleteF(props.id);
   }
    return(
        <>
        <div className="listchild">
           <h2>{props.ele.title}</h2>
           <p>{props.ele.content}</p>
           <DeleteOutlineIcon className="btnC" onClick={del} /> 
        </div>

        </>
    )
}

export default Listed;