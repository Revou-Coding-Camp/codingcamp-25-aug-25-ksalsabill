// Welcome Message
function setWelcome() {
    const name = document.getElementById("nameInput").ariaValueMax;
    const welcomeMsg = document.getElementById("welcomeMsg")
    if (name.trim() === "") {
        welcomeMsg.innertext = "Hi Guest 👋";
    } else {
        welcomeMsg.innertext = 'Hi ${name} 👋, welcome to my portfolio!';
    }
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  let errorMsg = "";

  if (name === "") errorMsg += "Name is required.\n";
  if (!/^\S+@\S+\.\S+$/.test(email)) errorMsg += "Invalid email format.\n";
  if (!/^\d{10,}$/.test(phone)) errorMsg += "Phone must be at least 10 digits.\n";
  if (message === "") errorMsg += "Message is required.\n";

  if (errorMsg) {
    alert(errorMsg);
    return;
  }

  // Show values in HTML after submit
  const resultDiv = document.getElementById("formResult");
  resultDiv.innerHTML = `
    <h3>✅ Message Sent Successfully</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  
  document.getElementById("contactForm").reset();
});