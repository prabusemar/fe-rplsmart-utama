import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import component slider
import Slider from "../../../components/web/Slider";

//import service api
import Api from "../../../services/Api";

//import alert
import AlertDataEmpty from "../../../components/general/AlertDataEmpty";

//import Loading
import Loading from "../../../components/general/Loading";

//import card product
import CardProduct from "../../../components/general/CardProduct";

//import card post home
import CardPostHome from "../../../components/general/CardPostHome";

//import Link from react-router-dom
import { Link } from "react-router-dom";

export default function Home() {
  //title page
  document.title = "Selamat Datang di Website RPLSMART";

  //init state products
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  //init state posts
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  //fetch data products
  const fetchDataProducts = async () => {
    setLoadingProducts(true);

    await Api.get("/api/public/products_home").then((response) => {
      setProducts(response.data.data);
      setLoadingProducts(false);
    });
  };

  //fetch data posts
  const fetchDataPosts = async () => {
    setLoadingPosts(true);

    await Api.get("/api/public/posts_home").then((response) => {
      setPosts(response.data.data);
      setLoadingPosts(false);
    });
  };

  //hook useEffect
  useEffect(() => {
    fetchDataProducts();
    fetchDataPosts();
  }, []);

  return (
    <LayoutWeb>
      <Slider />

      {/* Berita Terbaru */}
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="section-title">
              <h4>
                <i className="fa fa-book"></i>
                <strong style={{ color: "rgb(209 104 0)" }}> BERITA </strong>
                TERBARU
              </h4>
            </div>
          </div>
          {loadingPosts ? (
            <Loading />
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <CardPostHome
                key={post.id}
                image={post.image}
                slug={post.slug}
                title={post.title}
                content={post.content}
                user={post.user.name}
                date={post.created_at}
              />
            ))
          ) : (
            <AlertDataEmpty />
          )}
        </div>
        {/* Tombol LIHAT BERITA LAINNYA */}
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <Link to="/posts" className="btn btn-primary">
              Lihat Berita Lainnya
            </Link>
          </div>
        </div>
      </div>

      {/* Produk dan Jasa */}
      <div className="container mt-2 mb-4">
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="section-title">
              <h4>
                <i className="fa fa-shopping-bag"></i>
                <strong style={{ color: "rgb(209 104 0)" }}>
                  {" "}
                  PRODUK DAN JASA{" "}
                </strong>
                RPLSMART
              </h4>
            </div>
          </div>
          {loadingProducts ? (
            <Loading />
          ) : products.length > 0 ? (
            products.map((product) => (
              <CardProduct
                key={product.id}
                image={product.image}
                title={product.title}
                slug={product.slug}
                price={product.price}
                phone={product.phone}
              />
            ))
          ) : (
            <AlertDataEmpty />
          )}
        </div>
        {/* Tombol LIHAT PRODUK LAINNYA */}
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <Link to="/products" className="btn btn-primary">
              Lihat Produk Lainnya
            </Link>
          </div>
        </div>
      </div>
    </LayoutWeb>
  );
}
