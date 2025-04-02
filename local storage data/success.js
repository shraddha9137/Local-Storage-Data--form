function displayStoredData() {
    let fullName = localStorage.getItem("Is_Full_Name");
    let email = localStorage.getItem("Is_email_id");
    let dob = localStorage.getItem("Is_Date_of_birth");
    let gender = localStorage.getItem("Is_gender");

    let displayDiv = document.getElementById("displayData");
    displayDiv.innerHTML = `
        <h2>Stored Data:</h2>
        <p><strong>Full Name:</strong> ${fullName ? fullName : "Not Available"}</p>
        <p><strong>Email:</strong> ${email ? email : "Not Available"}</p>
        <p><strong>Date of Birth:</strong> ${dob ? dob : "Not Available"}</p>
        <p><strong>Gender:</strong> ${gender ? gender : "Not Available"}</p>
    `;
}

window.onload = displayStoredData;
