import React from 'react';
import axios from 'axios';

export default function ArticleRemover({articleId, deleteArticle}){

  const handleSubmit = articleId => {
    axios.delete(`https://localhost:7208/api/Articles/${articleId}`)
      .then(res => {
          if(res.status === 200)
          {
              deleteArticle(articleId);
          }
        console.log(res);
        console.log(res.data);
      })
  }

    return (
      <div className="DeleteArticle">
          <button onClick={() => handleSubmit(articleId)}>Delete</button>
      </div>
    )
 
    
}