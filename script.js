function sendEmail() {
    var recipient = document.getElementById("recipient").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Send the data to your server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php"); // Change this to your server endpoint
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Email sent successfully!");
        } else {
            alert("Failed to send email. Please try again later.");
        }
    };
    xhr.onerror = function() {
        alert("Failed to send email. Please try again later.");
    };
    xhr.send(JSON.stringify({ recipient: recipient, subject: subject, message: message }));
}