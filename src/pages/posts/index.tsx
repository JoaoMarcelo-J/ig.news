import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março 2021</time>
            <strong>Criando teste blablabla teste teste 123</strong>
            <p>
              Esse parágrage é um teste não leia, uel uel uel uel eu quero mel
              mel mel mel com suco de maçã quero quero quero :)
            </p>
          </a>
          <a href="#">
            <time>12 de março 2021</time>
            <strong>Criando teste blablabla teste teste 123</strong>
            <p>
              Esse parágrage é um teste não leia, uel uel uel uel eu quero mel
              mel mel mel com suco de maçã quero quero quero :)
            </p>
          </a>
          <a href="#">
            <time>12 de março 2021</time>
            <strong>Criando teste blablabla teste teste 123</strong>
            <p>
              Esse parágrage é um teste não leia, uel uel uel uel eu quero mel
              mel mel mel com suco de maçã quero quero quero :)
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
