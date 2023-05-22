import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, 
Routes,
Route,
} from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ArticleList from './Components/Articles.js';
import JournalistLists from './Components/Journalists.js';
import Images from './Components/Images.js';
import ArticleRemover from './Components/ArticleRemover';
import JournalistRemover from './Components/JournalistRemover.js';
import CreateArticle from './Components/CreateArticle.js';


const baseUrl = "Admin";
const rootElement = document.getElementById('root');

ReactDOM.render(
 <React.StrictMode>
  <BrowserRouter basename={baseUrl}>
   <Routes>
    <Route path="/" element={<App />}>
      <Route path="Articles" element={<ArticleList />}>
        <Route path=":articleid" element={<ArticleRemover />} />
      </Route>
      <Route path="Articles/New" element={<CreateArticle />} />
      <Route path="journalists" element={<JournalistLists />} />
      <Route path="authorid" element={<JournalistRemover/>} />
      <Route path="Images" element={<Images />} />
      </Route>
      <Route
      path="*"
      element={
        <main> 
          <p>There's nothing here!</p>
        </main>
      }
    />
    <Route/>
   </Routes>
  </BrowserRouter>
</React.StrictMode>, 
rootElement
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
