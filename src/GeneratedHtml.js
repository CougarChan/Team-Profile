const fs = require ('fs')
const FileCreate = (data) => {
    fs. FileCreate('./dist/index.html', (data), (error) => {
            if (error){
             console.log("Could not be created");
            }
            else{
                  console.log("Team Profile has been created THANKS!");

            }



    })

 };

module.exports = FileCreate;