// Link for the documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration

// Add button code documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration#code-to-add-pay-button

var options = {
  key: "rzp_key", // Enter the Key ID generated from the Dashboard
  amount: "10000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  name: "Test",
  description: "Test Transaction",
  order_id: "rzp_order_id", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  callback_url: "callback_url",
};
var rzp1 = new Razorpay(options);
document.getElementById("rzp-button1").onclick = function (e) {
  rzp1.open();
  e.preventDefault();
};
