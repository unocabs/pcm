import { useEffect, useState } from "react";
import * as actionCart from "../redux/actions/actionCart";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { renderLoading, renderLoadingImage } from "../utilities/loader";
import Image from "next/image";
import Link from "next/link";

export default function Collection() {
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCart, dispatch);
  const [activeFilter, setActiveFilter] = useState("NECKLACES");
  const [loading, setLoading] = useState(false);
  const [productList] = useCollection(
    db.collection("products").orderBy("timestamp", "desc")
  );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [activeFilter]);

  const getStatusColor = (status) => {
    if (status === "sale") {
      return "bg-warning";
    } else if (status === "sold") {
      return "bg-danger";
    } else if (status === "reserved") {
      return "bg-secondary";
    }
  };

  const addProductToCart = (product) => {
    addToCart(product);

    toast.success(` ⭐ ${product.productName} has been added to your cart!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const renderCollectionList = () => {
    return productList?.docs
      .filter((product) => product.data().type === "REGULAR")
      .filter((product) => product.data().filter === activeFilter)
      .map((item) => (
        <div className="col-md-6 col-lg-4 p-2" key={item.id}>
          <div className="collection-img position-relative d-flex justify-content-center align-items-center">
            <Link href={`/product/${item.id}`}>
              {item.data().postImage ? (
                <Image
                  src={item.data().postImage}
                  alt={item.data().productName}
                  width="320"
                  height="400"
                />
              ) : (
                renderLoading()
              )}
            </Link>

            <span
              className={`${getStatusColor(
                item.data().status
              )} position-absolute d-flex align-items-center justify-content-center text-white`}
            >
              {item.data().status.toUpperCase()}
            </span>
          </div>
          <div className="text-center">
            <p className="text-capitalize my-1">{item.data().productName}</p>
            <span className="fw-bold lead fs-4">
              ₱ {parseInt(item.data().price).toLocaleString()}
            </span>
            <br />
            <button
              onClick={() => addProductToCart(item.data())}
              className="btn btn-primary mt-3 w-50"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ));
  };

  return (
    <section id="collection" className="py-5">
      <ToastContainer />
      <div className="container">
        <div className="row g-0 mt-5">
          <div className="d-flex flex-wrap mt-5 justify-content-center">
            <button
              className={`btn m-2 fw-bold ${
                activeFilter === "ALL" && "active-tab"
              }`}
              onClick={() => setActiveFilter("ALL")}
            >
              ALL
            </button>
            <button
              className={`btn m-2 fw-bold ${
                activeFilter === "AUTO" && "active-tab"
              }`}
              onClick={() => setActiveFilter("AUTO")}
            >
              AUTO
            </button>
            <button
              className={`btn m-2 fw-bold ${
                activeFilter === "RINGS" && "active-tab"
              }`}
              onClick={() => setActiveFilter("RINGS")}
            >
              RINGS
            </button>
            <button
              className={`btn m-2 fw-bold ${
                activeFilter === "EARRINGS" && "active-tab"
              }`}
              onClick={() => setActiveFilter("EARRINGS")}
            >
              EARRINGS
            </button>
            <button
              className={`btn m-2 fw-bold ${
                activeFilter === "BRACELETS" && "active-tab"
              }`}
              onClick={() => setActiveFilter("BRACELETS")}
            >
              BRACELETS
            </button>
          </div>
          <div className="collection-list row mt-4 gx-0 gy-3">
            {loading ? renderLoading() : renderCollectionList()}
          </div>
        </div>
      </div>
    </section>
  );
}
