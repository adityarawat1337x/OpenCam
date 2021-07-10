import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
    background-color:rgb(34, 34, 34);
    width:100vw;
    height:7vh;
    display:flex;
    align-item:center;
    justify-content:center;
    @media (max-width: 768px) {
    height: 5vh;
    font-size:14px;
  }
    `
const Header = () => {
    return (
        <Head>
            <h1 style={{ backgroundColor: 'transparent', marginTop: "5px" }}>Ping</h1>
        </Head>
    )
}

export default Header
