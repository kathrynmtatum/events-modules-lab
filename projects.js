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
  let buttons = document.querySelectorAll('.filter_tags input[name="filter"]');
  buttons.forEach(cond =>
    cond.addEventListener("change", function(event) {
      if (this.value === "all") {
        return (document.querySelector(
          ".project-list"
        ).innerHTML = `<div class="row">
            ${renderProjectItems(data.projects)}
            </div>`);
      }
      const choice = this.value;
      const filtered = data.projects.filter(m => {
        let x = m.stringtags.toString();
        console.log(x.includes(this.value));
        return x.includes(this.value);
      });
      document.querySelector(".project-list").innerHTML = renderProjectItems(
        filtered
      );
    })
  );
}


export function renderProjectItems(projects) {
  return projects
    .map(
      d => `
      <div class="col-4">
        <div class="project-title">
          <a href="?project=${d.id}"><strong>${d.title}</strong></a>
        </div>
        <div class="tag-flex-container tags">
          ${renderTags(d)}
        </div>
        </br> 
        <img src="${d.photo}" width="500px">
        <br>
        <p> "${d.description}" </p>  
		</div>`
    )
    .join("\n");
}


export function renderTags(projects) {
    return projects.tags.map(d => `
    ${d}
    `).join('');
  }