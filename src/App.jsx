import Header from './Header'
import Nav from './Nav'
import Article from './Article'
import Footer from './Footer'
import { articles } from './data'
import './style.css'

function App() {



  return (
    <>
      <Header/>
      <Nav/>
      {articles.map((article)=>(
        //  <Article blogdate={article.blogdate} blogtitle={article.blogtitle} src={article.src} alt={article.alt} blogpost={article.blogpost}/>
        <Article key={article.blogtitle} obj={article} />
      ))}
     
      <Footer/>
    </>
  )
}

export default App
