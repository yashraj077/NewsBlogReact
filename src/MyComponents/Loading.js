import React from 'react'

export default function Loading() {

    var loadingcss = {
        width: "3rem",
        height: "3rem"
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" style={loadingcss} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
