import { useDispatch } from "react-redux";

// store
import {
    decrementItemCount,
    incrementItemCount,
} from "../../store/slices/shoppingSlice";

/* eslint-disable react/prop-types */
function Shop({ shop }) {
    const dispatch = useDispatch();

    const { thumbnail, title, price, count } = shop;

    return (
        <>
            <div className="cart-item">
                <div className="image">
                    <img src={`${thumbnail}`} alt={`${title}`} />
                </div>

                <div className="content">
                    <div>
                        <h2 className="title">{title}</h2>

                        <p className="price">
                            <strong>Price: </strong>
                            <span>&pound;{price}</span>
                        </p>
                    </div>

                    <div className="buttons">
                        <button
                            onClick={() => dispatch(decrementItemCount(shop))}
                        >
                            -
                        </button>

                        <p className="count">
                            <strong>{count}</strong>
                        </p>

                        <button
                            onClick={() => dispatch(incrementItemCount(shop))}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
