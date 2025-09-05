//arrow function
// const Home = ()=>{}


//function

//function Home() {}

//export default Home;

//export function

import style from "./page.module.css";

export default function Home(){
  return (
    <main className={style.container}>
      <h1 className={style.title}>Hello World</h1>
      <p className={style.subtitle}>Minha Primeira Página Next</p>
    </main>
  );
}