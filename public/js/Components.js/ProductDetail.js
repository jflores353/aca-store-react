function ProductDetail (props) {

    let starRating= [];
    for(let  i = 0; i < props.product.rating; i ++){
        starRating.push(<span key={i} className="glypicon glyphicon-star"></span>);
    }
    
    let emptyStars = [];
    for(let i = 0; 5 - props.product.rating ; i ++){
        emptyStars.push(<span key={i} className="glypicon glyphicon-star-empty"></span>)
    }

    return( <div className="col-sm-4 col-lg-4 col-md-4">
    <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt=""/>
        <div className="caption">
            <h4 className="pull-right">{props.product.price}</h4>
            <h4><a href="#">{props.product.name}</a>
            </h4>
            <p>{props.product.description}<a target="_blank" href="http://www.bootsnipp.com">{props.product.stars}</a></p>
        </div>

            <div className="ratings">
                <p className="pull-right">{props.product.reviews}</p>
                <p>
                    {starRating}
                    {emptyStars}
                </p>
            </div>
                <button onClick={(event)=>{
                    props.addToCart(props.product);
                }}>Add To Cart</button>
        </div>
    </div>
    )
}