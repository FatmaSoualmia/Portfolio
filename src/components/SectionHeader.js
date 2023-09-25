function SectionHeader(props) {
  let Icon = props.icon;

  return (
    <div className="section-header py-5">
      <span className="section-icon">
        <Icon color="white" />
      </span>
      <div className="section-title">{props.title}</div>
      <div className="section-description">{props.description}</div>
    </div>
  );
}

export default SectionHeader;
