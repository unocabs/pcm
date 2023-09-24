import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMoon,
  faGem,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Form, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function NavigationBar() {
  const cartProducts = useSelector((state: any) => state.cartProducts);

  return (
    <Navbar bg="light" expand="lg" className="bg-white py-4 fixed-top">
      <Container>
        <Link
          href="/"
          className="navbar-brand order-lg-0"
        >
          <Image
            src="/logo1.png"
            alt="contact"
            width="1000"
            height="30"
          />
          <span id="brand-name">Philippine Card Marketplace</span>
          <span id="brand-name2">PCM</span>
        </Link>

        <div className="nav-btns order-lg-2">
          <Link href="/cart" className="btn position-relative" type="button">
            <FontAwesomeIcon icon={faShoppingCart} height={20} />
            <span className="nav-btn-label"> CART </span> (
            {cartProducts ? cartProducts?.length : 0})
          </Link>
          <Link href="/profile" className="btn position-relative" type="button">
            <FontAwesomeIcon icon={faUser} height={20} />
            <span className="nav-btn-label"> Profile </span>
          </Link>
        </div>


        <div id="searchbar" className="order-lg-1">
          <Form className="d-flex">
            <Form.Control
              type="search"
              className="w-100"
              placeholder="Search your card"
              aria-label="Search"
            />
            <div className="nav-btns">
              <Link href="/cart" className="btn position-relative m-0" type="button">
                <FontAwesomeIcon icon={faSearch} height={20} />
              </Link>
            </div>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
}
