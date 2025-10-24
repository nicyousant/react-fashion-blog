function Article(props) {
  
   let {blogdate, blogtitle, src, alt, blogpost} = props.obj

  return (
    <section>
        <article>
          <time dateTime="2020-11-12">{blogdate}</time>
          <h2 className="blog-title">{blogtitle}</h2>
          <img src={src} alt={alt}/>
          <p className="blog-post">{blogpost}</p>
          <p className="continues"><a href="...">Continues ...</a></p>
          <hr/>
        </article>
    </section>
    )
}

export default Article