import styled from '@emotion/styled'
import React from 'react'

//con mayúscula como si fuera un componente (por eso StyledComponent)
const ContenedorHeader = styled.header`

    background-color: black;
    padding: 10px;
    font-weight: bold;
    color: #fff
`

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slave 27px', serif;
    text-align: center;
`

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>            
        </ContenedorHeader>
    )
}

export default Header
