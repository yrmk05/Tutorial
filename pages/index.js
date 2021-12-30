import Head from "next/head";
import Link from "next/link";
import Layout from "./components/Layout";


const products = [
  {name:"bag"},
  {name:"shoes"},
  {name:"socks"}
]
 
export default function Home (){
  return (
    <>
      <Head>
        <title>トップページ</title>
      </Head>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
        <h1>Hello Next.js</h1>

    </>
  )
}