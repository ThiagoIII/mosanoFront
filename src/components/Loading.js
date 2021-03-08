import React from 'react'

const Loading = ({ setLoading }) => {
    setTimeout(() => {
        setLoading(false)
    }, 1300)

    return (
        <>
            <p id="loading"> M O S A N O </p>
        </>
    )
}

export default Loading
