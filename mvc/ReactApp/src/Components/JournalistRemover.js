import React from 'react';
import axios from 'axios';

export default function JournalistRemover({authorId, deleteJournalist}) {

  const handleSubmit = authorId => {
    axios.delete(`https://localhost:7208/api/authors/${authorId}`)
      .then(res => {
          if(res.status === 200)
          {
              deleteJournalist(authorId);
          }
        console.log(res);
        console.log(res.data);
      })
  }

    return (
      <div className="DeleteJournalist">
          <button onClick={() => handleSubmit(authorId)}>Delete</button>
      </div>
    )
 
    
}