import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect, useState } from "react";

export default function Home() {

  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousal">
          <div className="carousel-caption " style={{ zIndex: "10" }}>
            <div className="d-flex justify-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>{
                  setSearch(e.target.value)}}
              />
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1526371233670-42d618efcec5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHMlMjA5MDB4NzAwfGVufDB8MHwwfHx8MA%3D%3D"
              className="d-block w-100"
              style={{ filter: "brightness(60%)" }}
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D"
              className="d-block w-100"
              style={{ filter: "brightness(60%)" }}
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1513262599279-d287e25f4d84?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHMlMjA5MDB4NzAwfGVufDB8MHwwfHx8MA%3D%3D"
              className="d-block w-100"
              style={{ filter: "brightness(60%)" }}
              alt="..."
            />
          </div>
      </div>
      </div>
      </div>
      <div className="container">
        {
          foodCat !==[] 
          ? foodCat.map((data)=>{
            return(
              <div className="row mb-3">
            <div key={data._id} className="fs-3 m-3">
              {data.CategoryName}
              </div>
              <hr />
              {foodItem !==[]
              ? 
              foodItem.filter((item)=>(item.CategoryName=== data.CategoryName ) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
              .map(filterItems=>{
                return(
                  <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                    <Card foodName={filterItems.name}
                    options={filterItems.options[0]}
                    imgSrc={filterItems.img}
                    ></Card>

                  </div>
                )
              }
            ):<div>No Such Data Found</div>}
             
            
              </div>
            )
          })
          :""
        }
      
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
