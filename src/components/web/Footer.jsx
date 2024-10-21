import React from "react";

export default function footer() {
  return (
    <footer>
      <div className="container-fluid footer-top">
        <div className="row p-4">
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              TENTANG
              <strong style={{ color: "#ffd22e" }}> RPLSMART</strong>
            </h5>
            <hr />
            <div className="text-center">
              <img src="/images/PPLG.png" width="85" />
            </div>
            <p className="text-justify mt-3">
              RPLSMART adalah portal berita digital yang berisi berita-berita yang membahas tentang jurusan RPL / PPLG SMKN 1 Banjar dan seluruh update kegiatannya. Portal ini dibuat untuk memudahkan siswa dan guru dalam mengakses informasi yang dibutuhkan.
            </p>
          </div>
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              DOWNLOAD <strong style={{ color: "#ffd22e" }}> APLIKASI</strong>
            </h5>
            <hr />
            <div className="text-left">
              <a href="#" target="_blank">
                <img
                  src="/images/playstore.png"
                  width={"180"}
                  className="text-center align-items-center"
                />
              </a>
            </div>
            <p className="text-justify mt-2 text-left">
              Dapatkan info update Jurusan RPL SMKN 1 Banjar lebih cepat melalui aplikasi Android.
              Silahkan unduh melalui PlayStore.
            </p>
          </div>
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              KONTAK <strong style={{ color: "#ffd22e" }}>RPLSMART</strong>
            </h5>
            <hr />
            <p>
              <i className="fa fa-map-marker"></i> Jl. KH. Mustofa Lingk. Parunglesang, RT.05/RW.10, Banjar, Kec. Banjar, Kota Banjar, Jawa Barat 46311
              <br />
              <br />
              <i className="fas fa-envelope"></i> info@rplsmart.com
              <br />
              <br />
              <i className="fas fa-phone"></i> +62 896-5973-5637
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-bottom">
        <div className="row p-3">
          <div className="text-center text-white font-weight-bold">
            Copyright © 2024 RPLSmart. Created by Pribadi Ramadhan. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
