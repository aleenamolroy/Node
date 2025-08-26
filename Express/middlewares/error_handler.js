export default function error_handler(error,req,res,next){
    console.error(error.stack)
    res.status(500).json({message:"something went wrong"})
}