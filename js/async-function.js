const a = 5;
const b = 20;
const sum = a+b;

console.log("hello from console");

const test = async () => {
    const responsse = await fetch ('https://openapi.programming-hero.com/api/news/categories');
    // console.log(responsse);
    const data = await responsse.json();
    console.log(data);
}
test();

console.log(sum);