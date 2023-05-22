import axios from "axios";
import {useEffect, useState} from "react"


export default function CreateArticle(){
    const[authors, setAuthor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7208/api/Authors')
        .then((response) => {
            let authors = response.data;
            setAuthor(authors)
        });
    },[])

    var selectAuthor = document.getElementById("authorArray");
    for (let i = 0; i < authors.length; i++) {
        let authorOpt = authors[i];
        let val = document.createElement("option");
        val.textContent = authorOpt.id;
        val.value = authorOpt;
        selectAuthor.appendChild(val);
    }


    const [imageName, setImageName] = useState([]);
    const [articleImage, SetArticleImage] = useState("");

    useEffect(() => {
        axios.get('https://localhost:7208/api/images')
        .then((response) => {
            let imageName = response.data;
            setImageName(imageName)
        });
    },[])

    var selectImage = document.createElement("imageArray");
    for (let i = 0; i < imageName.length; i++) {
        let imageOpt = imageName[i];
        let imageVal = document.createElement("imageOption")
        imageVal.textContent = imageOpt;
        imageVal.value = imageOpt;
        selectImage.appendChild(imageVal) 
    }


    return(
        <div className="create-Article">
            <h1>Skriv Artikel</h1>
            <form>
                <label>
                    Titel 
                    <input type="text" name="Title" />
                </label>
                <label>
                    Författare
                    <select
                    id="authorArray"
                    name="pickAuthor"
                    value={authors} onChange={(e) => SetArticleImage(e.target.value)} />
                </label>
                <label>
                    Artikel bild
                    <select 
                    id="imageArray"
                    name="pickImage"
                    value={imageName} onChange={(e) => SetArticleImage(e.target.value)} />
                </label>
                <label>
                    Ingress 
                    <textarea type="text" name="Ingress" />
                </label>
            </form>

        </div>
    )
}