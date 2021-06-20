import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
    background-color:#191A1A;
    width:100vw;
    height:7vh;
    display:flex;
    align-item:center;
    justify-content:center;
    `
const Header = () => {
    return (
        <Head>
            <h1 style={{ backgroundColor: 'transparent' ,marginTop:"5px"}}>D ing 👋 </h1>
        </Head>
    )
}

export default Header
