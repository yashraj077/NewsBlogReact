import React from 'react'
import { Link } from "react-router-dom";

export default function Categories() {

    return (
        <div className="container">
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 link-secondary" to="/world">World</Link>
                    <Link className="p-2 link-secondary" to="/sport">Sports</Link>
                    <Link className="p-2 link-secondary" to="/technology">Technology</Link>
                    <Link className="p-2 link-secondary" to="/design">Design</Link>
                    <Link className="p-2 link-secondary" to="/culture">Culture</Link>
                    <Link className="p-2 link-secondary" to="/business">Business</Link>
                    <Link className="p-2 link-secondary" to="/politics">Politics</Link>
                    <Link className="p-2 link-secondary" to="/opinion">Opinion</Link>
                    <Link className="p-2 link-secondary" to="/science">Science</Link>
                    <Link className="p-2 link-secondary" to="/health">Health</Link>
                    <Link className="p-2 link-secondary" to="/style">Style</Link>
                    <Link className="p-2 link-secondary" to="/travel">Travel</Link>
                </nav>
            </div>
        </div>
    )
}
