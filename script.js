// Write your script here
function checkout() {
  var options = {
    key: "rzp_test_IYXTqPidWxmY1W", // Enter the Key ID generated from the Dashboard
    amount: "29935",
    name: "Acme Corp",
    description:
      "A Wild Sheep Chase is the third novel by Japanese author Haruki Murakami",
    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    /**
     * You can track the modal lifecycle by * adding the below code in your options
     */
    modal: {
      ondismiss: function () {
        console.log("Checkout form closed");
      },
    },
  };
  var rzp1 = new Razorpay(options);
}
