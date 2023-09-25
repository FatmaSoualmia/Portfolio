function OneTestimony(props) {
  return (
    <div className="one-testi">
      <h3 className="testi-title">{props.title}</h3>
      <p className="testi-parag">{props.parag}</p>
      <div className="client-profile container">
        <div className="row">
          <div className="col">
            <img className="client-picture" src={props.picture} alt="client" />
          </div>
          <div className="col">
            <h4 className="client-name">{props.name}</h4>
            <span className="client-occupation">{props.occupation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneTestimony;
