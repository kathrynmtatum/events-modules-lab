export default function renderNews(news){ 
    console.log(news, "News");
    return `
      <section id="news">
      <div class="row">
        <div class="col-4">
          <div class="search">
            <br /><input type="search" name='news' placeholder="Search News...">
            <br />
          </div>
        </div>
        <div class="col-4">
        </div>
      <div class="col-8">        
        <div class = "news_items">
          <br />
           ${renderNewsItems(news.slice(0, 7))}
        </div>
       </div>
      </div>
      </section>
    `;
  }

export function renderNewsItems(news) {
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

export function handleNews(data){
  document.querySelector('.search input[name="news"]').addEventListener('input', (event)=>{
	  const keyword = event.target.value;
    const filtered = data.news.filter(m => {
    return m.content.toLowerCase().includes(keyword.toLowerCase()) || m.date.toLowerCase().includes(keyword.toLowerCase());
    }
  );
document.querySelector('.news_items').innerHTML = renderNewsItems(filtered);
});
}
