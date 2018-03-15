var mongodb = require('mongodb');

class workerController{
    list(req, res){
        req.db.workers.find().toArray(function (err, results) {
            res.send(results);
        })
    }

    add(req, res) {
        if (!req.body || !req.body.worker) return;
        req.db.workers.insertOne(req.body.worker);
        res.end();
    }

    delete(req, res) {
        if (!req.params.id) return;

        req.db.workers.deleteOne({ _id: new mongodb.ObjectID(req.params.id) }, function (err, results) {
            if (err) {
                console.log("failed");
                throw err;
            }
            res.end();
        });
    }

    update(req, res){
        if (!req.body) return;
        req.db.workers.updateOne({ '_id': new mongodb.ObjectID(req.body.id) }, { $set: req.body }, function (err, result) {
            if (err) {
                console.log("failed");
                throw err;
            }
            res.end();
        });
    }

}

module.exports = new workerController();
