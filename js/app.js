// console.log('hello');

 const loadCategory = async() =>{
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
 loadCategory();