import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import API from "../services/api";

function Checkout() {

    const navigate = useNavigate();

    const { cart, clearCart } = useContext(CartContext);

    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        customerName: "",
        phone: "",
        email: user?.email || "",
        address: "",
        city: "",
        state: ""
    });

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const deliveryFee = 2000;

    const total = subtotal + deliveryFee;

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setLoading(true);

            const res = await API.post("/orders", {

                ...formData,

                items: cart,

                subtotal,

                deliveryFee,

                total

            });

            clearCart();

            navigate( `/payment/${res.data._id}`);

        } catch (err) {

            alert(err.response?.data?.message || "Unable to create order");

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="checkout">

            <h2>Checkout</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="customerName"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                />

                <input
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    required
                />

                <input
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="address"
                    placeholder="Delivery Address"
                    onChange={handleChange}
                    required
                />

                <input
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    required
                />

                <input
                    name="state"
                    placeholder="State"
                    onChange={handleChange}
                    required
                />

                <hr />

                <h3>Order Summary</h3>

                {cart.map(item => (

                    <div key={item._id}>

                        {item.name} × {item.quantity}

                        ₦{(item.price * item.quantity).toLocaleString()}

                    </div>

                ))}

                <hr />

                <p>Subtotal: ₦{subtotal.toLocaleString()}</p>

                <p>Delivery: ₦{deliveryFee.toLocaleString()}</p>

                <h2>Total: ₦{total.toLocaleString()}</h2>

                <button disabled={loading}>

                    { loading ? "Placing Order..." : "Place Order" }

                </button>

            </form>

        </div>

    );

}

export default Checkout;