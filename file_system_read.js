const fs=require('fs');
//write file
const file='myFile.txt'
const content='Hello Hai'
fs.writeFile(file,content,'utf8',(err)=>{
    if(err) throw err;
    console.log("file written successfully!")

})
//read file
fs.readFile(file,'utf-8',(err,data)=>{
    if(err){
        console.log("Error reading file:",err)
        return;
    }
    console.log("File  content: ",data);
});

fs.readFile('C:\\Users\\acer\\Pictures\\Screenshots\\image.png',(err,data)=>{
    if(err) throw err;
    console.log('Image Size:',data)
})

//appendfile
fs.appendFile(file,' Hello World!','utf8',(err)=>{
    if(err) {
        console.log(err)
    }
    console.log("Success fully appended!")
})

fs.readFile(file,'utf-8',(err,data)=>{
    if(err){
        console.log("Error reading file:",err)
        return;
    }
    console.log("File  content: ",data);
});

//delete file

fs.unlink('hello.txt',(err)=>{
    if(err) throw err;
    console.log("file deleted!")
})
