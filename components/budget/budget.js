"use strict";

function BudgetController(budgetService) {
    const ctrl = this;
    ctrl.service = budgetService;

    ctrl.addExpense = (expense, cost)=>{
        console.log(expense, cost)
        let newExpense = {
            expenseKey: expense,
            costKey: cost
        };
        ctrl.service.expenseArray.unshift(newExpense);
        console.log("modified expense array:")
        console.log(ctrl.service.expenseArray);
    };

    ctrl.deleteExpense = (expense)=>{
        let index = ctrl.service.expenseArray.indexOf(expense);
        ctrl.service.expenseArray.splice(index, 1);
    }

    }

angular
.module('BudgetApp')  
.component('budget', {
    template: `
    <!--
    render a form that allows the user to enter the name of an expense 
    and how much money they spent on it. This form will use ngSubmit to 
    pass the data to the controller. 
--> 
<!-- <form ng-form="budgetForm"> -->
<div>
    <label>Expense: <input type="text" ng-model="expense"></label>
    <label>cost: $<input type="number" min="0.01" step="0.01" ng-model="cost"></label>
    <!-- <button ng-submit="$ctrl.addExpense(expense, cost);">Add Expense</button> -->
    <button ng-click="$ctrl.addExpense(expense, cost);">Add Expense</button>
<!-- </form> -->
</div>
<br>
<br>
<h1>Expenses:</h1>
<ul>
    <li ng-repeat="expense in $ctrl.service.expenseArray">{{expense.expenseKey}} {{expense.costKey}} <button ng-click="$ctrl.deleteExpense(expense)">Delete</button></li>
</ul>
    `,
    // templateUrl: './budgetTemplate.html', // not sure why this aint working...
    controller: BudgetController
});