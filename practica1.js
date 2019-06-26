const phone_price = 9000;
const tax = .16;
const accesories = 100;
const spending_threshold = 500;

var bank_account= 20000;

var amount = 0;


function calcular_tax (amount){

  return amount* tax;

}

function format(amount){
    return "$" + amount.toFixed(2);
}


while(amount < bank_account){
    amount = amount + phone_price;
    if(amount< spending_threshold){
        amount = amount + accesories;
    }

}
amount = amount + calcular_tax(amount);

console.log(
    "Costo total: " + format(amount)
);

if(amount > bank_account){
    console.log(
        "Se gasto ija"
    );
}