//A big object to store error handling functions
const errorHandler = {
    diagnoseAndRespond: (err, res) =>{

        if(err.name == "CastError" && err.kind == "ObjectId" && err.path == "_id"){
            res.send("The ID of the requested attraction was not found.");
            return;
        }

        console.log("Error handling not yet implimented");
    }
}

module.exports = errorHandler;