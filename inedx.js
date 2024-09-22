
// function added
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}



// add event listener calculate button
const calculateButton = document.getElementById('calculate-btn')
    .addEventListener('click', function () {
        // const income = parseFloat(document.getElementById('income-input').value);
        // const software = parseFloat(document.getElementById('software-input').value);
        // const courses = parseFloat(document.getElementById('courses-input').value);
        // const internet = parseFloat(document.getElementById('internet-input').value);


        // get the value function call
        const income=getInputValueById('income-input');
        const software=getInputValueById('software-input');
        const courses=getInputValueById('courses-input');
        const internet=getInputValueById('internet-input');



        const totalExpenses = software + courses + internet;
        const balance = income - totalExpenses;


        // income < totalExpenses
        if (income < totalExpenses) {
            document.getElementById('logic-error').classList.remove('hidden');
            return;
        }

        // Invalid Input
        if (software <= 0 || isNaN(software)) {
            document.getElementById('software-error').classList.remove('hidden');
            return;
        }
        if (courses <= 0 || isNaN(courses)) {
            document.getElementById('courses-error').classList.remove('hidden');
            return;
        }

        if (internet <= 0 || isNaN(internet)) {
            document.getElementById('internet-error').classList.remove('hidden');
            return;
        }


        const totalExpensesElement = document.getElementById('totalexpenses');
        totalExpensesElement.innerText = totalExpenses.toFixed(2);


        const totalBalance = document.getElementById('balanceelement');
        totalBalance.innerText = balance.toFixed(2);

        const result = document.getElementById('result');
        result.classList.remove('hidden');


        // added history section
        const historyItem = document.createElement('div');
        historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";

        historyItem.innerHTML =
            `
            <p class="text-xs text-gray-500 font-semibold">${new Date().toLocaleDateString()}</p>
            <p class="text-xs text-gray-500 font-semibold">Income:${income.toFixed(2)}</p>
            <p class="text-xs text-gray-500 font-semibold">Total Expenses:${totalExpenses.toFixed(2)}</p>
            <p class="text-xs text-gray-500 font-semibold">Balance:${balance.toFixed(2)}</p>
        `

        const historyContainer = document.getElementById('history-list');

        historyContainer.insertBefore(historyItem, historyContainer.firstChild)

    });


    

     // external Validation input field
     document.getElementById('income-input').addEventListener('input', function () {
        const incomeValue = parseFloat(document.getElementById('income-input').value);

        if (isNaN(incomeValue) || incomeValue <= 0) {
            document.getElementById('income-error').classList.remove('hidden');
            return;
        }
    })





// add event listener with saving button
const savings = document.getElementById('savings-btn')
    .addEventListener('click', function () {

        const savingsInput = parseFloat(document.getElementById('savings').value);


        // const income = parseFloat(document.getElementById('income-input').value);
        // const software = parseFloat(document.getElementById('software-input').value);
        // const courses = parseFloat(document.getElementById('courses-input').value);
        // const internet = parseFloat(document.getElementById('internet-input').value);


        // get the value function call
        const income=getInputValueById('income-input');
        const software=getInputValueById('software-input');
        const courses=getInputValueById('courses-input');
        const internet=getInputValueById('internet-input');



        const totalExpenses = software + courses + internet;
        const balance = income - totalExpenses;


        const savingsAmount = (savingsInput * balance) / 100;

        const savingsElement = document.getElementById('savings-Amount');
        savingsElement.innerText = savingsAmount.toFixed(2);

        const remainigBalance = balance - savingsAmount;
        const remainigBalanceStore = document.getElementById('remaining-balance');
        remainigBalanceStore.innerText = remainigBalance;
    })




// add history section
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function () {

    historyTab.classList.add("text-white", "bg-gradient-to-r", "from-blue-500", "to-violet-500", "text-white")

    assistantTab.classList.remove("text-white", "bg-gradient-to-r", "from-blue-500", "to-violet-500", "text-white");

    assistantTab.classList.add("text-gray-500");


    document.getElementById('form section').classList.add('hidden')
    document.getElementById('expenses-history').classList.remove('hidden')


});




// assistant tab back
assistantTab.addEventListener('click', function () {

    assistantTab.classList.add("text-white", "bg-gradient-to-r", "from-blue-500", "to-violet-500", "text-white");

    historyTab.classList.remove("text-white", "bg-gradient-to-r", "from-blue-500", "to-violet-500", "text-white")

    document.getElementById('form section').classList.remove('hidden');
    document.getElementById('expenses-history').classList.add('hidden');


});