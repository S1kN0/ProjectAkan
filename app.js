const findAkan= function (e) {
    e.preventDefault();
    const fName =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const mName =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
    const frm = document.querySelector("#afrmaAkan");
    // const d = new Date(2018, 11, 24);
    const fd = new FormData(frm);
    const gender = fd.get("gender");
    const dateInput= document.getElementById("date").value;
    const monthInput= document.getElementById("month").value;
    const yearInput= document.getElementById("year").value;
    const d =new Date(yearInput, (monthInput-1),dateInput).getDay();
    const successAlert =document.querySelector("#success-alert");
    successAlert.classList.remove("d-none");
    successAlert.classList.add("d-block");
    console.log(gender)

    if (dateInput<=0 || dateInput>31 || monthInput<0 ||  monthInput>11){
        alert("Enter valid date")
        return
    }

    if (d){  
        if (gender === "female") { 
            alert("Your Akan name is " +fName[d])
        }else{
            alert("Your Akan name is " +mName[d]);
        }
    } else { 
        alert("Please add your date of birth of birth ");
    }

}

document.querySelector("#afrmaAkan").addEventListener('submit' , findAkan);

 
 