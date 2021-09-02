const findAkan= function (e) {
    e.preventDefault();
    const fName =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const mName =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
    const frm = document.querySelector("#afrmaAkan");

    const fd = new FormData(frm);
    const gender = fd.get("gender");
    const dob =fd.get("dob");
const d =new Date(dob).getDay();
const successAlert =document.querySelector("#success-alert");
successAlert.classList.remove("d-none");
successAlert.classList.add("d-block");
if (dob){  
    if (gender == "female"){ 
        alert("Your Akan name is " +fName[d])
    }else{
    alert("Your Akan name is " +fName[d])
    }
 }else{ 
     alert("please add your date of birth of birth ")
 }

}
document.querySelector("#afrmaAkan").addEventListener('submit' , findAkan)

 