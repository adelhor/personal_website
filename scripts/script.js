function mobileMenu(){
    let mobileMenuIcon = document.getElementById
    ("mobile_menu_icon");
    console.log(mobileMenuIcon)
    let menu = document.getElementById
    ("main_menu");
    console.log(menu)

    if (mobileMenuIcon){
        mobileMenuIcon.addEventListener("click",function(){
            menu.classList.toggle("opened");
            mobileMenuIcon.classList.toggle("opened");
        })
    }
} 

(function(){
    emailjs.init(""); //API_public_key
  })();

// JavaScript to handle the form submission event
function sendEmail() {
    var user_name = document.getElementById('user_name').value;
    var user_email = document.getElementById('user_email').value;
    if (!validateEmail(user_email)) {
      alert('Please provide a valid e-mail address.');
      return;
    }
    var message = document.getElementById('message').value;

    emailjs.send("", "", { //service_ID and tamplete_ID
        from_name: user_name,
        user_email: user_email,
        message: message
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email has been sent!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Email sending failed.');
    });
  }
  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }