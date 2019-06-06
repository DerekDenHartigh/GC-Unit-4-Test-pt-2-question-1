"use strict";

function BudgetController(budgetService) {
    const ctrl = this;
    ctrl.service = budgetService;
    ctrl.expenseTotal = ctrl.service.expenseTotal;
    ctrl.search;

    ctrl.addExpense = (expense, cost)=>{
        console.log(expense, cost)
        let newExpense = {
            expenseKey: expense,
            costKey: cost
        };
        ctrl.service.expenseArray.unshift(newExpense);
        console.log("modified expense array:")
        console.log(ctrl.service.expenseArray);
        ctrl.totalExpenses();
    };

    ctrl.removeExpense = (expense)=>{
        let index = ctrl.service.expenseArray.indexOf(expense);
        ctrl.service.expenseArray.splice(index, 1);
        ctrl.totalExpenses();
    }

    ctrl.totalExpenses = ()=>{
        ctrl.service.expenseTotal = 0;
        ctrl.service.expenseArray.forEach(function(expense){
            console.warn(expense.costKey);
            ctrl.service.expenseTotal += expense.costKey;
        })
    }

    }

angular
.module('BudgetApp')  
.component('budget', {
    template: `
    <form ng-submit="$ctrl.addExpense(expense, cost);">
    <!-- <div> -->
        <label>Expense: <input type="text" ng-model="expense"></label>
        <label>cost: $<input type="number" min="0.01" step="0.01" ng-model="cost"></label>
        <!-- <button ng-submit="$ctrl.addExpense(expense, cost);">Add Expense</button> -->
        <button>Add Expense</button>
    </form>
    <!-- </div> -->
<label>Filter Expenses: <input type="text" ng-model="$ctrl.search"></label>
<br>
<br>
<h1>Expenses:</h1>
<ul>
    <li ng-repeat="expense in $ctrl.service.expenseArray | filter:$ctrl.search">{{expense.expenseKey}} {{expense.costKey}} <button ng-click="$ctrl.removeExpense(expense)">Delete</button></li>
</ul>
<label>Total Expenses: {{$ctrl.service.expenseTotal}}</label>
    `,
    // templateUrl: './budgetTemplate.html', // not sure why this aint working...
    controller: BudgetController
});