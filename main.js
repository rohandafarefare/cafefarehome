    const scriptURL = 'https://script.google.com/macros/s/AKfycbw8Yt5drWuJDDsaSXdix0XEypzk6CObBu1BgFxEvO5bMzEUTwFo6M5O7pi6xweYd8w/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Sent"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });

    



            function showOrHide1() {
            var ans = document.getElementById("sh1");
            if (ans.style.display === "none") {
               ans.style.display = "block";
            } else {
               ans.style.display = "none";
            }
         }
         function showOrHide2() {
            var ans = document.getElementById("sh2");
            if (ans.style.display === "none") {
               ans.style.display = "block";
            } else {
               ans.style.display = "none";
            }
         }
         function showOrHide3() {
            var ans = document.getElementById("sh3");
            if (ans.style.display === "none") {
               ans.style.display = "block";
            } else {
               ans.style.display = "none";
            }
         }
         function showOrHide4() {
            var ans = document.getElementById("sh4");
            if (ans.style.display === "none") {
               ans.style.display = "block";
            } else {
               ans.style.display = "none";
            }
         }
         function showOrHide5() {
            var ans = document.getElementById("sh5");
            if (ans.style.display === "none") {
               ans.style.display = "block";
            } else {
               ans.style.display = "none";
            }
         }