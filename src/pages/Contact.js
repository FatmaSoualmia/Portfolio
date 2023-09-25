import Registration from "../components/Registration";

function Contact() {
  return (
    <div className="row justify-content-center my-2 align-items-center">
      <div className="col">
      <div className="contact-section">
      <div className="row">
        <div className="col contact-title">
          <span>GET IN TOUCH</span>
        </div>
        <form action="#">
          <div className="col input">
            <input
              id="name"
              className="input-item"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              id="email"
              className="input-item"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="col">
            <textarea
              id="message"
              className="textarea"
              placeholder="Message"
              name="message"
              cols="38"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="col">
            <button className="contact-btn" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>  
      </div>
    </div>
    <div className="col my-4 text-center">
    <Registration />
    </div>
    </div>
    
  );
}

export default Contact;
