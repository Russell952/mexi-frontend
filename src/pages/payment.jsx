import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";

function Payment() {

    const { id } = useParams();

    const [order, setOrder] = useState(null);

    useEffect(() => {

        async function fetchOrder() {

            const res = await API.get(`/orders/${id}`);

            setOrder(res.data);

        }

        fetchOrder();

    }, [id]);

    async function confirmPayment() {

        await API.patch(`/orders/${id}/payment`);

        alert("Payment submitted successfully.");

    }

    if (!order) return <p>Loading...</p>;

    return (

        <div>

            <h2>Complete Your Payment</h2>

            <h3>₦{order.total.toLocaleString()}</h3>

            <hr />

            <p><strong>Bank:</strong> Opay</p>

            <p><strong>Account Name:</strong> XYZ STORES</p>

            <p><strong>Account Number:</strong> 8123456789</p>

            <hr />

            <h3>Reference</h3>

            <p>{order.reference}</p>

            <button onClick={confirmPayment}>

                I HAVE MADE PAYMENT

            </button>

        </div>

    );

}

export default Payment;