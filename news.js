export default function renderNews(news){ 
    console.log(news, "News");
    return `
      <section id="news">
      <h1 class="animate__animated animate__infinite animate__pulse animate__delay-2s">News About Kathryn</h1>
      <div class="row">
       <div class="col-6">
        <img src = "https://cdn.glitch.com/ab621e97-0054-4a80-9f77-cec959e02051%2FIMG_2691.jpg?v=1612410871596" class="news1" width="360" height="360">
      </div>
      <div class="col-4">
        <img src = "https://cdn.glitch.com/ab621e97-0054-4a80-9f77-cec959e02051%2F1428FE5E-E13B-4AF9-8F1C-1BC44D766323.jpg?v=1612410847923" alt="photo" class="news1" width="360" height="360">
      </div>
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
