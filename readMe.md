    Create a component file named budget.js in the components folder that contains a component named budget. 

This component's template will render a form that allows the user to enter the name of an expense and how much money they spent on it. This form will use ngSubmit to pass the data to the controller. 
-technically I didn't use ng-submit, I might come back to this after question 2

    The component will also render an input that is used to filter through the list of expenses.

    When the form is submitted, the newly added expense will be added to an array. This array will be displayed using ngRepeat. The name and price of each expense must be displayed as well as a button that says "Delete". 

    The button must use the ngClick directive, which allows the expense to be removed. The method ngClick will call is:  $ctrl.removeExpense.

    Newer items added must be displayed at the top of the list. 

    Display the total amount of expenses accrued during the week. Removing an item will also adjust the total amount of expenses being displayed.