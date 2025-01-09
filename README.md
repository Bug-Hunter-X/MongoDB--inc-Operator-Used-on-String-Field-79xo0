# MongoDB $inc Operator with String Field

This repository demonstrates a common error in MongoDB: using the `$inc` operator with a string field. The `$inc` operator is designed to increment numerical values. Applying it to strings results in an error.

## Bug
The `bug.js` file contains code that incorrectly uses `$inc` on a string field.  This will throw a MongoDB error.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle this.  Instead of `$inc`, you would need to retrieve the current value, convert it to a number, increment it, and then update the field.