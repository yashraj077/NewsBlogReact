import React from 'react'

export default function Footer() {

    let footercss = {
        position: "fixed",
        left: "0px",
        right: "0px",
        bottom: "0px",
        width: "100%",
    }
    return (
        <>
            <div className="container mt-auto py-3 bg-dark" style={footercss}>
                <div className="container text-center">
                    <span className="text-muted">News Blog App Copyright &copy; 2021</span> <br />
                    <span className="text-muted">Developer: YASHRAJ DIGHE</span>
                </div>
            </div>
        </>
    )
}
