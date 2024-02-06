import Api from "../ApiKey";
import Hero from "../layout/components/Hero";
import Row from "../layout/components/Row";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Row rowId="1" title="Now Playing" fetchUrl={Api.nowPlaying}></Row>
      <Row rowId="2" title="Up Coming" fetchUrl={Api.upComing}></Row>
      <Row rowId="3" title="Popular" fetchUrl={Api.popular}></Row>
      <Row rowId="4" title="Top Rated" fetchUrl={Api.topRated}></Row>
    </div>
  );
};

export default Home;
