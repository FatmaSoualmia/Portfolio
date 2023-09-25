import HomeContact from "../components/HomeContact";

function Home() {
  return (
    <div>
      <div className="home-section">
        <span className="home-greeting">Hello</span>
        <div className="home-info">I am Fatma Soualmia</div>
      </div>
      <HomeContact />
    </div>
  );
}

export default Home;
