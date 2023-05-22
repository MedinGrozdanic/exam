import {React, useState , useEffect, Fragment} from 'react';
import axios from 'axios';
import ArticleRemover from './ArticleRemover.js';
import { Link } from "react-router-dom";




export default function ArticleList(){
    const [articles, setArticles]  = useState([]);
    
   const deleteArticle = (id) => {
        console.log("Deleting article with id " + id);
        let articlesCpy = [...articles];
        let indexToDelete = -1;
        for(let i = 0; i < articlesCpy.length; i++) {
            if(articlesCpy[i].id === id) {
                indexToDelete = i;
                break;
            }
        }
        console.log(indexToDelete);
        if(indexToDelete >= 0) {
            articlesCpy.splice(indexToDelete, 1);
            setArticles(articlesCpy);
        }
    }

    useEffect(() =>{
      axios.get(`https://localhost:7208/api/Articles`) 
      .then(res =>{
          const articles = res.data;
          
          setArticles(articles)});
    }, []);

    return(
       <Fragment>
               <h2>Artiklar</h2>
               <div className="Underline"></div>
               <button className="CreateNewArticle" id="createarticlebutton"><Link to="New">Skapa</Link>
               </button>
               <div className="ShowArticles">
                {articles.map((articles) => {
                console.log(articles);
             return <div key={articles.id} className="Articles">{articles.title}
             
             
             <ArticleRemover articleId={articles.id} deleteArticle={deleteArticle}/>
            </div>
            })}
            
            

            </div>
        </Fragment>
        

        
    )
}



