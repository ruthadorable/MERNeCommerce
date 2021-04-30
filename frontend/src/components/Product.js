import React from 'react'

const Product = ({product}) => {
    const styleTitle = {
        fontSize: 44, 
        textAlign: "center",
        paddingTop: "100px",
        fontFamily: 'Indie Flower'
    }
    const styleDescription={
        fontSize: 24,
        textAlign: "center",
        paddingTop: "100px",
        fontFamily: 'Indie Flower'

}
    return (
        <div>
            <center>
            <h2 style={styleTitle}><u>{product.name}</u></h2>
            <br/>
            <br/><div class=" col-lg-8 mx-auto d-flex justify-content-around my-2 sortBtn flex-wrap">
                <img src={product.image} class="img-fluid" alt="Responsive image"/>
                </div>
            <br/>
            <div class=" col-lg-8 mx-auto d-flex justify-content-around my-2 sortBtn flex-wrap">
            <p style={styleDescription}>{product.description}</p>
            </div>
            </center>
            
        </div>
    )
}

export default Product
