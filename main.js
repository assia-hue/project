// WAIT FOR DOM
document.addEventListener("DOMContentLoaded", function() {

  // THEME TOGGLE
  const toggleBtn = document.getElementById("themeToggle");

  toggleBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
      toggleBtn.textContent = "☀️ Light Mode";
    }else{
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });

  // GPA Calculator
  const form = document.getElementById('gpaForm');
  const result = document.getElementById('gpaResult');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const marks = [
      Number(form.course1.value),
      Number(form.course2.value),
      Number(form.course3.value)
    ];
    if(marks.some(m => m < 0 || m > 100)){
      result.textContent = 'Marks must be between 0 and 100!';
      return;
    }
    const avg = marks.reduce((a,b)=>a+b,0)/marks.length;
    let classification = '';
    if(avg >= 85) classification = 'Distinction';
    else if(avg >=70) classification = 'First Class';
    else if(avg >=60) classification = 'Second Class';
    else classification = 'Pass';
    result.textContent = `GPA: ${avg.toFixed(2)} - ${classification}`;
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been received.');
    contactForm.reset();
  });

  // Dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();

});