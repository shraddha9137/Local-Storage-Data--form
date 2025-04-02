function myfunc(event) {
    event.preventDefault(); 
    
    let Full_Name = document.getElementById("Full_Name").value;
    let Email_id = document.getElementById("Email_id").value;
    let Date_of_birth = document.getElementById("Date_of_birth").value;

    let gender;
    let maleRadio = document.getElementById("male");
    let femaleRadio = document.getElementById("female");

    if (maleRadio.checked) {
        gender = "Male";
    } else if (femaleRadio.checked) {
        gender = "Female";
    } else {
        gender = "Not Specified"; 
    }

    localStorage.setItem("Is_Full_Name", Full_Name);
    localStorage.setItem("Is_gender", gender);
    localStorage.setItem("Is_email_id", Email_id);
    localStorage.setItem("Is_Date_of_birth", Date_of_birth);

  
    let successMessage = document.getElementById("successMessage");
    successMessage.innerText = "✔ Form submitted successfully!";
    
  
    displayStoredData();

 
    document.getElementById("myForm").reset();
}
function displayStoredData() {
    let fullName = localStorage.getItem("Is_Full_Name");
    let email = localStorage.getItem("Is_email_id");
    let dob = localStorage.getItem("Is_Date_of_birth");
    let gender = localStorage.getItem("Is_gender");
    window.location.href ="success.html";

    let displayDiv = document.getElementById("displayData");
    displayDiv.innerHTML = `
        <h2>Stored Data:</h2>
        <p><strong>Full Name:</strong> ${fullName ? fullName : "Not Available"}</p>
        <p><strong>Email:</strong> ${email ? email : "Not Available"}</p>
        <p><strong>Date of Birth:</strong> ${dob ? dob : "Not Available"}</p>
        <p><strong>Gender:</strong> ${gender ? gender : "Not Available"}</p>
    `;

    displayDiv.style.display = "block";
}
window.addEventListener('load', () => {
    document.getElementById("displayData").style.display = "none";
});
