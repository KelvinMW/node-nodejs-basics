import fs from 'fs'

const path = './files/fresh.txt';
const create = async () => {
    if(fs.existsSync(path)){
        console.log('Error ! File exists');
    } else { 
        fs.writeFile(path, 'I am young & fresh',()=>{
            console.log('new file created');
        });
    } 
};

await create();