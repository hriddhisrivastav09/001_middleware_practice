// Don't be confused, this one is for a GET request

exports.checkApproved = function(req , res , next){
    const body = req.body ;

    if(body.status == 'Approved'){
        next() ;
    }
    else{
        res.status(403).json({'error' : 'You are not approved to view this'})
    }
}