const ApiError = require('../error/apiError')
 module.exports = function (err,req,res,next) {
     if(err instanceof ApiError) {
         res.status(err.status).json({message:err.message})
     }
     return res.status(500).json({message:"undefined error"})
 }