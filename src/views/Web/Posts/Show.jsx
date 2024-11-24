import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import service api
import Api from "../../../services/Api";

//import useParams
import { Link, useParams } from "react-router-dom";

//import component loading
import Loading from "../../../components/general/Loading";

//import date ID
import DateID from "../../../utils/DateID";

export default function WebPostsShow() {
  //init state detail post
  const [post, setPost] = useState({});
  const [loadingPost, setLoadingPost] = useState(true);

  //init state all posts homepage
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  //destruct slug
  const { slug } = useParams();

  //fetch data post
  const fetchDetailDataPost = async () => {
    setLoadingPost(true);

    await Api.get(`/api/public/posts/${slug}`).then((response) => {
      setPost(response.data.data);
      document.title = `${response.data.data.title} - RPLSMART`;
      setLoadingPost(false);
    });
  };

  //fetch data all posts
  const fetchAllPosts = async () => {
    setLoadingPosts(true);

    await Api.get("/api/public/posts_home").then((response) => {
      setPosts(response.data.data);
      setLoadingPosts(false);
    });
  };

  //hook useEffect
  useEffect(() => {
    fetchDetailDataPost();
    fetchAllPosts();
  }, [slug]);

  // CSS for cards
  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    height: "76px", // Adjust height for better appearance on mobile
    marginBottom: "1rem",
    "@media (max-width: 768px)": {
      flexDirection: "row", // Ensure horizontal layout
      height: "80px", // Smaller height for mobile
    },
  };

  const imageStyle = {
    width: "80px", // Fixed width for the image
    height: "80px", // Ensure the image is square
    objectFit: "cover",
    borderRadius: "0.5rem 0 0 0.5rem",
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
    flexGrow: 1,
    overflow: "hidden",
  };


  return (
    <LayoutWeb>
      <div className="container mt-4 mb-3">
        <div className="row">
          <div className="col-md-8 mb-4">
            {loadingPost ? (
              <Loading />
            ) : (
              <div className="card border-0 shadow-sm rounded-3">
                <div className="card-body post-content">
                  <h4 className="text-normal"> {post.title}</h4>
                  <div className="author mt-3">
                    <span>
                      <i className="fa fa-user"></i> {post.user.name}
                    </span>
                    <span>
                      <i className="fa fa-folder ms-4 ml-4"></i>{" "}
                      {post.category.name}
                    </span>
                    <span>
                      <i className="fa fa-calendar ms-4 ml-4"></i>{" "}
                      {DateID(new Date(post.created_at))}
                    </span>
                  </div>
                  <hr />
                  <img
                    src={post.image}
                    className="rounded-3 w-100 mb-3"
                    alt={post.title}
                  />
                  <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">
              <i className="fa fa-book"></i> BERITA TERBARU
            </h5>
            <hr />
            {loadingPosts ? (
              <Loading />
            ) : (
              posts.map((post) => (
                <Link
                  to={`/posts/${post.slug}`}
                  className="text-decoration-none"
                  key={post.id}
                >
                  <div className="card w-100 border-0" style={cardStyle}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={imageStyle}
                    />
                    <div className="card-body" style={contentStyle}>
                      <span className="card-title">
                        {post.title.length > 30
                          ? `${post.title.substring(0, 30)}...`
                          : post.title}
                      </span>
                    </div>
                  </div>
                </Link>

              ))
            )}
          </div>
        </div>
      </div>
    </LayoutWeb>
  );
}
