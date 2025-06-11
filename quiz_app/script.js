document.getElementById("submit").addEventListener("click",function(event){
    let first = document.getElementById("firstname").value;
    let firstInput = document.getElementById("firstname");

    if (first === "") {
        let neww = document.createElement("p");
        neww.innerHTML = "Error: First Name cannot be empty!";
        neww.id="error-message";
        firstInput.insertAdjacentElement("afterend", neww);
        
    }
    // let second=document.getElementById("lastname").value;
    // let secondInput= document.getElementById("lastname");
    // let existingError1 = document.getElementById("error-message1");
    // if (existingError1) {
    //     existingError1.remove();
    // }
    // if (second === "") {
    //     let neww2 = document.createElement("p"); 
    //     neww2.innerHTML = "Error: Last Name cannot be empty!"; 
    //     neww2.id = "error-message1"; 
    //     secondInput.insertAdjacentElement("afterend", neww2);
    //     isValid=false;
    // }

    // let phonenumber=document.getElementById("phonenumber").value;
    // let phonenumberInput = document.getElementById("phonenumber");
    // let existingError2 = document.getElementById("error-message2");
    
    // if (existingError2  ){
    //     existingError2.remove();
    // }
    
    // if (phonenumber === "" || isNaN(phonenumber) || String(phonenumber).length!=10 ) {
    //     let neww3 = document.createElement("p");
    //     neww3.innerHTML = "Error: Enter your mobile number correctly!"; 
    //     neww3.id = "error-message2"; 
    //     phonenumberInput.insertAdjacentElement("afterend", neww3);
    //     isValid=false;
    // }
    





    // let mailid=document.getElementById("mailid").value;
    // let mailidInput = document.getElementById("mailid");
    // let existingError3 = document.getElementById("error-message3");
    // let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // if (existingError3) {
    //     existingError3.remove();
    // }
    // if (mailid === "" || !emailPattern.test(mailid)) {
    //     let neww4 = document.createElement("p"); 
    //     neww4.innerHTML = "Error : Enter your mail-id properly!"; 
    //     neww4.id = "error-message3";         
    //     mailidInput.insertAdjacentElement("afterend", neww4);
    //     isValid=false;
    // }




    // let password=document.getElementById("password").value;
    // let passwordInput = document.getElementById("password");
    // let existingError4 = document.getElementById("error-message4");
    
    // let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    // if (existingError4) {
    //     existingError4.remove();
    // }
    // if (password === ""   || !passwordPattern.test(password)) {
    //     let neww5 = document.createElement("p"); 
    //     neww5.innerHTML = "Password must be at least 8 characters long and <br>include an 'uppercase letter(A)',<br>lowercase letter(a), number(1), and special character(#).";
    //     neww5.id = "error-message4"; 
    //     passwordInput.insertAdjacentElement("afterend", neww5);
    //     isValid=false;
    // }
        
});
document.getElementById("reset").addEventListener("click", function() {
    document.querySelectorAll(".error-message").forEach(error => error.remove());
    // document.getElementById("container").reset(); // Reset input fields

    // // Remove error messages
    // document.getElementById("error-message").reset()
    // // forEach(error => error.remove());
});