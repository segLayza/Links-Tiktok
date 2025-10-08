import links from "../utilities/Links";
import styleGn from "../styles/StyleGr.module.css";
import Link from "./Link";

function IteraLinks() {
  return (
    <div className={styleGn.linkContainer}>
      {links.map((link, index) => (
        <Link key={index} name={link.name} url={link.url} />
      ))}
    </div>
  );
}

export default IteraLinks;
