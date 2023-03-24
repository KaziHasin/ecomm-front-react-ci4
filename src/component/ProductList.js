import React, { useState, useEffect } from 'react'
import baseUrl from './baseUrl';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [countData, setCountData] = useState();

  useEffect(() => {
    setLoading(true)
    const getProduct = () => {


      fetch(`${baseUrl}products?parameter=${props.category}`)
        .then(response => response.json())
        .then((data) => {

          setCountData(data.length)
          setProducts(data)

        });



    }

    setTimeout(() => {

      getProduct();
      setLoading(false)

    }, 4000);




  }, [props.category])

  const Loader = () => {



    return (

      <div className='row'>


        <div className="col-md-4 text-center">


          <Skeleton className='my-4 mb-2' style={{ height: "200px" }} />
          <Skeleton style={{ height: "20px", width: '70%', textAlign: "center" }} />
          <Skeleton className='my-4' style={{ height: "40px", width: '35%', textAlign: "center" }} />
        </div>


        <div className="col-md-4 text-center">


          <Skeleton className='my-4 mb-2' style={{ height: "200px" }} />
          <Skeleton style={{ height: "20px", width: '70%', textAlign: "center" }} />
          <Skeleton className='my-4' style={{ height: "40px", width: '35%', textAlign: "center" }} />
        </div>



        <div className="col-md-4 text-center">


          <Skeleton className='my-4 mb-2' style={{ height: "200px" }} />
          <Skeleton style={{ height: "20px", width: '70%', textAlign: "center" }} />
          <Skeleton className='my-4' style={{ height: "40px", width: '35%', textAlign: "center" }} />
        </div>

      </div>

    )



  }


  return (

    <>

      {loading ? <Loader /> :
        products.map(product => (
          <div className="col-md-4 mb-5" key={product.id}>
            <div className="card">
              <img src={`${baseUrl}public/images/uploads/${product.product_image}`} className="card-img-top" alt={product.product_name} style={{width: "100%", height: '200px'}}/>
              <div className="card-body border-top">
                <h5 className="card-title text-center">{product.product_name}</h5>
                <p className='text-center mt-5 mb-0'> <a href="#" className="btn btn-dark">Shop Now</a></p>
              </div>
            </div>

          </div>
        ))}

    </>
  )
}
