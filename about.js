export default function renderAbout(about){ 
    console.log(about, "About");
    return `
      <section id="about">
      <br /><br />
      <h1 class="animate__animated animate__infinite animate__swing animate__delay-2s">Kathryn Tatum</h1>
      <div class="row">
        <div class="col-4">
        <br />
        <img src = ${about.photo} class="profilepic" alt="photo" width="100%" height="100%">
        <p>
        ${about.name}
        <br />${about.title}
        <br />${about.future}
        <br />${about.email}
        <br />
        </br> <i class="fas fa-address-card"></i><a href="https://cdn.glitch.com/ab621e97-0054-4a80-9f77-cec959e02051%2FCreative%20Resume.pdf?v=1612391926700"> Resume</a> | <i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/kathryn-tatum-bb9a3215a/"> LinkedIn</a> | <i class="fab fa-github-square"></i> <a href="https://github.com/kathrynmtatum"> Github</a>
        </p>
	    </div>
       <div class="col-4">
        <br>
        <br>
        <br>
        Kathryn is a senior at Boston College studying Applied Psychology & Human Development and Computer Science. She passionate about human behavior and innovative technologies and enjoys working 
        in spaces where these disciplines intersect. At Boston College she is involved in Girls Who Code and Active Minds - a mental health club on campus. She will begin her career in consulting with 
        CapTech Ventures upon graduation. She is also a runner, traveler, and she loves spending time outdoors. 
        <br /><br /><br /><br /><br />
	     </div>
      </div>
      </section>
    `
  }