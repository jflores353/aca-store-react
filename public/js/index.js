function render(){
ReactDOM.render(
    <App
        addToCart = {addItemToCart}
        cart = {shoppingCart}
        numberOfItemsInCart = {state.numberOfItemsInCart}
        products={state.products}
    />,
    document.getElementById("root")); 
}
render();
function addItemToCart(product){
    state.shoppingCart.push(product);
    render();
}