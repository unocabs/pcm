import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-3">
            <Link href="/" className="brand text-decoration-none text-white">
              Talasulod
            </Link>
            <p className="text-white mt-3 text-muted">
              We are currently located at Yumul Street Mining, Angeles City
              Pampanga. We offer a variety gold accessories, from necklace,
              braclets, rings, etc. We do the delivery every saturday around
              Pampanga but expedited/express shipping is also an option.
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light">Links</h5>
            <ul className="list-unstyled">
              <li className="my-3">
                <Link
                  href="/"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} height={20} /> Home
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/about-us"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} height={20} /> About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Contact Us</h5>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faEnvelope} height={20} />
              </span>
              <span className="fw-light">talasulodjewelry@gmail.com</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faMapMarked} height={20} />
              </span>
              <span className="fw-light">
                Angeles City, Pampanga Philippines
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faPhone} height={20} />
              </span>
              <span className="fw-light">0997 720 0248</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="text-decoration-none text-muted fs-4 me-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=100090652545502"
                  target="_blank"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    height={20}
                    cursor="pointer"
                  />
                </Link>
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <Link
                  href="https://www.instagram.com/talasuludjewelry/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR24RGG3au3VSdINnRFQiXvGPPC3hBw467iTkT7drzaWoakfi89tDLbC6ro"
                  target="_blank"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    height={20}
                    cursor="pointer"
                  />
                </Link>
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <Link
                  href="https://www.tiktok.com/@talasuludjewelry?_t=8aTLQ69iHt1&_r=1&fbclid=IwAR2AD-3O5Hfq1XvO3247Kx3XeNDKvqhUGpmNfyojYNmeuIPKJAvI3gRD5tI"
                  target="_blank"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon
                    icon={faTiktok}
                    height={20}
                    cursor="pointer"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
