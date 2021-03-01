export default function renderProjects(projects){
    console.log(projects, "Projects")
    return `
    <section id="projects">
    <h1 class="animate__animated animate__infinite animate__rubberBand animate__delay-2s">Projects</h1>
    <div class="row">
      <div class="col-8">
      
        <div class="filter">
	        <label>
	          <input type="radio" name="filter" value="all" checked>
            All
          </label>
	        <label>
	          <input type="radio" name="filter" value="website">
            Website
	        </label>
          <label>
	          <input type="radio" name="filter" value="mobile app">
            Mobile App
	        </label>
        </div>
        <div class="project-list">
          <div class="row">
            ${renderProjectItems(projects)}
          </div>
        </div>
    </section>
    `
}



export function handleProjectFilter(data){
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach(cond =>cond.addEventListener("change", function(event) {
    let tag = event.target.value;  
    if (tag === "all") {
        document.querySelector(".project-list").innerHTML = renderProjectItems(data.projects);
        console.log("all")
      }
      else {
        const filtered = data.projects.filter(projects=>((projects.tags.toLowerCase()===(event.target.value.toLowerCase()) || (projects.tags.toLowerCase()===(event.target.value.toLowerCase())))));
        const filtered2 = data.projects.filter(project=>(console.log(project.tags[0].toLowerCase())));

        document.querySelector('.project-list').innerHTML = renderProjectItems(filtered);
        console.log(filtered)
        }
    }));
}

export function renderProjectItems(projects) {
  return projects.map(d => `
      <div>
        <div>
          <br /><br />
          <span class="highlight">${d.title}</strong></a>
          <div class="row-left tag">
              <div class= "tag-1 col-2 center-text">
              <br />
                <a href=${d.link}>${d.projectpage}</a></li>
              </div>
              <br /><br />
          </div>
          <div class="mtop">
              <img src="${d.photo}" class="app" height=500px>                        
          </div>
        </div>
    </div>
    `).join('');
}

/*
export function renderTags(projects) {
    return projects.tags.map(d => `
    ${d}
    `).join('');
  }
*/