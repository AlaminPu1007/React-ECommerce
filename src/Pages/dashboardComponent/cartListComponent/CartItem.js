import React, { useContext } from "react";
import "../../Css/home.css";
import DemoCollection from "../../../jsonFile/DemoCollection.json";
// import { BsFillCartFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context as AuthContext } from "../../../context/AuthContext";

function CartItem({ id }) {
    const {
        state: { token },
        DeleteCartListContext,
    } = useContext(AuthContext);

    const filterData = DemoCollection
        ? DemoCollection.find((i) => i.id === id)
        : null;
    if (!filterData) {
        return <p>no data is found</p>;
    }
    // Delete from cart list
    const DeleteFormCartList = () => {
        DeleteCartListContext({ id, token });
    };
    return (
        <div className="men-containers">
            <div className="men-container">
                <div className="image-icon">
                    <img
                        src={filterData.image}
                        alt="images"
                        className="men-image-style"
                    />
                    <div className="icon-style">
                        <AiFillDelete
                            color="#487ab1"
                            size={28}
                            className="cart-icon"
                            onClick={DeleteFormCartList}
                        />
                        {/* <MdFavorite
              color="#487ab1"
              size={30}
              className="fav-icon"
            //   onClick={favNotify}
            /> */}
                    </div>
                </div>

                <h3>{filterData.description}</h3>
                <p>Rating: {filterData.rating}</p>
                <p>Price: {filterData.price}</p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Link
                        to={`/shop/${filterData.id}`}
                        className="Button shop-now-button"
                    >
                        Shop now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
