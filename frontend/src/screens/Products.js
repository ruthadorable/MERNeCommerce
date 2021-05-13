import React from 'react'
import '../style.css';
import {Row,Col} from 'react-bootstrap'
import AllProducts from '../components/AllProducts'
import allproducts from '../allproducts'
import {Link,Nav,Container} from 'react-bootstrap'
import {useState} from 'react'
/*import { values } from '../../../backend/data/allproducts';*/
function Products() {

  const [searchTerm, setSearchTerm] = useState("");
  return (

    <section id="store" class="store py-5">
      <Container>

        <div class="row">
          <div class="col-10 mx-auto col-sm-6 text-center">
            <h1 class="text-capitalize">our <strong class="banner-title ">store</strong></h1>
          </div>
        </div>

        <div class="row">
          <div class=" col-lg-8 mx-auto d-flex justify-content-around my-2 sortBtn flex-wrap">
            <a href="/Products" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="all"> all</a>
            <a href="/Cakes" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="cakes">cakes</a>
            <a href="/Cupcakes" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="cupcakes">cupcakes</a>
            <a href="/Sweets" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="sweets">sweets</a>
            <a href="/Doughnuts" class="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="doughnuts">doughnuts</a>
          </div>
        </div>

        <div class="row">
          <div class="col-10 mx-auto col-md-6">
            <form>
              <div class="input-group mb-3">
                <div class="input-group-prepend ">
                  <span class="input-group-text search-box" id="search-icon"><i class="fas fa-search"></i></span>
                </div>
                <input type="text" class="form-control" placeholder='item....' id="search-item"
                  onChange={(event) => { setSearchTerm(event.target.value); } } />

              </div>

            </form>
          </div>
        </div>
        <div class="row store-items">
          {allproducts.filter((val) => {
            if (searchTerm === "")
              return val;
            else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()))
              return val;
          })
            .map((val) => <AllProducts product={val} />)}
        </div>
        

      </Container>
    </section>
  );
}

export default Products
