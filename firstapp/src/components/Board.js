import React, { useState } from 'react'
import {data} from '../constant/data'

function Board(props) {
  const { category } = props
  const [articles, setArticles] = useState(data.filter((element) => (
    element.category === category
  )))
  return (
    <>
        {articles.map((element) => { 
            return (
              <>
                <h1>{element.title}</h1>
                <p>{element.content}</p>
              </>        
            )
        })}
    </>
    )
}

export default Board