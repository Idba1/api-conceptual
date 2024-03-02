// console.log('hello');

 const loadCategory = async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    // console.log(data.data.news_category);
    data.data.news_category.forEach((item) => {
        console.log(item)
    })
 }
 loadCategory();