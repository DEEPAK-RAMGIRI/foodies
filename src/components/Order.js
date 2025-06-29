import './Order.css'
export default function Order() {
  const inputFields = [
    { label: "Name", name: "name", type: "text", placeholder: "Enter your name here" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email here" },
    { label: "Address", name: "address", type: "text", placeholder: "Enter your address here" },
    { label: "Phone Number", name: "phone", type: "text", placeholder: "Enter your phone number here" },
  ];

  return (
    <div className="order" id="order">
      <h1>ORDER <span className="color">NOW</span></h1>
      <div className="Baatha">
        <div className="order_img">
          <img src="/images/d.webp" alt="food delivery" />
        </div>
        <form action="#">
          {inputFields.map((input, index) => (
            <div className="input" key={index}>
              <p>{input.label}:</p>
              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                required
              />
            </div>
          ))}
          <a href="/" className="submit">Order Now</a>
        </form>
      </div>
    </div>
  );
}
