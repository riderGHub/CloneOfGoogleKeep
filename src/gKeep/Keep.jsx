import React, { useState } from "react";


const Keep=(props)=>{

   const [data,setdata]=useState({title:'',content:''});
   
   
   const input=(e)=>{
       e.preventDefault();
   const {name,value} =e.target;
   setdata(
        (olddata)=>{
            return({
                ...olddata,
                [name]:value
            })
        }
    )
    console.log(data);
   }
  
   const btnMClicked=()=>{
       if(data.title=="" && data.content=="")return;
       
    props.Add(data);
    setdata({title:"",content:""});
   }


    return(
        <>
           <div className="main_div">

           <div className="inputfield">
              
               <input
               className="title"
                type="text"
                onChange={input}
                value={data.title}
                name="title"
                placeholder="Title"
                  />
                
                  <br/>
               <textarea
               className="content"
               rows="5"
               type="text"
               onChange={input}
               value={data.content}
               name="content"
               placeholder="write here ..."

               />
           </div>
               {/* <button className="btnM" onClick={btnMClicked}> */}
               <props.adbtn className="btnM" onClick={btnMClicked}/>
                {/* </button> */}

           </div>
        </>

    )
}

export default Keep;