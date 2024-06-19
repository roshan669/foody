import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousal">
          <div className="carousel-caption " style={{ zIndex: "10" }}>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
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
  );
}
