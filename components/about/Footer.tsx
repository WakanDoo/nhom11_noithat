import Image from "next/image";

const image = (name: string) => `/assets/images/${name}`;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#">CONTACT</a>
            <Image src={image("line-footer.svg")} alt="" width={16} height={2} aria-hidden="true" />
            <a href="#">ALL STORES</a>
            <Image src={image("line-footer.svg")} alt="" width={16} height={2} aria-hidden="true" />
            <a href="#">PRIVACY AND&nbsp; DATA PROTEPROTECTION POLICY</a>
          </nav>
          <a className="footer-email" href="mailto:owlhome@gmail.com">
            <Image src={image("footer-owlhome.png")} alt="" width={20} height={14} />
            <span>owlhome@gmail.com</span>
          </a>
        </div>
        <div className="footer-social">
          <span>Follow us on:</span>
          <a href="#" aria-label="Instagram">
            <Image src={image("icon-instagram.png")} alt="" width={36} height={36} />
          </a>
          <a href="#" aria-label="Facebook">
            <Image src={image("icon-facebook.png")} alt="" width={36} height={36} />
          </a>
          <a href="#" aria-label="Gmail">
            <Image src={image("icon-gmail.png")} alt="" width={36} height={36} />
          </a>
        </div>
      </div>
    </footer>
  );
}
