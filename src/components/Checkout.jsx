import { useState } from "react";

function Checkout({ cart, onPlaceOrder, onBack }) {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        paymentMethod: "Cash on Delivery",
    });

    const [errors, setErrors] = useState({});

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = {};

        if (!form.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        }

        if (!form.address.trim()) {
            newErrors.address = "Delivery address is required.";
        }

        if (cart.length === 0) {
            newErrors.cart = "Your cart is empty.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        onPlaceOrder({
            customer: form,
            items: cart,
            total,
            orderNumber: `TT-${Date.now()}`,
            createdAt: new Date().toISOString(),
        });
    }

    return (
        <section className="checkout-section">
            <button
                type="button"
                className="checkout-back"
                onClick={onBack}
            >
                ← Back to shopping
            </button>

            <h2>Checkout</h2>
            <p>Enter your delivery details to place your order.</p>

            <div className="checkout-layout">
                <form
                    className="checkout-form"
                    onSubmit={handleSubmit}
                >
                    <h3>Customer Information</h3>

                    <label htmlFor="fullName">Full Name</label>
                    <input
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        autoComplete="name"
                    />
                    {errors.fullName && (
                        <p className="checkout-error">
                            {errors.fullName}
                        </p>
                    )}

                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                    />
                    {errors.email && (
                        <p className="checkout-error">
                            {errors.email}
                        </p>
                    )}

                    <label htmlFor="phone">Phone Number</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                    />
                    {errors.phone && (
                        <p className="checkout-error">
                            {errors.phone}
                        </p>
                    )}

                    <label htmlFor="address">Delivery Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        autoComplete="street-address"
                        rows={3}
                    />
                    {errors.address && (
                        <p className="checkout-error">
                            {errors.address}
                        </p>
                    )}

                    <label htmlFor="paymentMethod">
                        Payment Method
                    </label>
                    <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={form.paymentMethod}
                        onChange={handleChange}
                    >
                        <option value="Cash on Delivery">
                            Cash on Delivery
                        </option>
                        <option value="Bank Transfer">
                            Bank Transfer (Demo)
                        </option>
                    </select>

                    <button type="submit" className="place-order-btn">
                        Place Order · ₱{total.toLocaleString("en-PH", {
                            minimumFractionDigits: 2,
                        })}
                    </button>
                </form>

                <aside className="checkout-summary">
                    <h3>Your Order</h3>

                    {cart.map((item) => (
                        <div className="checkout-item" key={item.id}>
                            <span>
                                {item.emoji} {item.name} × {item.quantity}
                            </span>
                            <strong>
                                ₱{(
                                    item.price * item.quantity
                                ).toLocaleString("en-PH")}
                            </strong>
                        </div>
                    ))}

                    <div className="checkout-total">
                        <span>Total</span>
                        <strong>
                            ₱{total.toLocaleString("en-PH", {
                                minimumFractionDigits: 2,
                            })}
                        </strong>
                    </div>

                    {errors.cart && (
                        <p className="checkout-error">{errors.cart}</p>
                    )}
                </aside>
            </div>
        </section>
    );
}

export default Checkout;