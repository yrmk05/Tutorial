import Layout from "./components/Layout"

export default function About(){
  return (
    <h1>About Page</h1>
  )
}

About.getLayout = function getLayout(page){
  return(
    <Layout>{page}</Layout>
  )
}



// function About(){
//   return (
//     <h1>About Page</h1>
//   )
// }

// export default About

// const About = () =>{
//   return (
//     <h1>About Page</h1>
//   )
// }

// export default About