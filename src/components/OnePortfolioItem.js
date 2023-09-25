
function OnePortfolioItem(props) {
  return (
    <div>
      <div className="porfolio-item">
        <span className="portfolio-image">
          <img src={props.picture} alt="portfolio" />
        </span>
      </div>
    </div>
  );
}

export default OnePortfolioItem;
