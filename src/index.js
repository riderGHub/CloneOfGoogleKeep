////////////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <h1>Hello world</h1>
//     <App />
//     {/* <App /> */}
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//////////////////////////////////////
// var React = require('react');
// var ReactDOM=require('react-dom');

// ReactDOM.render(
// <>
// <h1>Thapa Technical Netflix Pick </h1>
// <p>
//     List of 5 Best Series</p>
//     <ol>
//     <li> Mirzapur</li>
//     <li> The Family Man</li>
//     <li> Asur</li>
//     <li> Money Hiest</li>
//     <li> Squid Game</li></ol>

// </>
// ,
// document.getElementById('root'));

////////////////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom';

// var date =new Date();
// var today=date.getDate();
// var month=date.getMonth();
// if(month<10)month="0"+month;
// var year=date.getFullYear();
// var hour=date.getHours() ;
// var min=date.getMinutes();
// var period="AM";
// if(hour>12){hour=hour%12;period="PM";}

// ReactDOM.render(<>
//   <h1>Hello my name is Sumit patel</h1>
//   <p>{`Today's date is ${today}/${month}/${year} `}</p>
//   <p>{`Current time id ${hour}:${min} ${period}`}</p>
// </>,
// document.getElementById("root"));
//////////////////////////////////////////
/*
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

var wish="";
var date=new Date();
var hour=date.getHours();
var wishes="Good";
// hour=8;
if(hour<12 && hour>4){wishes="Good Morning";
 wish={
    color:'darkyellow'
};}
else if(hour<15&& hour>4){wishes="Good Afternooon"; wish={
    color:'yellowgreen'
};}
else if(hour<20&& hour>4){wishes="Good Evening";
 wish={
    color:'brown'
};}
else {wishes="Good Night";
 wish={
    color:'black'
};}

const head={
    color:'yellow',
    width: '400px',
    background:'white',
    textAlign:'center',
    borderRadius:'10px'    
}


ReactDOM.render(
    <div class="box">
    <h1 class="head" style={head}>Hello SIR,<span class="wish" style={wish}>{wishes}</span></h1>  
    </div>
    ,
    document.getElementById("root")
);
*/
////////////////////////////////


// //////////// Using hooks ///////////////

// import React,{useState} from 'react';
// import ReactDOM  from 'react-dom';
// import "./index.css";

// const Ap=()=>{
// const State=useState();
// const [count,setcount]=useState(0);
// const IncNum= ()=>{
//     setcount(count+1);
// };

// const DecNum=()=>{
//     if(count)setcount(count-1);
// };

// document.addEventListener("keypress",function(val){
//     if(val==72){IncNum();}
//     else if(val==80){DecNum();}
// });
// return(
//     <>
//     <div className='counter'>
//       <div class="count">{count}</div>
//       <button className='up' onClick={IncNum}>Up</button>
//       <button className='down' onClick={DecNum}>Down</button>
//       </div>
//   </>
// );
// };



// ReactDOM.render(
//   <Ap/>
//     ,document.getElementById('root')
// );
//////////////// updating time using hooks//////

// import React,{useState} from 'react';
// import ReactDOM  from 'react-dom';
// import "./index.css";

// const Ap=()=>{
// const State=useState();
// let time=new Date();
// const [count,setcount]=useState(time.toLocaleTimeString());
// const IncNum= ()=>{
//     let newT=new Date();
//     setcount(newT.toLocaleTimeString());
// };


// return(
//     <>
//     <div className='counter'>
//       <div class="count">{count}</div>
//       <button className='up' onClick={IncNum}>Update time</button>
//       </div>
//   </>
// );
// };



// ReactDOM.render(
//   <Ap/>
//     ,document.getElementById('root')
// );

///////////////////////////////////
/*
import React,{useState} from 'react';
import ReactDOM  from 'react-dom';
import "./index.css";

const Ap=()=>{
const State=useState();
let time=new Date();
const [count,setcount]=useState(time.toLocaleTimeString());
const IncNum= ()=>{
    let newT=new Date();
    setcount(newT.toLocaleTimeString());
};

 setInterval(IncNum,1000);
return(
    <>
    <div className='counter'>
      <div class="count">{count}</div>
      </div>
  </>
);
};



ReactDOM.render(
  <Ap/>
    ,document.getElementById('root')
);
*/
//////////////////////////////////////////
/*
import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App= ()=>{
     const State=useState();
     const [Name,setname]=useState();
     const [fullName,setfull]=useState();

     const showOutput=(event)=>{
         console.log(event.target.value)
         setname(event.target.value);
     };
    const sub=()=>{
    setfull(Name);
    };

    return(
        <>
            <div className='counter'>
               <div className='count'>Hello {fullName}</div>
               <input type="text" placeholder="Enter your Name"
                onChange={showOutput} 
                value={Name} /><br/>
               <button onClick={sub}>Submit</button>
            </div>

        </>
    )
}

ReactDOM.render(
       <App/>
    ,
    document.getElementById('root')
);
*/
//////////////////////////////////

