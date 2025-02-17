# MongoDB $inc Operator with Negative Values
This repository demonstrates an uncommon error related to the `$inc` operator in MongoDB when used with negative values and the field doesn't exist.
The issue arises when attempting to decrement a counter field that hasn't been initialized.  Instead of creating the field with the negative value, MongoDB leaves the field absent.
The solution provided addresses this by first checking for the existence of the field and initializing it if needed.