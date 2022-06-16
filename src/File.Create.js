const FileCreate = (markdown) =>
       fs. FileCreate('./dist/index.html', markdown, (error) => {
               if (error){
                console.log("Could not be created");
               }
               else{
                     console.log("Team Profile has been created THANKS!");

               }



       })