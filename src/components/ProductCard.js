function ProductCard(props){

    const imgUrl = props.url;
    const name = props.name;
    const price = props.price;
    const discount = props.discount;
    const newPrice = price * discount;


    return (
        <div className="pro-container">
            <div className="pro-img">
                <img src={require(imgUrl)} />
            </div>

            <div className="pro-info">
                <h3 className="pro-name">
                    <a>{name}</a>
                </h3>

                <div className="pro-content-price">
                    <p className="pro-price">{newPrice}</p>
                    <p className="pro-price-del">{price}</p>
                </div>

            </div>
        </div>
    )
}

export default ProductCard;