 function showPage(page) {
      document.querySelectorAll('.container').forEach(div => div.classList.remove('active'));
      document.getElementById(page).classList.add('active');
    }

    function signUp() {
      let email = document.getElementById("signupEmail").value;
      let password = document.getElementById("signupPassword").value;
      let policy = document.getElementById("policy").checked;

      if (!email || !password) {
        alert("Please fill in all fields!");
        return;
      }
      if (!policy) {
        alert("Please agree to the privacy policy!");
        return;
      }

      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      alert("Signup successful! Please login.");
      showPage("login");
    }

    function login() {
      let email = document.getElementById("loginEmail").value;
      let password = document.getElementById("loginPassword").value;

      let storedEmail = localStorage.getItem("userEmail");
      let storedPassword = localStorage.getItem("userPassword");

      if (email === storedEmail && password === storedPassword) {
        alert("Login successful! 🎉");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    }