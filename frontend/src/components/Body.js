import React from 'react'
import {Container} from 'react-bootstrap'
const Body = () => {
    const styleTitle = 
    {
        color: '#fdfde7',
        fontFamily: 'Courgette',
        fontSize: 50,
    }
    return (
        <div>
            <Container>
            <center>
                <h1 style={styleTitle}>Welcome to Sweet Ambition eShop</h1>
            </center>
            </Container>
        </div>
    )
}

export default Body
