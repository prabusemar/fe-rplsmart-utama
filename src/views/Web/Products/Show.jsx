import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import service api
import Api from "../../../services/Api";

//import useParams
import { useParams } from "react-router-dom";

//import component loading
import Loading from "../../../components/general/Loading";

export default function WebProductsShow() {
  //init state
  const [product, setProduct] = useState({});
  const [loadingProduct, setLoadingProduct] = useState(true);

  //destruct id
  const { slug } = useParams();

  //fetch data product
  const fetchDetailDataProduct = async () => {
    setLoadingProduct(true);

    await Api.get(`/api/public/products/${slug}`).then((response) => {
      setProduct(response.data.data);
      document.title = `${response.data.data.title} - RPLSMART`;
      setLoadingProduct(false);
    });
  };

  //hook useEffect
  useEffect(() => {
    fetchDetailDataProduct();
  }, []);

  return (
    <LayoutWeb>
      <div className="container mt-4 mb-3">
        {loadingProduct ? (
          <Loading />
        ) : (
          <div className="row">
            <div className="col-md-12">
              <div className="card border-0 shadow-sm rounded-3">
                <div className="card-body post-content">
                  {/* Gambar Produk */}
                  <div className="text-center mb-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="rounded"
                      style={{
                        maxWidth: "100%", // Gambar tidak lebih lebar dari container
                        maxHeight: "500px", // Batasi tinggi maksimal gambar
                        objectFit: "cover", // Jaga proporsi gambar
                      }}
                    />
                  </div>

                  {/* Detail Produk */}
                  <table className="table">
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          style={{ width: "15%" }}
                          className="text-uppercase"
                        >
                          Nama Produk
                        </th>
                        <td style={{ width: "1%" }}>:</td>
                        <td>{product.title}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-uppercase">
                          No. Telp / WA
                        </th>
                        <td>:</td>
                        <td>{product.phone}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-uppercase">
                          Deskripsi
                        </th>
                        <td>:</td>
                        <td colSpan="2">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: product.content,
                            }}
                          ></p>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-uppercase">
                          Alamat
                        </th>
                        <td>:</td>
                        <td>{product.address}</td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-uppercase">
                          Beli Produk
                        </th>
                        <td>:</td>
                        <td>
                          <a
                            href={`https://api.whatsapp.com/send?phone=${product.phone}&text=Halo%20kak%2C%20saya%20ingin%20pesan%20%3A%20${product.title}`}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-brands fa-whatsapp"></i> Pesan
                            Sekarang
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </LayoutWeb>
  );
}
