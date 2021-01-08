import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios'
import { userContext } from '../App'

function DataFetching() {
    // const [posts, setPosts] = useState([])
    const [singleTitle, setTitle] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const user = useContext(userContext)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setTitle(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch post</button>
            <div>{singleTitle.title}</div>
            <div>{user}</div>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching