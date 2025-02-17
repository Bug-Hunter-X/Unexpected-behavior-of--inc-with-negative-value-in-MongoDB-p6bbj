```javascript
//Correct usage of $inc operator with handling for non-existent fields
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: -1 } }, { upsert: true });
//or
db.collection('counters').findAndModify( { query: { _id: 'myCounter' }, update: { $inc: { sequence: -1 } }, upsert: true, new: true })
```