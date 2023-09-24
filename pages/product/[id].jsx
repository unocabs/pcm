import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import * as actionCart from "../../redux/actions/actionCart";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Modal, Button } from "react-bootstrap";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const Product = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [showModal, setShowModal] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const { addToCart } = bindActionCreators(actionCart, dispatch);

  const [productList] = useCollection(
    db.collection("products").orderBy("timestamp", "desc")
  );

  const getLike = (product) => {
    if (!isLike) {
      db.collection("products")
        .doc(product.id)
        .update({
          ...product.data,
          likes: product.data().likes + 1,
        });

      setIsLike(true);
    } else {
      db.collection("products")
        .doc(product.id)
        .update({
          ...product.data,
          likes: product.data().likes - 1,
        });

      setIsLike(false);
    }
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const addProductToCart = (product) => {
    addToCart(product);
    setShowModal(true);
  };

  const renderName = (item) => {
    return (
      <Form.Group controlId="formType" className="w-100 py-3">
        <Form.Select
          aria-label="Default select example"
          className="fs-3 fw-bold lead border-none"
          onChange={(e) => router.push(`/product/${e.target.value}`)}
        >
          {productList?.docs
            .filter((product) => product.data().type === "REGULAR")
            .map((product) => (
              <option
                key={product.id}
                value={product.id}
                selected={product.data().productName === item.productName}
              >
                {product.data().productName}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
    );
  };

  const renderProduct = () => {
    return productList?.docs
      .filter((product) => product.id === id)
      .map((item) => (
        <>
          <div className="col-md-6 d-flex justify-content-center align-items-center overflow-hidden">
            <Image
              src={item.data().postImage}
              alt={item.data().productName}
              height="550"
              width="500"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">
              {item.data().filter}
            </h4>
            {renderName(item.data())}
            <div className="row">
              <p className="col-6 display-6 lead fw-bolder">
                ₱ {parseInt(item.data().price).toLocaleString()}
              </p>
              <p
                className="col-6 lead fw-bolder text-secondary d-flex align-items-center"
                role="button"
                onClick={() => getLike(item)}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  height={35}
                  color={isLike ? "gold" : "grey"}
                />
                {item.data().likes}Likes
              </p>
            </div>

            <p className="lead">{item.data().description}</p>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => addProductToCart(item.data())}
            >
              Add to Cart
            </button>
            <Link href="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </Link>
          </div>
        </>
      ));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Talasulod Jewelry</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <div id="product">
          <NavigationBar />
          <div className="container py-5">
            <div className="row py-4">{renderProduct()}</div>
          </div>
        </div>
        <br />
        <Modal show={showModal}>
          <Modal.Header>
            <Modal.Title className="text-dark">Congratulation!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-dark">
            ⭐ Your product has been added to your cart!
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Footer />
      </main>
    </div>
  );
};

export default Product;
