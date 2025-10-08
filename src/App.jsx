import "./App.css";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Link from "./components/Link";
import links from "./utilities/Links";
import styleGn from "./styles/StyleGr.module.css";

function App() {
  return (
    <>
      <Banner />
      <div className={styleGn.linkContainer}>
        {links.map((link, index) => (
          <Link key={index} name={link.name} url={link.url} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
