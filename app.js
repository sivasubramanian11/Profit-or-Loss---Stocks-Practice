//step-1 Selecting all the elements from Html input
var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function CalculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        
        console.log(`The loss is ${loss} and the percentage is ${lossPercentage}%`);
    }
    else if(current > initial){
       var profit = (current - initial) * quantity;
       var profitPercentage = (profit / initial) * 100;
       console.log(`The Profit is ${profit} and the profit percentage is ${profitPercentage}`);
    }
    else{
        console.log("No pain No gain!!");
    }
}

CalculateProfitAndLoss(100, 10, 100 );