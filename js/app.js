const income = document.getElementById("income");
const food = document.getElementById("food");
const rent = document.getElementById("rent");
const clothes = document.getElementById("clothes");
const expenseTotal = document.getElementById("expense-total");
const balance = document.getElementById("balance");
const savePercentage = document.getElementById("save-percentage");

document.getElementById("btn-calculate").addEventListener("click", function () {
  const incomeAmount = parseFloat(income.value);
  const foodAmount = parseFloat(food.value);
  const rentAmount = parseFloat(rent.value);
  const clothesAmount = parseFloat(clothes.value);

  expenseTotal.innerText = foodAmount + rentAmount + clothesAmount;

  balance.innerText = incomeAmount - parseFloat(expenseTotal.innerText);
});

document.getElementById("btn-save").addEventListener("click", function () {
  const savingAmount = document.getElementById("saving-amount");
  savingAmount.innerText =
    (parseFloat(savePercentage.value) / 100) * parseFloat(income.value);
  const remainingBalance = document.getElementById("remaining-balance");
  remainingBalance.innerText =
    parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
});
