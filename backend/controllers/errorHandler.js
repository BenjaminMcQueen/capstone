//A big object to store error handling functions
const errorHandler = {
    diagnoseAndRespond: (err, res) => {

        if (err.name == "CastError" && err.kind == "ObjectId" && err.path == "_id") {
            res.send("The ID of the requested attraction was not found.");
            return;
        }

        if (err._message === 'Attraction validation failed'){
            res.status(400).send(err.message);
            return;
        }

        console.log("Error handling not yet implimented");
        console.log("The error is as such:");
        console.log(err);
        res.status(400).send('Unknown error. \n' + err);
    },

    diagnoseRequestAndRespond: (err, req, res) => {

        if (err.name == "CastError" && err.kind == "ObjectId" && err.path == "_id") {
            res.send("The ID of the requested attraction was not found.");
            return;
        }

        console.log("Error handling not yet implimented");
    }
};

module.exports = errorHandler;