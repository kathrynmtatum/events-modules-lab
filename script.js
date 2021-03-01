/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


function handleNews(data){
  console.log(event.target.value);
  console.log(this.value)
  document.querySelector('.search input[name="news"]').addEventListener('input', (event)=>{
	  const keyword = this.value;
    const filtered = data.news.filter(m => {
    return m.context.toLowerCase().includes(keyword.toLowerCase());
    }
  );
document.querySelector('.news-list').innerHTML = renderNewsItems(filtered);
});
}



console.log('AA')


fetch("data.json").then(response => {
  return response.json();
})
.then(data => {
  console.log(data, "Data");
  
  renderMainPage(data)
  })
  
  function renderMainPage(data) {
    handleNews(data);
    document.querySelector('.containerabout').innerHTML = `
        ${renderNavbar('main', Object.keys(data))}
        <div class="col-12">
          <br /><br />
          <h1 class="animate__animated animate__infinite animate__swing animate__delay-2s">Kathryn Tatum</h1>
        </div>
        ${renderAbout(data.about)}
        <br /><br /><br /><br />
    `;
    
    document.querySelector('.containernews').innerHTML = `
      <div class="col-12">
          <br /><br />
          <h1 class="animate__animated animate__infinite animate__pulse animate__delay-2s">News About Kathryn</h1>
        </div>
        <br />
        ${renderNews(data.news)}
    `;
    document.querySelector('.containerprojects').innerHTML = `
      <div class="col-8">
        <br /><br />
        <h1 class="animate__animated animate__infinite animate__rubberBand animate__delay-2s">Projects</h1>
        </div>
        ${renderProjects(data.projects)}
    `;
  }

    
  
  function renderNavbar(page){ 
    return `
     <nav>
      <ul>
        <li><a class="nav-link" href="#about">About</a></li>
        <li><a class="nav-link" href="#news">News</a></li>
        <li><a class="nav-link" href="#projects">Projects</a></li>
      </ul>
     </nav>
    `;
  }
  
  function renderAbout(about){ 
    console.log(about, "About");
    return `
      <section id="about">
      <div class="row">
        <div class="col-4">
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

  function renderNews(news){ 
    console.log(news, "News");
    return `
      <section id="news">
      <div class="row">
        <div class="col-12">
          <div class="search">
            <input type="search" name='news' placeholder="Search News...">
          </div>
        </div>
        <div class="col-4">
        </div>
        <div class="col-4">
        </div>
        <div class = "news_items">
           ${renderNewsItems(news.slice(0, 5))}
       <div>
      </div>
      </section>
    `;
  }

  function renderNewsItems(news) {
  return news
    .map(
      d => `
   <div class="row">
          <div class="col-4">
          ${d.date}
          </div>
          <div class="col-8">
            ${d.content}
          </div>
        </div>  
  `
    )
    .join("");
}


  
  
  function renderProjects(projects){
    console.log(projects, "Projects")
    return `
    <section id="projects">
    <div class="row">
      <div class="col-8">
        <span class="highlight">${(projects.title1)}</span>
        <br />
        <br />${(projects.description1)}
      </div>
      <div class="col-4">
        <br /> <img src = ${(projects.photo1)} class="passionpic" width="100%" height="100%"><br />
        <br />
      </div>
      <div class="col-6">
        <br />${(projects.words)}<br />
        <br />${(projects.experiences)}<br />
        <br />
        <span class="linkedsite">Visit the Passion Brainstorm site <a href="https://passionbrainstorm.glitch.me/">here!</a></span>
      </div>
      <div class="col-4">
        <br />
        <br /> <img src = ${(projects.wordmap)} class="wordmap" width="100%" height="100%"><br />
      </div>
      <div class="col-4">
        <br /><span class="highlight2">${(projects.title2)}</span><br />
        <br />${(projects.description2)}<br />
      </div>
      <div class="col-4">
        <br /><img src = "https://cdn.glitch.com/ab621e97-0054-4a80-9f77-cec959e02051%2FImage%204-17-20%20at%2011.05%20PM.jpg?v=1612411325418" class="swift" width="280" height="500"><br />
      </div>
    </div>
    </projects>
    `
}