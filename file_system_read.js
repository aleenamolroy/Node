const fs=require('fs');
fs.readFile('myFile.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Error reading file:",err)
        return;
    }
    console.log("File  content",data);
});

fs.readFile('C:\\Users\\acer\\Pictures\\Screenshots\\image.png',(err,data)=>{
    if(err) throw err;
    console.log('Image Size:',data)
})

