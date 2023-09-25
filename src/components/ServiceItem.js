function ServiceItem(props) {
  return (
    <div className=" one-service d-block">
      <div className="service-item">
        <span className="service-icon">
          <props.icon size={25} />
        </span>
        <span className="service-name">{props.service}</span>
        <span className="service-description">{props.description}</span>
      </div>
    </div>
  );
}

export default ServiceItem;
