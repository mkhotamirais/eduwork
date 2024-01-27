import { H2 } from "../../components/Tags";

const Asynchronous = () => {
  return (
    <div>
      <H2>1. Jelaskan pengertian asynchronous dan synchronous</H2>
      <ul className="list-disc list-inside">
        <li>Asynchronous: cara eksekusi program yang non-blocking; synchronous: cara eksekusi program yang blocking</li>
        <li>
          Blocking: tidak menjalankan task selanjutnya jika task sebelumnya belum selesai. Non-blocking tetap menjalankan
          task selanjutnya walau task sebelumnya belum selesai
        </li>
        <li>
          untuk melihat visualisasinya, jalankan codenya di{" "}
          <a href="https://www.jsv9000.app/" className="underline">
            Js Visualizer
          </a>
        </li>
        <li>base</li>
        <pre>{`
console.log("task1")
console.log("task2")
console.log("task3")
`}</pre>
        <li>call stack</li>
        <pre>{`
function Fn1(){
  console.log('my task')
}
function Fn2(){
  return Fn1()
}
function Fn3(){
  return Fn2()
}
Fn3()`}</pre>
        <li>task queue</li>
        <pre>{`
setTimeout(function Fn1(){
  console.log("task1")
}, 3000)
setTimeout(function Fn2(){
  console.log("task2")
}, 1000)
setTimeout(function Fn3(){
  console.log("task3")
}, 2000)
function Fn4(){
  console.log('task4')
}
Fn4()`}</pre>
        <li>microtask queue</li>
        <pre>{`
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res) => res.json())
.then((data) => console.log(data))
Promise.resolve().then(function Fn1() {
console.log('ditepati')
});
Promise.reject().catch(function Fn3() {
console.log('ingkar')
});`}</pre>
        <li>task vs microtask</li>
        <pre>{`
setTimeout(function Fn1() {
  console.log('task1')
}, 0);
Promise.resolve().then(function Fn2() {
  console.log('ditepati')
})`}</pre>
      </ul>
    </div>
  );
};

export default Asynchronous;
