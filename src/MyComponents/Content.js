import React, { useState, useEffect } from 'react';
import BlogItems from './BlogItems'
import Loading from './Loading';
import SearchBar from './SearchBar';

export default function Content(props) {
    let c = props.choice;

    const change_choice = () => {
        var data = document.getElementById("query").value;
        console.log("data"+data);
        setUrl("https://free-news.p.rapidapi.com/v1/search?q=" + data + "&lang=en&page=1&page_size=25");
        call_api();
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [content, setContent] = useState([]);
    const [choice] = useState(c);

    const [url, setUrl] = useState("https://free-news.p.rapidapi.com/v1/search?q=" + choice + "&lang=en&page=1&page_size=25");

    function call_api() {
        return fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "1c69c52044mshe6f2a85c29a538cp1d5907jsn2d22947c9780",
                "x-rapidapi-host": "free-news.p.rapidapi.com"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setContent(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        call_api();
    }, [url]);

    if (error) {
        return (
            <h1>Error: {error.message}</h1>
        );
    }
    else if (!isLoaded) {
        return (
            <Loading />
        );
    }
    else {
        return (
            <div className="container mt-5 mb-5 pb-5">
                {/* <input id="query" onChange={() => change_choice()} className="form-control form-control-dark w-100 text-center" type="text" placeholder="Search" aria-label="Search"></input> */}
                <SearchBar />
                {content.articles ? content.articles.map(blog => (
                    <BlogItems key={blog._id} blog={blog} />
                )) : <h2>No Content</h2>}
            </div>
        );
    }
}
