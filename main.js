const tdk = document.getElementById('tdk') 


function random() {
   
   const randomX = Math.random() * 100
   const randomy = Math.random() * 100
   
   tdk.style.left = randomX + '%'
   tdk.style.top = randomy + '%'
   
   // Tab to edit
}

function pindah() {
   setTimeout(() => {
      window.location.href = 'next.html'
   }, 1000)
}