import Head from "next/head"

import { Navbar } from "../ui"

const origin = (typeof window === 'undefined') ? "":window.location.origin

export const Layout = ({children,title}) => {
  
  return (
    <>
    <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Romy Rodriguez"/>
        <meta name="description" content={`Informacion sobre el pokemon ${title}`}/>
        <meta name="keywords" content={`${title},pokemon,pokedex`}/>
        <meta property="og:title" content={`Informacion Sobre ${title}`} />
        <meta property="og:description" content={`Esta Pagina es Sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
    </Head>

   <Navbar/>

    <main style={{
      padding:'0px 20px'
    }}>
        {children}
    </main>
    </>
  )
}
