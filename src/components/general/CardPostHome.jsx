import React from "react";

//import link
import { Link } from "react-router-dom";

//import DateID
import DateID from "../../utils/DateID";

export default function CardPostHome(props) {
  // CSS internal untuk kartu dan gambar
  const cardStyle = {
    width: "100%", // Lebar penuh untuk responsif
    height: "175px", // Tinggi tetap untuk persegi panjang
    display: "flex",
    flexDirection: "row", // Elemen diatur horizontal
    overflow: "hidden", // Memastikan konten tidak keluar
    borderRadius: "0.5rem", // Rounded pada kartu
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan lembut
  };

  const imageStyle = {
    width: "35%", // Gambar mengambil 35% dari lebar kartu
    height: "100%", // Gambar memenuhi tinggi kartu
    objectFit: "cover", // Memastikan gambar dipotong sesuai proporsi
    borderRadius: "0.5rem 0 0 0.5rem", // Rounded hanya pada sisi kiri gambar
  };

  const bodyStyle = {
    width: "65%", // Konten mengambil 65% dari lebar kartu
    padding: "1rem", // Memberikan ruang dalam untuk konten
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const textIconStyle = {
    fontSize: "1rem", // Ukuran default ikon dan teks
  };

  // Media query untuk mobile
  const mobileStyle = `
    @media (max-width: 768px) {
      .card-title {
        font-size: 0.9rem; /* Ukuran lebih kecil untuk judul */
      }
      .icon-text {
        font-size: 0.75rem; /* Ukuran lebih kecil untuk ikon dan teks */
      }
      .fa-user, .fa-calendar {
        font-size: 0.8rem; /* Ukuran lebih kecil untuk ikon */
      }
    }
  `;

  return (
    <>
      {/* Media Query Styles */}
      <style>{mobileStyle}</style>
      <div className="col-md-6 mb-3" key={props.key}>
        <Link to={`/posts/${props.slug}`} className="text-decoration-none">
          <div className="card rounded-3 border-0" style={cardStyle}>
            {/* Bagian Gambar */}
            <img src={props.image} style={imageStyle} alt={props.title} />
            {/* Bagian Konten */}
            <div style={bodyStyle}>
              <h5 className="card-title">
                {props.title.length > 50
                  ? `${props.title.substring(0, 50)}...`
                  : props.title}
              </h5>
              <div className="d-flex justify-content-between">
                <div className="start-0 icon-text">
                  <i className="fa fa-user"></i> {props.user}
                </div>
                <div className="end-0 icon-text">
                  <i className="fa fa-calendar"></i>{" "}
                  {DateID(new Date(props.date))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
