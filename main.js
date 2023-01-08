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
