import React,{ useState, useEffect } from 'react'
import ProductList from './ProductList';
import baseUrl from './baseUrl';


export default function TopProducts() {
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [active, setActive] = useState('');

    useEffect(() => {
      
        const getProduct = ()=>{
            
            fetch(`${baseUrl}products`)
            .then(response => response.json())
            .then(data => setProducts(data));

           

        }

        getProduct();

        
    
     
    }, [])

    let category = products.filter(
      (value, index, array) => array.findIndex((t) => t.product_category === value.product_category) === index
    );


    const changeSingleProduct = (cate) => {

      setFilterCategory(cate);
      setActive(cate)

    
    }

    const changeAllProduct = () => {

      setFilterCategory('');
      setActive('')
     

    } 

    
    
   
   
  return (
    <>
       
       <div className="section" id='top-product'>
           
           

           <div className="container pt-2">

           <h2 className='section-heading my-5 mb-3 text-center'>Top Products</h2>
           <hr/>
            
            <div className='category-btn d-flex justify-content-center mb-3 mt-2 pt-4' >
            <button className={`btn ${active === '' ? 'btn-dark' : 'btn-outline-dark'} mx-3 `} onClick={changeAllProduct}>All</button>
               
               {category.map(category => 
                
                  <button className={`btn ${active === category.product_category ? 'btn-dark' : 'btn-outline-dark'} mx-3 `} onClick={() =>changeSingleProduct(category.product_category)} key={category.product_category}>{category.product_category}</button>  
                )}

              

            </div>

            <div className="row">

              <ProductList category={filterCategory}/>
                
                  
            </div>
           </div>

       </div>
    
    
    </>
  )
}
