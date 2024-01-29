// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import CommonSection from '../components/ui/CommonSection'
// import Helmet from "../components/helmet/Helmet"

// import { Container, Row, Col } from 'reactstrap';

// import "../styles/Shop.css"


// // import products from '../assets/data/products';
// import ProductList from '../components/ui/ProductList';

// import useGetData from '../customs-hooks/useGetData';


// const Shop = () => {


//   const { data: products, loading } = useGetData("products")

//   const [productsData, setProductsData] = useState(products)



//   console.log(products)



//   const handleFilter = (e) => {
//     const filterValue = e.target.value
//     if (filterValue === "perfume") {
//       const filteredProducts = products.filter((item) => item.category === "perfume")
//       setProductsData(filteredProducts)
//     }


//     if (filterValue === "watch") {
//       const filteredProducts = products.filter((item) => item.category === "watch")
//       setProductsData(filteredProducts)
//     }


//     if (filterValue === "mobile") {
//       const filteredProducts = products.filter((item) => item.category === "mobile")
//       setProductsData(filteredProducts)
//     }


//     if (filterValue === "wireless") {
//       const filteredProducts = products.filter((item) => item.category === "wireless")
//       setProductsData(filteredProducts)
//     }


//     if (filterValue === "shoes") {
//       const filteredProducts = products.filter((item) => item.category === "shoes")
//       setProductsData(filteredProducts)
//     }



//   }




//   const handleSearch = (e) => {
//     const searchTerm = e.target.value
//     const searchedProducts = products.filter((item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
//     setProductsData(searchedProducts)

//   }


















//   const [trendingProducts, setTrendingProducts] = useState([])
//   const [bestSalesProducts, setBestSalesProducts] = useState([])
//   const [mobileProducts, setMobileProducts] = useState([])
//   const [wirelessProducts, setWirelessProducts] = useState([])
//   const [popularProducts, setPopularProducts] = useState([])





//   useEffect(() => {

//     const filteredTrendingProducts = products.filter(item => item.category === "perfume")
//     const filteredBestSalesProducts = products.filter(item => item.category === "watch")
//     const filteredMobilesProducts = products.filter(item => item.category === "mobile")
//     const filteredWirelesssProducts = products.filter(item => item.category === "wireless")
//     const filteredPopularProducts = products.filter(item => item.category === "shoes")

//     setTrendingProducts(filteredTrendingProducts)
//     setBestSalesProducts(filteredBestSalesProducts)
//     setMobileProducts(filteredMobilesProducts)
//     setWirelessProducts(filteredWirelesssProducts)
//     setPopularProducts(filteredPopularProducts)


//   }, [products])





//   return (
//     <Helmet title="Shop">
//       <CommonSection title="Products" />


//       <section >

//         <Container>
//           <Row>

//             <Col lg="3" md="6">
//               <div className="filter__widget">
//                 <select name="" id="" onChange={handleFilter}>
//                   <option value="">Filter By Category</option>
//                   <option value="perfume">Perfume</option>
//                   <option value="watch">Watch</option>
//                   <option value="mobile">Mobile</option>
//                   <option value="wireless">Wireless</option>
//                   <option value="shoes">Shoes</option>
//                 </select>
//               </div>
//             </Col>










//             <Col lg="3" md="6" className='text-end'>
//               <div className="filter__widget">
//                 <select>
//                   <option >Sort By </option>
//                   <option value="ascending">Ascending</option>
//                   <option value="descending">Descending</option>
//                 </select>
//               </div>
//             </Col>











//             <Col lg="6" md="12">
//               <div className="search__box">
//                 <input type="text" placeholder='Search....' onChange={handleSearch} />

//                 <span><i class="ri-search-line"></i></span>

//               </div>
//             </Col>


//           </Row>
//         </Container>

//       </section >


//       <section className='pt-0'>
//         <Container>
//           <Row>
//             {/* {
//               productsData.length === 0 ? (
//                 <h1 className='text-center fs-4'>No products are found....</h1>
//               ) :


//                 (<ProductList data={trendingProducts} />)


//             } */}


//             {
//               loading ? <h4 className="fw-bold">Loading...!!!</h4>
//                 :
//                 <>
//                   <ProductList data={trendingProducts} />
//                   <ProductList data={bestSalesProducts} />
//                   <ProductList data={mobileProducts} />
//                   <ProductList data={wirelessProducts} />
//                   <ProductList data={popularProducts} />
//                 </>

//             }









//           </Row>

//         </Container>




//       </section>






//     </Helmet>
//   )
// }

// export default Shop











































import React, { useEffect } from 'react';
import { useState } from 'react';
import CommonSection from '../components/ui/CommonSection';
import Helmet from "../components/helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import "../styles/Shop.css";
import ProductList from '../components/ui/ProductList';
import useGetData from '../customs-hooks/useGetData';

const Shop = () => {
  const { data: products, loading } = useGetData("products");

  const [productsData, setProductsData] = useState(products);
  const [filteredCategory, setFilteredCategory] = useState("");

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    setFilteredCategory(filterValue);

    if (filterValue === "") {
      setProductsData(products); // Reset to all products
    } else {
      const filteredProducts = products.filter((item) => item.category === filterValue);
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  useEffect(() => {
    // Update productsData when the data from Firebase changes
    setProductsData(products);
  }, [products]);

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select name="" id="" onChange={handleFilter}>
                  <option value="">Filter By Category</option>
                  <option value="perfume">Perfume</option>
                  <option value="watch">Watch</option>
                  <option value="mobile">Mobile</option>
                  <option value="wireless">Wireless</option>
                  <option value="shoes">Shoes</option>
                </select>
              </div>
            </Col>

            <Col lg="3" md="6" className='text-end'>
              <div className="filter__widget">
                <select>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder='Search....' onChange={handleSearch} />
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {loading ? <h4 className="fw-bold">Loading...!!!</h4> : <ProductList data={productsData} />}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Shop;






















