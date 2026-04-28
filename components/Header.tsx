import Image from "next/image";

const image = (name: string) => `/assets/images/${name}`;

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="nav-group nav-left" aria-label="Primary navigation">
          <a className="nav-link menu-link" href="#">
            <span className="menu-lines" aria-hidden="true">
              <Image src={image("line-menu.svg")} alt="" width={19} height={4} />
              <Image src={image("line-menu.svg")} alt="" width={19} height={4} />
              <Image src={image("line-menu.svg")} alt="" width={19} height={4} />
            </span>
            <span>MENU</span>
          </a>
          <a className="nav-link" href="#about">
            ABOUT
          </a>
          <a className="nav-link search-link" href="#">
            <span className="icon-search" aria-hidden="true">
              <Image
                className="search-ring"
                src={image("icon-search-ring.svg")}
                alt=""
                width={16}
                height={16}
              />
              <Image
                className="search-handle"
                src={image("icon-search-handle.svg")}
                alt=""
                width={7}
                height={7}
              />
            </span>
            <span>SEARCH</span>
          </a>
        </nav>

        <a className="brand-logo" href="#" aria-label="OWLHOME home">
          OWLHOME
        </a>

        <nav className="nav-group nav-right" aria-label="Product navigation">
          <a className="nav-link" href="#">
            PRODUCTS
          </a>
          <a className="nav-link" href="#">
            CONSTRUCTION
          </a>
        </nav>

        <div className="header-actions" aria-label="Account and cart">
          <a className="icon-cart" href="#" aria-label="Cart">
            <Image
              className="cart-basket"
              src={image("icon-cart-basket.svg")}
              alt=""
              width={25}
              height={16}
            />
            <Image
              className="cart-wheel wheel-left"
              src={image("icon-cart-wheel.svg")}
              alt=""
              width={6}
              height={6}
            />
            <Image
              className="cart-wheel wheel-right"
              src={image("icon-cart-wheel.svg")}
              alt=""
              width={6}
              height={6}
            />
            <Image
              className="cart-handle"
              src={image("icon-cart-handle.svg")}
              alt=""
              width={6}
              height={2}
            />
          </a>
          <a className="icon-user" href="#" aria-label="User account">
            <Image
              className="user-body"
              src={image("icon-user-body.svg")}
              alt=""
              width={18}
              height={8}
            />
            <Image
              className="user-head"
              src={image("icon-user-head.svg")}
              alt=""
              width={9}
              height={9}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
