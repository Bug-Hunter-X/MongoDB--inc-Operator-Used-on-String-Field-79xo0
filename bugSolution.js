```javascript
// Correct approach: convert to number, increment, and update
db.collection.findOne({"_id":1}, (err, doc) => {
  if (err) throw err; 
  let newValue = parseInt(doc.field) + 1; 
  db.collection.updateOne({"_id": 1}, {"$set":{"field":newValue}});
});
```