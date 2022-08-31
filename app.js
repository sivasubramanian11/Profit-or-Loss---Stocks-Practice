//step-1 Selecting all the elements from Html input
var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;

    CalculateProfitAndLoss(ip, qty, curr);
}

//Logic building done
function CalculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        
       showOutput(`The loss is ${loss} and the percentage is ${lossPercentage}%`);
    }
    else if(current > initial){
       var profit = (current - initial) * quantity;
       var profitPercentage = (profit / initial) * 100;
      showOutput(`The Profit is ${profit} and the profit percentage is ${profitPercentage}`);
    }
    else{
       showOutput("No pain No gain!!");
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}