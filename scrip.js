let transactions = [];

function addTransaction(){

let desc = document.getElementById("desc").value;
let amount = Number(document.getElementById("amount").value);
let type = document.getElementById("type").value;

if(desc == "" || amount == ""){
alert("Fill all fields");
return;
}

transactions.push({
desc,
amount,
type
});

document.getElementById("desc").value = "";
document.getElementById("amount").value = "";

showTransactions();
updateSystem();

}

function showTransactions(){

let table = document.getElementById("tableBody");

table.innerHTML = "";

transactions.forEach((item,index)=>{

table.innerHTML += `
<tr>

<td>${item.desc}</td>

<td>${item.type}</td>

<td>$${item.amount}</td>

<td>
<button class="deleteBtn"
onclick="deleteTransaction(${index})">
Delete
</button>
</td>

</tr>
`;

});

}

function updateSystem(){

let income = 0;
let outcome = 0;

transactions.forEach(item=>{

if(item.type == "Income"){
income += item.amount;
}else{
outcome += item.amount;
}

});

document.getElementById("income").innerText = "$" + income;

document.getElementById("outcome").innerText = "$" + outcome;

document.getElementById("balance").innerText =
"$" + (income - outcome);

}

function deleteTransaction(index){

transactions.splice(index,1);

showTransactions();
updateSystem();

}