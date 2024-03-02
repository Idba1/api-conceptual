const a = 5;
const b = 20;
const sum = a+b;

console.log("hello from console");

const test = async () => {
    const response = await fetch ('https://openapi.programming-hero.com/api/news/categories');
    // console.log(response);
    const data = await response.json();
    console.log(data);
}
test();

console.log(sum);