// import React,{useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const App= ()=>{
//      const State=useState();
//      const [Name,setname]=useState();
//      const [fullName,setfull]=useState();
//      const showOutput=(event)=>{
//          console.log(event.target.value)
//          setname(event.target.value);
//      };
//     const sub=(event)=>{
//     event.preventDefault();
//     setfull(Name);
//     };

//     return(
//         <>
//             <div className='counter'>
//                <form onSubmit={sub}>
//                <div className='count'>Hello {fullName}</div>
//                <input type="text" placeholder="Enter your Name"
//                 onChange={showOutput} 
//                 value={Name} /><br/>
//                <button type='submit'>Submit</button>
//                </form>
//             </div>
//         </>
//     )
// }
// ReactDOM.render(
//        <App/>
//     ,
//     document.getElementById('root')
// );

//////////////////////////////////////
/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App=()=>{
      const State=useState();
      const [fn,setf]=useState();
      const [ln,setl]=useState();
      const [id,setid]=useState();
      const [fname,setfname]=useState();
      const [lname,setlname]=useState();
      const [mail,setmail]=useState();

      const FirstN=(e)=>{
          setf(e.target.value);
      }
      const LastN=(e)=>{
          setl(e.target.value);
      }
      const Mailid=(e)=>{
          setid(e.target.value);
      }

    const sub=(e)=>{
        e.preventDefault();
        setfname(fn);
        setlname(ln);
        setmail(id);
      }

    return(
        <>
            <div className='counter'>
               <form onSubmit={sub}>
                  <div className='count'>Hello {fname} {lname}</div>
                  <div className='mail'>
                      {mail}
                  </div>
                  <input
                  type='text'
                  placeholder='Enter your first name'
                  onChange={FirstN}
                  value={fn}
                  /><br/>
                  <input
                  type='text'
                  placeholder='Enter your last name'
                  onChange={LastN}
                  value={ln}
                  /><br/>
                  <input
                  type='email'
                  placeholder='Enter your mail id'
                  onChange={Mailid}
                  value={id}
                  />
                    <br/>
                  <button type='submit'>Submit</button>

               </form>
            </div>
        </>
    );
};

ReactDOM.render(
   <App/>
    ,
    document.getElementById('root')
);

*///////////////////////




/*
//[Cardshow] showing top netflix shows/////////////////////////////////////////////
import React from 'react'
import ReactDom from 'react-dom'
import App from './Cardshow/App'  
ReactDom.render(<App />,document.getElementById('root'));
///////////////////////////////////////////////////////////////////////////////////
*/

/*
//[todolistsbasic] toDolists Basic///////////////////////////////////////////////////////
import React from 'react'
import ReactDom from 'react-dom'
import App from './todolistsbasic/App'  
ReactDom.render(<App />,document.getElementById('root'));
*/
/////////////////////////////////////////////////////////////////////////////////////////





/*
//[todolistsCutLine] toDolists using cut-lines////////////////////////////////////////////
import React from 'react'
import ReactDom from 'react-dom'
import App from './todolistsCutLine/App'  

ReactDom.render(<App />,document.getElementById('root'));
*/
//////////////////////////////////////////////////////////////////////////////////////////

/*
// [QnA] poping Question and answer on user demand/////////////////////////////////////////
import React from 'react'
import ReactDom from 'react-dom'
import App from './QnA/App'  

ReactDom.render(<App />,document.getElementById('root'));
*/
//////////////////////////////////////////////////////////////////////////////////////////

///[gKeep] cloning to google keep/////////////////////////////////////////////////////////

import React from 'react'
import ReactDom from 'react-dom'
import App from './gKeep/App'
ReactDom.render(<App />,document.getElementById('root'));

//////////////////////////////////////////////////////////


////[ReactRouter]/////////////////////////
/*
import React from 'react'
import ReactDOM from 'react-dom'
import App from './Navbar/App'

ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
    );
*/
   /////////////////////////////////////////////////
   
   //[practice]///////////////
  /*
   import React from 'react'
   import ReactDom from 'react-dom'
   import App from './practice/App'
   import {BrowserRouter} from 'react-router-dom'
   import './practice/index.css'
   ReactDom.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
   ,document.getElementById('root'));
  */
   ///////////////////////////////////////////////
   
   ///[Hooks]///////////////////////////////
/*
    import React from 'react'
    import ReactDom from 'react-dom'
    import App from './Hooks/App'
    import {BrowserRouter} from 'react-router-dom'
    // import './practice/index.css'
    ReactDom.render(
     <BrowserRouter>
     <App />
     </BrowserRouter>
    ,document.getElementById('root'));
  */ 
////////////////////////////////////////////////

///[LiveSearchImg]///////////////////////////////
/*
    import React from 'react'
    import ReactDom from 'react-dom/client'
    import App from './LiveSearchImg/App'
    import {BrowserRouter} from 'react-router-dom'
    import './LiveSearchImg/index.css'
    const root=ReactDom.createRoot(document.getElementById('root'));

     root.render(
     <BrowserRouter>
      <App />
     </BrowserRouter>)
    // ReactDom.render(
    //  <BrowserRouter>
    //  <App />
    //  </BrowserRouter>
    // ,document.getElementById('root'));
  */ 
////////////////////////////////////////////////