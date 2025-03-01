import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import '../pages/pagescss/ProductDetailsStyles.css'
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../Context/cartContext";
import '../pages/pagescss/categoryproductcss.css';


const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);

  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>

        <div className="row categoryproduct">
          <div className="col-md-12 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div
                  className="card m-2"
                  style={{ width: "18rem"}}
                  key={p._id}
                >
                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    style={{ height: '190px',width:"190px",marginLeft:"25px" }}
                  />
                  <div className="card" style={{ height: '100%' }}>
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 30)}...
                      </p>
                      <p className="card-text">₹ {p.price}</p>
                      <div style={{ marginTop: 'auto' }}>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => navigate(`/product/${p._id}`)}
                        >
                          More Details
                        </button>
                        <button className="btn btn-success btn-sm ms-1" onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          console.log("Item Added to cart");
                        }}>
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
            {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;