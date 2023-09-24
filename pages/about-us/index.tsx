import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Talasulod Jewelry</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <NavigationBar />
      <section id="aboutUs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-1 order-lg-1">
              <div className="title pt-3 pb-5">
                <h2 className="position-relative d-inline-block">About Us</h2>
              </div>
              <p className="lead text-muted">Talasulod Jewelry</p>
              <p className="fs-6">
                We are currently located at Yumul Street Mining, Angeles City
                Pampanga. We offer a variety gold accessories, from necklace,
                braclets, rings, etc. We do the delivery every saturday around
                Pampanga but expedited/express shipping is also an option.
              </p>
            </div>

            <div className="col-lg-6 order-lg-0">
              <Image
                src="/banner.gif"
                alt="about-us"
                width="500"
                height="1000"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contactUs">
        <div className="container pb-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mt-3">Let us know how we can help you.</h3>
              <Link href="/" className="brand text-decoration-none text-white">
                Talasulod
              </Link>
              <p className="text-white text-muted">
                Please send us a message, we usually send our reply between 8am
                to 10pm.
              </p>
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
              <br />
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
            <div className="col-lg-6">
              <Image
                src="/6.png"
                alt="contact"
                width="1000"
                height="400"
                className="w-100"
              />
            </div>
          </div>
        </div>
        <br />
      </section>

      <Footer />
    </>
  );
}
