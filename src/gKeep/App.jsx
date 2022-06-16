import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Keep from './Keep'
import Listed from './Listed'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./index.css";



const App = ()=>{

    const [list,setlist]=useState([]);
    const Ad=(data)=>{
        setlist([...list,data]);    
        console.log(list)    ;
    }
    
    const DelKeep=(id)=>{

        setlist(
            (olddata)=>{
                return(
                    olddata.filter((arr,indx)=>
                    {return id!==indx}
                    )
                )
            }
        )

    }

    return (
        <>
          <Header />
          <Keep 
           Add={Ad}
           adbtn={AddCircleIcon}
          />
          <div className='listed'>
          {
              list.map((arr,indx)=>{
                 return ( <Listed 
                  key={indx}
                  id={indx}
                    ele={arr}
                    DeleteF={DelKeep}
                  />)
              })
          
          }
          </div>
          <Footer />
        </>
    )
}
export default App;