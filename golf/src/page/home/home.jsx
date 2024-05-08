import {
  Blog,
  Event,
  Header,
  Ecom,
  Footer,
  Competit,
  Prem,
  Coabou,
  MultipleItems,
  Team,
  CountAds,
} from "../../component/index.js";

function Home() {
  return (
    <div>
      <Header />
      <Coabou />
      <Competit />
      <MultipleItems />
      <Team />
      <Event />
      <Prem />
      <Ecom />
      <CountAds />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
