const CartFoodPhoto = ({ product }) => {
    return (
        <div>
            <div className="w-full carousel">
                <div id="item1" className="w-full carousel-item">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item2" className="w-full carousel-item">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item3" className="w-full carousel-item">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item4" className="w-full carousel-item">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default CartFoodPhoto;