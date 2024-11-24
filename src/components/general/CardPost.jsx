import React from "react";

//import DateID
import DateID from "../../utils/DateID";

//import link
import { Link } from "react-router-dom";

export default function CardPost(props) {
  // CSS internal untuk kartu dan gambar
  const cardStyle = {
    height: "400px", // Tinggi kartu diperbesar
    display: "flex",
    flexDirection: "column", // Elemen diatur secara vertikal
    justifyContent: "space-between",
    overflow: "hidden", // Memastikan konten tidak keluar dari batas kartu
    borderRadius: "0.5rem", // Rounded pada kartu
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan lembut
  };

  const imageStyle = {
    height: "50%", // Gambar mengambil 50% dari tinggi kartu
    width: "100%", // Gambar memenuhi lebar kartu
    objectFit: "cover", // Memastikan gambar dipotong sesuai proporsi
    borderTopLeftRadius: "0.5rem", // Rounded hanya pada sisi atas gambar
    borderTopRightRadius: "0.5rem",
  };

  const bodyStyle = {
    padding: "1rem", // Memberikan ruang dalam untuk konten
    flexGrow: 1, // Konten teks mengambil sisa ruang
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const footerStyle = {
    padding: "0.5rem 1rem", // Spasi untuk footer
    backgroundColor: "#f8f9fa", // Warna latar belakang untuk pembeda
    borderTop: "1px solid #e9ecef",
    textAlign: "right",
  };

  const textIconStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "0.9rem", // Ukuran teks yang lebih kecil
    gap: "0.5rem", // Jarak antar teks dan ikon
  };

  return (
    <div className="col-md-4 mb-3" key={props.key}>
      <Link to={`/posts/${props.slug}`} className="text-decoration-none">
        <div className="card w-100 rounded-3 border-0" style={cardStyle}>
          {/* Gambar Kartu */}
          <img src={props.image} alt={props.title} style={imageStyle} />
          {/* Konten Kartu */}
          <div className="card-body" style={bodyStyle}>
            <h5 className="card-title">
              {props.title.length > 50
                ? `${props.title.substring(0, 50)}...`
                : props.title}
            </h5>
            <p className="card-text mt-3">
              {props.content.length > 40 ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: props.content.substring(0, 40) + "...",
                  }}
                ></span>
              ) : (
                <span
                  dangerouslySetInnerHTML={{
                    __html: props.content,
                  }}
                ></span>
              )}
            </p>
          </div>
          {/* Footer Kartu */}
          <div className="card-footer" style={footerStyle}>
            <small className="text-body-secondary" style={textIconStyle}>
              <i className="fa fa-calendar"></i> {DateID(new Date(props.date))}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}
