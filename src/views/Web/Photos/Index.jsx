import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import service api
import Api from "../../../services/Api";

//import component alert
import AlertDataEmpty from "../../../components/general/AlertDataEmpty";

//import component loading
import Loading from "../../../components/general/Loading";

//import pagination component
import Pagination from "../../../components/general/pagination";

//import bootstrap modal
import { Modal } from "react-bootstrap";

export default function WebPhotosIndex() {
  //title page
  document.title = "Galeri Foto - RPLSMART";

  //init state
  const [photos, setPhotos] = useState([]);
  const [loadingPhoto, setLoadingPhoto] = useState(true);

  //define state "pagination"
  const [pagination, setPagination] = useState({
    currentPage: 0,
    perPage: 0,
    total: 0,
  });

  //state for modal
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  //fetch data photos
  const fetchDataPhotos = async (pageNumber = 1) => {
    setLoadingPhoto(true);

    const page = pageNumber ? pageNumber : pagination.currentPage;

    await Api.get(`/api/public/photos?page=${page}`).then((response) => {
      setPhotos(response.data.data.data);
      setPagination(() => ({
        currentPage: response.data.data.current_page,
        perPage: response.data.data.per_page,
        total: response.data.data.total,
      }));
      setLoadingPhoto(false);
    });
  };

  //handle show modal
  const handleShowModal = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  //handle hide modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  };

  //hook useEffect
  useEffect(() => {
    fetchDataPhotos();
  }, []);

  // Modal Image Style
  const modalImageStyle = {
    width: "100%",
    maxWidth: "1000px", // Lebar gambar diperbesar
    maxHeight: "800px", // Tinggi gambar diperbesar
    objectFit: "contain", // Menyesuaikan gambar agar tidak terpotong
    margin: "0 auto",
    display: "block",
  };

  return (
    <LayoutWeb>
      <div className="container mt-4 mb-3">
        <div className="row">
          <div className="col-md-12">
            <h5 className="text-uppercase">
              <i className="fa fa-images"></i> GALERI FOTO
            </h5>
            <hr />
          </div>
        </div>
        <div className="row mt-4">
          {loadingPhoto ? (
            <Loading />
          ) : photos.length > 0 ? (
            photos.map((photo) => (
              <div
                className="col-md-4 col-sm-6 col-12 mb-4" // Responsif: 3 kartu per baris di layar besar
                key={photo.id}
                onClick={() => handleShowModal(photo)}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                    overflow: "hidden",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem",
                      width: "100%",
                    }}
                  />
                  <hr />
                  <div className="p-2">
                    <h6 className="text-muted">{photo.caption}</h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <AlertDataEmpty />
          )}
        </div>
        <Pagination
          currentPage={pagination.currentPage}
          perPage={pagination.perPage}
          total={pagination.total}
          onChange={(pageNumber) => fetchDataPhotos(pageNumber)}
          position="center"
        />

        {/* Modal */}
        {selectedPhoto && (
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            size="lg" // Modal besar
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>{selectedPhoto.caption}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.caption}
                style={modalImageStyle}
              />
            </Modal.Body>
          </Modal>
        )}
      </div>
    </LayoutWeb>
  );
}
