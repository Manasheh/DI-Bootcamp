import React, { useEffect, useState } from 'react'

function Color() {
    const [favoriteColor, setFavoriteColor ] = useState('red')
    console.log(favoriteColor);
    useEffect(() => {
        setFavoriteColor('Yellow')
        // alert('useEffect reached')
    }, [])
    const changeToBlue = () => {
        setFavoriteColor('blue')
    }
  return (
    <div>
        <h1>My favorite color is {favoriteColor}</h1>
        <button onClick={changeToBlue}>ToBlue</button>
    </div>
  )
}

export default Color