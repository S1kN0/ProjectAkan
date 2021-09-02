const findAkan= (e) => {
    e.preventDefault();
    const fName =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const mName =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
    const fr = document.querySelector("afrmaAkan");
    const fd = new FormData(frm);
    const gender = fd.get("gender");
    const dob =fd.get("dob");

    console.log (fName [0])


}

document.querySelector("#frmAkan").addEventListener('submit' , checkAkan);