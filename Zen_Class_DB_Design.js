1. db.tasks.find({"submissiondate":{$gte:new Date("2020-10-01"),$lte:new Date("2020-10-30")}}).pretty();
   db.topics.find({"covereddate":{$gte:new Date("2020-10-01"),$lte:new Date("2020-10-30")}}).pretty()

2. db.company_drives.find({drivedate:{$gte:new Date("2020-10-15"),$lte:new Date("2020-10-31")}}).pretty()

3. db.company_drives.find({"attended":"true"}).pretty()

4. db.codekata.find({},{"userid":1, "solvedproblems":1}).pretty()

5. db.mentors.find({"mentees":{$lt:15}})

6. db.tasks.aggregate([ {$match: { "submissiondate": { $gte: new Date("2020-10-15"), $lte: new Date("2020-10-31") },  "submittedusers.submission": "false" } },   { $group: { _id: null, count: { $sum: 1 } } }]);
{ "_id" : null, "count" : 3 };

