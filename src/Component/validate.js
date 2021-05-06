function validate(data){

    let errors = {}
 
    if(data.fname === "") {
         errors.fname = "Name required"
     }
     else if (! /^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(data.fname)){
        errors.fname = "Only Alphabets are allowed" 
     }
     console.log(errors)
       
     return errors ;
}

export default validate

