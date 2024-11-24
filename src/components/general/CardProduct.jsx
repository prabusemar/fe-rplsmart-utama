import React from "react";

//import money format
import MoneyFormat from "../../utils/MoneyFormat";

//import link
import { Link } from "react-router-dom";

export default function CardProduct(props) {
  // CSS internal untuk kartu dan elemen
  const cardStyle = {
    height: "450px", // Tinggi kartu tetap
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan lembut
  };

  const imageStyle = {
    height: "60%", // Gambar tetap proporsional
    width: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
  };

  const bodyStyle = {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
  };

  const priceStyle = {
    marginBottom: "0.5rem", // Jarak bawah harga lebih kecil
  };

  const hrStyle = {
    margin: "0.5rem 0", // Jarak atas dan bawah garis horizontal lebih kecil
  };

  const buttonStyle = {
    marginTop: "0.5rem", // Jarak atas tombol lebih kecil
  };

  return (
    <div className="col-md-4 mb-3" key={props.key}>
      <Link to={`/products/${props.slug}`} className="text-decoration-none">
        <div
          className="card mb-3 w-100 rounded-3 border-0"
          style={cardStyle}
        >
          {/* Gambar Produk */}
          <img
            src={props.image}
            alt={props.title}
            style={imageStyle}
          />
          {/* Konten Produk */}
          <div className="card-body" style={bodyStyle}>
            <h5 className="card-title">
              {props.title.length > 50
                ? `${props.title.substring(0, 50)}...`
                : props.title}
            </h5>
            <p className="card-text" style={priceStyle}>
              {MoneyFormat(props.price)}
            </p>
            <hr style={hrStyle} />
            {/* Tombol "Beli Sekarang" */}
            <a
              href={`https://api.whatsapp.com/send?phone=${props.phone}&text=Halo%20kak%2C%20saya%20ingin%20pesan%20%3A%20${props.title}`}
              className="btn btn-primary w-100"
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i> Pesan Sekarang
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
}
