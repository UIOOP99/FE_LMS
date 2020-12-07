import React, { useState } from 'react'
import { profileFetcher, profileUrl } from 'services/api/profile'
import useSWR from 'swr'

const LEARSWR = () => {
    const [filter , setFilter] = useState('tarahi') 
    const {data} = useSWR([profileUrl,filter]  , profileFetcher) /*"/profile + tarahi"*/
    return (
        <div></div>
    )
}

export default LEARSWR
