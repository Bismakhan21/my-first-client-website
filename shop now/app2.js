function getData() {
    var get = localStorage.getItem("cartData");
    console.log(JSON.parse(get));
  }
  
  // getData();

var cartData = JSON.parse(localStorage.getItem("cartData"));


getData();
var price = parseFloat(sendingObj.des); 
console.log(price); 



// function sumArray(){
//   var sum = 0;

//   for (var i = 0; i < price.length; i++) {
//     sum += cardArr.des;
//     console.log();
// }

// console.log(sum);
// return sum

// }
// var result= sumArray(cardArr.des);
// sumArray();
// document.getElementById("totalAmountDisplay").textContent = "Sum: " + result;


function calculateTotalAmount(cartItems) {
    let totalAmount = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalAmount += price;
        
    }
    return totalAmount.toFixed(2); 
}

document.getElementById("totalAmountDisplay").textContent = calculateTotalAmount(cartData);

