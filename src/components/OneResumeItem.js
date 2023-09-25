function OneResumeItem(props) {
  return (
    <div className="resume-item">
      <span className="resume-date">{props.date}</span>
      <h5 className="resume-title">
        {props.title}
        <span className="resume-place"> {props.place}</span>
      </h5>
      <p className="resume-details">{props.details}</p>
    </div>
  );
}

export default OneResumeItem;
