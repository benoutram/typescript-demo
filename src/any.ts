/**
 * Created by Ben Outram on 09/11/15.
 */

/// <reference path="messages.tsx" />

var m = new Messages.Messages();

/**
 * Declare an value with type 'any'
 */
var myValue: any = "Red";

/**
 * Reassign with a different type
 */
myValue = false;


/**
 * Declare function with parameter types of any
 */
var total = function(cost: any, quantity: any) {
    return cost * quantity;
}

/**
 * Call the function with any types
 */
m.log('The total cost is', total(5, 1));
m.log('This is going to break', total('Cost: £5', ' Quantity: 1'));

m.render();