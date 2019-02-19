function App(props){

    const productDetails = props.products.map((product, index)=>{
        return <ProductDetail key={index} product={product} />
    });

    return( <div className="App">
        <Header numberOfItemsInCart = {props.numberOfItemsInCart}/>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <p className="lead">Shop Name</p>
                        <div className="list-group">
                            <a href="#" className="list-group-item">Category 1</a>
                            <a href="#" className="list-group-item">Category 2</a>
                            <a href="#" className="list-group-item">Category 3</a>
                        </div>
                </div>

                    <div className="col-md-9">
                    <Carousel/>
                        <div className="row"> 
                            {productDetails}
                        </div>
                    </div>
            </div>

        </div>
  
            <div className="container">
                <hr/>
                <Footer/>
            </div>
     </div>
    )
}