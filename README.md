# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adelrashed/lotide`

**Require it:**

`const _ = require('@adelrashed/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arry1,arry2)`: asserts if two arrays are equal
* `assertEqual(actual,expected)`: asserts if two strings or numbers are equal
* `assertObjectssEqual(obj1,obj2)`: asserts if two objects are equal
* `countLetters(string)`: count the number of times each letter appears in a string
* `countOnly(allItem,itemsToCount)`: given an array of items, the function will only count certain items which are indicated by the itemsToCount object.
* `eqArrays(arry1,arry2)`: compares two arrays and returns Boolean
* `eqObjects(ob1,obj2)`: compares two Objects and returns Boolean
* `findKey(obj,callback)`: returns the first key of an object that statisfies the callback function.
* `findKeyByValues(obj,value)`: returns the key whose value is equal to the given value.
* `head(arry)`: returns the first element of an array
* `letterPositions(string)`: returns an the indexes at which each letter appear.
* `map(arry,callback)`: maps an array.
* `middle(arry)`: returns the middle elements of an array
* `tail(arry)`: returns the tail of an array
* `without(arry,itemsToRemove)`: remove items from an array and return an array 


