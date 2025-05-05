import React, {useEffect, useState} from 'react'
import {useFetch, usePostTitle} from './hooks/useFetch'

function Usefetch() {
    const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts")
  return (
    <div>
        {JSON.stringify(finalData)}
    </div>
  )
}

export default Usefetch