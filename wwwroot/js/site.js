var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Function to display employee details in the modal
function showEmployeeDetails(name, designation, imageUrl) {
    // Set employee details in the modal
    const employeeName = document.getElementById('employeeName');
    employeeName.innerHTML = `${name}`;
    
    const employeeDesignation = document.getElementById('employeeDesignation');
    employeeDesignation.innerHTML = `${designation}`;
    
    const detailSection = document.getElementById('img-container');
    
    // Debugging: Check if imageUrl is correct
    console.log("Image URL:", imageUrl);  // This will print the image URL to the console

    // Set the image in the modal
    detailSection.innerHTML = `
         <img src="${imageUrl}" alt="${name}'s Profile Picture" class="modal-employee-img">
        <div id="employeeNameContainer1">
            <div><strong id="Address">Address:</strong>6B Newyork,Texas</div>
            <div><strong id="Exp">Total Experience:</strong>5 Years&nbsp;&nbsp;&nbsp;&nbsp;
                     <strong id="In-house">  In House Experience:</strong>2 Years</div><br>
           <div class="Team">Team:<strong class="Team-highlight">Digital Marketing Trainee</strong>
           Reporting Manager:<strong class="Reporting-highlight">Mikhel Edward</strong></div>
        </div>
    `;
    
    // Display the modal
    modal.style.display = "block";
}

// Event listener to close the modal when the user clicks on <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Event listener to close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}