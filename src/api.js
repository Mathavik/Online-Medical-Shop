// using Fetch method

import React, { useState,useEffect } from "react";
import{MDBDataTable} from 'mdbreact';

import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// import { Loader } from 'rsuite';
 
function Api(){
 
 const[data,setData]=useState([]);
 const [isLoading, setIsLoading] = useState(false);
    

useEffect(()=>{
     setIsLoading(true);
    fetch("https://catfact.ninja/facts")
    .then(response=>{response.json()
    .then(
        res => {
        console.log(res.data);
        setData(res.data); 
        setIsLoading(false)           //api array name -> data
        })
    
    })
    
       },[])
       
       const data1 = {
       columns: [
          {
            label: "FACT",
            field: "fact",
            
          },
          {
              label: "LENGTH",
              field: "length",
              
            },
            

            ], 
            rows:data.map((x)=>{  //mapping row
                return{
                fact:x.fact,
                length:x.length,

                }})    
            
        }
          
         

    return(
        <>  
  {isLoading?  <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :
<MDBDataTable striped bordered  hover data={(data1)}/>
}   
        </>
    )
}
export default Api;


// using Axios method


// import React, { useState, useEffect } from "react";
// import { MDBDataTable } from "mdbreact";

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

// import axios from "axios"; // Import axios
 
// function Api() {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get("https://catfact.ninja/facts") // Axios GET request
//       .then((response) => {
//         console.log(response.data.data); // Access API data
//         setData(response.data.data); // Set the data from API
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error); // Handle error
//         setIsLoading(false);
//       });
//   }, []);

//   const data1 = {
//     columns: [
//       {
//         label: "FACT",
//         field: "fact",
//       },
//       {
//         label: "LENGTH",
//         field: "length",
//       },
//     ],
//     rows: data.map((x) => {
//       return {
//         fact: x.fact,
//         length: x.length,
//       };
//     }),
//   };

//   return (
//     <>
//       {isLoading ? (
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       ) : (
//         <MDBDataTable striped bordered hover data={data1} />
//       )}
//     </>
//   );
// }

// export default Api;
