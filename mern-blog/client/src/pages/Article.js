import React, { useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import  articleContent  from "../data/Articledata"
import Articles from "../components/Articles";
import Notfound from "./Notfound";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";

const Article = () => {
    const { name } = useParams();
    const article = articleContent.find((articles)=> articles.title === name)
    const [articleInfo, setArticleInfo] = useState({comments: []})

    useEffect(()=> {
        const fetchData = async ()=>{
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if(!article) return <Notfound/>
    const otherArticles = articleContent.filter((article)=> article.title !== name)
    return(
        <div>
            <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
                { article.title }
            </h1>
            { article.content.map((paragraph, index) => (
                <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
                    { paragraph }
                </p>
            ))}
            <CommentsList comments={articleInfo.comments}/>
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
            <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
                Other Articles
            </h1>
            <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticles}/>
            </div>
        </div>
    )
}
export default Article