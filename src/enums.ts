/**
 * Created by Ben Outram on 09/11/15.
 */

/// <reference path="messages.tsx" />

var m = new Messages.Messages();

/**
 * Declare an enum as follows
 */
enum Color { Red, Green, Blue };
/**
 * Declare a value
 */
var myColor = Color.Blue;

/**
 * Lookup the corresponding name by index number
 */
m.log('Should be red', Color[0]);

/**
 * Adjust the numbering (example 1)
 */
enum State { Gas = 5, Liquid, Solid };
m.log('Should be liquid', State[6]);

/**
 * Adjust the numbering (example 2)
 */
enum PeriodicElement { Hydrogen = 1, Helium, Lithium, Berylium, Boron, Carbon, Nitrogen, Oxygen, Magnesium = 12, Potassium = 19, Calcium };
m.log('Should be calcium', PeriodicElement[20]);

m.render();
