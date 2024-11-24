import React from "react";

export default function CardAparatur(props) {
  // CSS untuk membuat ukuran card seragam
  const cardStyle = {
    height: "300px", // Tinggi tetap untuk kartu
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan lembut
  };

  const imageStyle = {
    width: "170px", // Ukuran gambar lebih besar
    height: "170px", // Gambar berbentuk lingkaran
    borderRadius: "50%", // Membuat gambar menjadi lingkaran
    objectFit: "cover",
  };

  const nameStyle = {
    marginTop: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  const roleStyle = {
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
        <div className="card-body">
          <div className="mb-3">
            <img
              src={props.image}
              alt={props.name}
              className="rounded-circle"
              style={imageStyle}
            />
          </div>
          <h5 style={nameStyle}>{props.name}</h5>
          <hr />
          <h6 style={roleStyle}>{props.role}</h6>
        </div>
      </div>
    </div>
  );
}
