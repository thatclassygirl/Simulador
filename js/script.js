function computeLoan() {
  const amount = document.querySelector("#amount").value;
  const interest_rate = document.querySelector("#interest_rate").value;
  const months = document.querySelector("#months").value;

  const interest = (amount * (interest_rate * 0.01)) / months;

  let payment = (amount / months + interest).toFixed(2);
  let total = (payment * months).toFixed(2);
  let interest_total = (total - amount).toFixed(2);

  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  interest_total = interest_total
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  document.querySelector(
    "#monthlyPayment"
  ).innerHTML = `Monthly Payment = $ ${payment}`;
  document.querySelector(
    "#totalPayment"
  ).innerHTML = `Total Payment = $ ${total}`;
  document.querySelector(
    "#totalInterest"
  ).innerHTML = `Total Interest = $ ${interest_total}`;
}
