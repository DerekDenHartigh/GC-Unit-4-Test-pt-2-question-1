"use strict";

angular
.module("BudgetApp")
.service("budgetService", function(){
    const service = this;
    service.expenseArray = [];
    service.expenseTotal = 0;

})