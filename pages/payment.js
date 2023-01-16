
import { OrderFoodStore } from '../userStore';

const payment = () => {
    const { product, setProduct } = OrderFoodStore.useContainer();
    console.log(product);
    return (
        <div>
            <h1>This is payment section that is under construction.</h1>
        </div>
    );
};

export default payment;