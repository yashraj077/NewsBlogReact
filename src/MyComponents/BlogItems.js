import React from 'react'

export default function BlogItems(props) {

    return (
        <main className="container mt-2">
            <div className="bg-light p-3 rounded">
                <div className="col-md">
                    <div className="row border border-primary rounded overflow-hidden flex-md-row position-relative">
                        <div className="col p-2 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">{props.blog.topic}</strong>
                            <h3 className="mb-0">{props.blog.title}</h3>
                            <div className="mb-1 text-muted">{props.blog.published_date}</div>
                            <p className="card-text mb-auto">{props.blog.summary ? props.blog.summary.slice(0, 100) : ""}.........</p>
                            <a href={props.blog.link} target="_blank" rel="noreferrer" className="stretched-link">Read Full Article</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src={props.blog.media} className="mx-auto rounded" alt="..." width="180px" height="150px" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}