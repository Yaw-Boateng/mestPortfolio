 const roles = ["A Web Developer", "A UI/UX Designer", "A Graphic Designer", "A Video Editor"];
  const typewriterElement = document.getElementById("typewriter");

  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (typing) {
      if (charIndex < currentRole.length) {
        typewriterElement.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100); // typing speed
      } else {
        typing = false;
        setTimeout(typeEffect, 2000); // pause after typing
      }
    } else {
      if (charIndex > 0) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 50); // deleting speed
      } else {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 300); // pause before typing next word
      }
    }
  }

  typeEffect();

  // detect scroll event on the document
  document.addEventListener('scroll', function(){
    // console.log(window.scrollY);
    if(window.scrollY > 70){
      // change navbar bg to blue
      document.getElementById('navbar').style.backgroundColor = '#0979E4';
    }else{
      // change navbar bg to transparent
            document.getElementById('navbar').style.backgroundColor = 'transparent';
    }

});



