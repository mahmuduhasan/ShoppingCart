const firstItem = document.getElementById("first-item");
const deleteFirstItem = document.getElementById("remove-first-item");
const secondItem = document.getElementById("second-item");
const deleteSecondItem = document.getElementById("remove-second-item");
const iphoneSecondPrice = document.getElementById("iphone-second");
const increaseFirstIphone = document.getElementById("first-iphone-plus");
const increaseSecondIphone = document.getElementById("second-iphone-plus");
const decreaseFirstIphone = document.getElementById("first-iphone-minus");
const decreaseSecondIphone = document.getElementById("second-iphone-minus");
const subTotalGlobal = document.getElementById("subtotal");
const totalGlobal = document.getElementById("total");

const increaseFirstIphoneHandler = () => {
  const iphoneFirstPrice = document.getElementById("iphone-first");
  let firstItemPrice = parseInt(iphoneFirstPrice.innerHTML);
  let subTotalIncrease = parseInt(subTotalGlobal.innerHTML);
  let totalIncrease = parseInt(totalGlobal.innerHTML);
  let givenPrice = 1219;
  let firstItemCurrentPrice = firstItemPrice + givenPrice;
  let newSubTotal = subTotalIncrease + givenPrice;
  let newTotal = totalIncrease + givenPrice;
  iphoneFirstPrice.innerHTML = firstItemCurrentPrice;
  subTotalGlobal.innerHTML = newSubTotal;
  totalGlobal.innerHTML = newTotal;
  const quantity = document.getElementById("first-iphone-quantity");
  quantity.value = parseInt(quantity.value) + 1;
};

const decreaseFirstIphoneHandler = () => {
  const quantity = document.getElementById("first-iphone-quantity");
  const iPhoneQuantity = parseInt(quantity.value);
  if (iPhoneQuantity <= 0) {
    alert("Down Limit Reached!");
  } else {
    quantity.value = iPhoneQuantity - 1;
    const iphoneFirstPrice = document.getElementById("iphone-first");
    let firstItemPrice = parseInt(iphoneFirstPrice.innerHTML);
    let subTotalIncrease = parseInt(subTotalGlobal.innerHTML);
    let totalIncrease = parseInt(totalGlobal.innerHTML);
    let givenPrice = 1219;
    let firstItemCurrentPrice = firstItemPrice - givenPrice;
    let newSubTotal = subTotalIncrease - givenPrice;
    let newTotal = totalIncrease - givenPrice;
    iphoneFirstPrice.innerHTML = firstItemCurrentPrice;
    subTotalGlobal.innerHTML = newSubTotal;
    totalGlobal.innerHTML = newTotal;
  }
};

const increaseSecondIphoneHandler = () => {
  const iphoneSecondPrice = document.getElementById("iphone-second");
  let secondItemPrice = parseInt(iphoneSecondPrice.innerHTML);
  let subTotalIncrease = parseInt(subTotalGlobal.innerHTML);
  let totalIncrease = parseInt(totalGlobal.innerHTML);
  let givenPrice = 59;
  secondItemCurrentPrice = secondItemPrice + givenPrice;
  let newSubTotal = subTotalIncrease + givenPrice;
  let newTotal = totalIncrease + givenPrice;
  iphoneSecondPrice.innerHTML = secondItemCurrentPrice;
  subTotalGlobal.innerHTML = newSubTotal;
  totalGlobal.innerHTML = newTotal;
  const quantity = document.getElementById("second-iphone-quantity");
  quantity.value = parseInt(quantity.value) + 1;
};

const decreaseSecondIphoneHandler = () => {
  const quantity = document.getElementById("second-iphone-quantity");
  const iPhoneQuantity = parseInt(quantity.value);
  if (iPhoneQuantity <= 0) {
    alert("Down Limit Reached!");
  } else {
    quantity.value = iPhoneQuantity - 1;
    const iphoneSecondPrice = document.getElementById("iphone-second");
    let secondItemPrice = parseInt(iphoneSecondPrice.innerHTML);
    let subTotalIncrease = parseInt(subTotalGlobal.innerHTML);
    let totalIncrease = parseInt(totalGlobal.innerHTML);
    let givenPrice = 59;
    secondItemCurrentPrice = secondItemPrice - givenPrice;
    let newSubTotal = subTotalIncrease - givenPrice;
    let newTotal = totalIncrease - givenPrice;
    iphoneSecondPrice.innerHTML = secondItemCurrentPrice;
    subTotalGlobal.innerHTML = newSubTotal;
    totalGlobal.innerHTML = newTotal;
  }
};

const firstItemDeleteHandler = () => {
  const iphoneFirstPrice = document.getElementById("iphone-first");
  let firstItemPrice = parseInt(iphoneFirstPrice.innerHTML);
  let subTotal = parseInt(subTotalGlobal.innerHTML);
  let total = parseInt(totalGlobal.innerHTML);
  let newSubTotal = subTotal - firstItemPrice;
  let newTotal = total - firstItemPrice;
  subTotalGlobal.innerHTML = newSubTotal;
  totalGlobal.innerHTML = newTotal;
  firstItem.style.display = "none";
};

const secondItemDeleteHandler = () => {
  const iphoneSecondPrice = document.getElementById("iphone-second");
  let secondItemPrice = parseInt(iphoneSecondPrice.innerHTML);
  let subTotal = parseInt(subTotalGlobal.innerHTML);
  let total = parseInt(totalGlobal.innerHTML);
  let newSubTotal = subTotal - secondItemPrice;
  let newTotal = total - secondItemPrice;
  subTotalGlobal.innerHTML = newSubTotal;
  totalGlobal.innerHTML = newTotal;
  secondItem.style.display = "none";
};

deleteFirstItem.addEventListener("click", firstItemDeleteHandler);
deleteSecondItem.addEventListener("click", secondItemDeleteHandler);
increaseFirstIphone.addEventListener("click", increaseFirstIphoneHandler);
decreaseFirstIphone.addEventListener("click", decreaseFirstIphoneHandler);
increaseSecondIphone.addEventListener("click", increaseSecondIphoneHandler);
decreaseSecondIphone.addEventListener("click", decreaseSecondIphoneHandler);
