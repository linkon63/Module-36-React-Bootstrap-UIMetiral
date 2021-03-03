import React, { useEffect, useState } from 'react';
import News from '../News';
import axios from 'axios';
const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    // useEffect(()=>{
    //     const url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-03-03&sortBy=popularity&apiKey=110e22f8c889469d93588da2122fe5d2';
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setArticles(data.articles))
    // },[]);

    useEffect(()=>{
        const url = 'https://newsapi.org/v2/everything?q=Apple&from=2021-03-03&sortBy=popularity&apiKey=110e22f8c889469d93588da2122fe5d2';
        axios(url)   
        .then(data => setArticles(data.data.articles))
    },[]);
    return (
        <div>
            <h1>Top Headlines : {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;