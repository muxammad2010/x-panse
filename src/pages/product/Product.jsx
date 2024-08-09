import "./Product.css"
const Product = () => {
    return (
        <section className="container Product">
            <div className="Product1">
                <h1>The Product we work with.</h1>
                <p>Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.</p>
            </div>
            <div className="Product2">
                <div className="product">
                    <img src="./src/assets/product.png" alt="" />
                    <h3>Cross platform</h3>
                    <p>Elit esse cillum dolore eu fugiat nulla
                        <br />
                        pariatur</p>
                </div>
                <div className="product">
                    <img src="./src/assets/product1.png" alt="" />
                    <h3>Cloud server</h3>
                    <p>Elit esse cillum dolore eu fugiat nulla
                        <br />
                        pariatur</p>
                </div>
                <div className="product">
                    <img src="./src/assets/product2.png" alt="" />
                    <h3>Pure Javascript</h3>
                    <p>Elit esse cillum dolore eu fugiat nulla
                        <br />
                        pariatur</p>
                </div>
            </div>
        </section>
    )
}

export default Product