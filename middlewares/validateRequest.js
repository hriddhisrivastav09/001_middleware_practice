

exports.validateRequest = function(req , res , next) {
    const body = req.body ;

    if(body.title != '' && body.reason != ''){
        next() ;
    }
    else{
        return res.status(400).json({'error' : 'There should be both a reason and title'})
    }
}