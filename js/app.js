// console.log('hello');

const loadCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    // console.log(data.data.news_category);

    // get container where you append child
    const categoryContainer = document.getElementById('category-bar-container');

    data.data.news_category.forEach((item) => {
        // console.log(item);
        const div = document.createElement('div');
        div.innerHTML = `<button>${item.category_name}</button>`;
        categoryContainer.appendChild(div);
    })
}

const loadNews = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const data = await response.json();
    // console.log(data.data);
    const newsContainer = document.getElementById("news-container");
    data.data.forEach((singleNews) => {
        // console.log(item);
        const div = document.createElement("div");
        div.classList.add("singleNews");
        div.innerHTML = `
    
            <div class="news-photo">
              <img
                src=${singleNews.image_url}
                alt=""
              />
            </div>
            <div class="news-info">
              <div class="news-header">
                <h4>${singleNews.title.slice(0, 20)}</h4>
                <p class="news-badge">
                ${singleNews.rating.badge} <sup> <h6 class="news-rating"> ${
          singleNews.rating.number
        }</h6></sup>
                </p>
              </div>
              <p>
              ${singleNews.details.slice(0, 200)}
              </p>
    
              <div class="news-footer">
                <div class="author">
                  <div class="">
                    <img
                      class="author-img"
                      src=${singleNews.author.img}
                      alt=""
                    />
                  </div>
                  <div class="author-info">
                    <h6> ${singleNews.author.name}</h6>
                    <p>Date: ${singleNews.author.published_date}</p>
                  </div>
                </div>
                <div class="Views author">
                  <img
                    class="view-img"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"
                    alt=""
                  />
                  <p>${singleNews.total_view}</p>
                </div>
                <div class="details-btn-container">
                  <button onclick="handleDetails(${JSON.stringify({name:"gias"})})" class="details-btn">Details</button>
                </div>
            </div>
          </div>
          `;
        newsContainer.appendChild(div);
      });
}
loadNews();
loadCategory();