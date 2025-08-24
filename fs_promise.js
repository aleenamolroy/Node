const fs=require('fs').promises
async function ReadFile(){
    try{
        const data=await fs.readFile('myFile.txt','utf8')
        console.log('File Data:',data)
        console.log("hello");
    }catch(err){
        console.log(err)
    }
}

ReadFile()