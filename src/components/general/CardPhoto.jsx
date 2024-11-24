import React from "react";

export default function CardPhoto(props) {
  // CSS untuk membuat ukuran card seragam
  const cardStyle = {
    height: "350px", // Tinggi tetap untuk kartu
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan lembut
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%", // Gambar memenuhi lebar kartu
    height: "70%", // Gambar mengambil 70% dari tinggi kartu
    objectFit: "cover", // Memastikan gambar tetap proporsional
    borderRadius: "0.5rem 0.5rem 0 0", // Rounded hanya di bagian atas gambar
  };

  const captionStyle = {
    marginTop: "0.5rem",
    fontSize: "0.9rem",
    fontStyle: "italic",
    color: "gray",
  };

  return (
    <div className="col-md-4 mb-4">
      <div
        className="card border-0 shadow-sm rounded-3 text-center"
        key={props.key}
        style={cardStyle}
      >
        <div className="card-body mt-2">
          <div className="mb-3">
            <img
              src={props.image}
              alt={props.caption}
              style={imageStyle}
            />
          </div>
          <hr />
          <h6 style={captionStyle}>
            <i>{props.caption}</i>
          </h6>
        </div>
      </div>
    </div>
  );
}
