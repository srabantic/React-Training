import Proptypes from 'prop-types'
import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <h1>Game Lobby</h1>
        </header>
    )
}
Header.defaultProps = {
    title: 'Game Lobby'
}
Header.propTypes = {
    title: Proptypes.string,
}

export default Header
