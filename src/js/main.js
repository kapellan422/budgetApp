let startBtn = document.querySelector('#start'),

    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

    expensesItems = document.querySelectorAll('.expenses-item'),

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],

    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue =  document.querySelector('.day-value');


let money, time;
function start() {
    
}

startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value =  new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
    
        if ((typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
        }   else {
            console.log("Bad result");
            i--;
        }
    } 
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let opt = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {    
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
        }
    },
    chooseOptExpenses() {
        
    },
    chooseIncome: function() {
        let items = "";
        while(true){           
            items = prompt("Что принесет дополнительный доход?(Перечислите через запятую)", "");
                if(items != null){
                    if(items != "") {
                        appData.income = items.split(', ');
                        break;
                    }
                    else {
                        alert("Пожалуйста, не оставляйте поле пустым");
                    }     
                }
                else {
                    alert("Пожалуйста, ответьте на вопрос");
                }
            
        }
    },
    displayArray: function(arr) {
        console.log("Способы доп заработка: ");
        arr.forEach(element => console.log(element));
    },
    displayObject: function(obj) {
        console.log("Наша программа включает в себя данные: ");
        for (let key in obj) {
            console.log("key " + key + " value " + obj[key]);
        }
    },
};