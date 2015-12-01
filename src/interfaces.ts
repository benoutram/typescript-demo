/**
 * Created by Ben Outram on 10/11/15.
 */

/// <reference path="messages.tsx" />

var m = new Messages.Messages();

/**
 * Type checking focuses on the 'shape' that values have. For example this function expects a parameter with a label of type string.
 */
function printLabel(labelledObj: {label: string}) {
    m.log('label', labelledObj.label);
}

/**
 * The compiler only checks that at least the parameters required are present. Our object has an additional size property which is ignored.
 */
var myLabelObj = { size: 10, label: 'Weather' };
printLabel(myLabelObj);

/**
 * An interface can be used instead
 */
interface Value {
    value: string;
}

/**
 * The function expects a parameter of type Value
 */
function printValue(valuedObj: Value) {
    m.log('value', valuedObj.value);
}

/*
 * The object does not have to declare that it 'implements Value' but the shape of the object is checked.
 */
var myValueObj = { size: 10, value: 'Blustery' };
printValue(myValueObj);

/*
 * Parameters can be marked optional, denoted by '?'
 */
interface WeatherForecast {
    forecast: string,
    validFrom: string,
    validUntil: string,
    confidence?: number
}

function printForecast(weatherForecast: WeatherForecast) {
    m.log('The weather from ' + weatherForecast.validFrom + ' until ' + weatherForecast.validUntil + ' will be', weatherForecast.forecast);
}

var weatherForecast = { forecast: 'blustery', validFrom: '16:00', validUntil: '23:00', confidence: 60 };
printForecast(weatherForecast);

var weatherForecastWithoutConfidence = { forecast: 'sprinkles', validFrom: '23:00', validUntil: '04:00' };
printForecast(weatherForecastWithoutConfidence);

/*
 * Interfaces can define functions as well
 */
interface HasSearchFn {
    (query: string, site: string)
}

var mySearchFn: HasSearchFn;

mySearchFn = function(query: string, site: string) {
  return 'The search for ' + query + ' in ' + site + ' returned no results';
};

function doStaffSearch(fn: HasSearchFn, input: string) {
  return fn.apply(this, [input, 'Staff']);
}

var searchResult = doStaffSearch(mySearchFn, 'Donuts Team Lead');
m.log('search result', searchResult);

m.render();