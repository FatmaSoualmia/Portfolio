function OneArticle(props) {
  return (
    <div className="one-article d-block">
      <div className="single-article">
        <div className="image-container">
          <img className="article-picture full-image" src={props.picture} alt="article" />
        </div>
        <h4 className="article-title">{props.title}</h4>
        <p className="article-details">{props.detail}</p>
        <p className="article-description">{props.description}</p>
        <a
          href="https://theme-village.com/html/sumcv/demo/single-blog.html"
          className="read-more-btn my-3"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
}

export default OneArticle;
