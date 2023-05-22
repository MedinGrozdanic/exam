import {React, useState , useEffect, Fragment} from 'react';
import axios from 'axios';
import JournalistRemover from './JournalistRemover.js'

export default function JournalistLists() {
  const [journalist, setJournalist]  = useState([]);


  const deleteJournalist = (id) => {
    console.log("Deleting journalist with id " + id);
    let journalistCpy = [...journalist];
    let indexToDelete = -1;
    for(let i = 0; i < journalistCpy.length; i++) {
        if(journalistCpy[i].id === id) {
            indexToDelete = i;
            break;
        }
    }
    console.log(indexToDelete);
    if(indexToDelete >= 0) {
        journalistCpy.splice(indexToDelete, 1);
        setJournalist(journalistCpy);
    }
}


  useEffect(() =>{
    axios.get(`https://localhost:7208/api/authors`) 
    .then(res =>{
        const journalist = res.data;
        
        setJournalist(journalist)});
  }, []);
  
  return(
    <Fragment>
          <h2>Journlister</h2>
          <div className="Underline"></div>
        <div className="ShowJournalists">
         {journalist.map((journalist) => {
           console.log(journalist);
           return <div key={journalist.id} className="Journalist">{journalist.firstName}
        
        <JournalistRemover journalistId={journalist.id} deleteJournalist={deleteJournalist}/>

         </div>
         })}
         
         </div>
     </Fragment>
     
     
     
     )
}