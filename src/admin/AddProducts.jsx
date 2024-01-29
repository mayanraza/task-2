import React from 'react'
import { useState } from 'react';

import { Container, Row, Col, Form, FormGroup } from 'reactstrap';

import { toast } from 'react-toastify';


import { storage } from '../firebase.config';
import { db } from '../firebase.config';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';


const AddProducts = () => {

  const [enterTitle, setEnterTitle] = useState("")
  const [enterShortDesc, setShortDesc] = useState("")
  const [enterDescription, setEnterDescription] = useState("")
  const [enterCategory, setEnterCategory] = useState("")
  const [enterPrice, setEnterPrice] = useState("")
  const [enterProductImg, setEnterProductImg] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


  const addProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    // const product = {
    //   title: enterTitle,
    //   shortDesc: enterShortDesc,
    //   description: enterDescription,
    //   category: enterCategory,
    //   price: enterPrice,
    //   imgUrl: enterProductImg
    // }



    // added product to Firebase database

    try {
      const docRef = await collection(db, "products")
      const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)

      const uploadtask = uploadBytesResumable(storageRef, enterProductImg)


      uploadtask.on("state_changed", (snapshot) => { }, (error) => {
        toast.error("images not Uploades..!!")

      }
        , () => {


          getDownloadURL(uploadtask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,

            })
          })

        })
      setLoading(false)
      toast.success("Product added Successfully..!!")
      navigate("/dashboard/all-products")
    }

    catch (error) {
      setLoading(false)
      toast.error(error.message)

    }


    // console.log(product)

  }






  return (
    <section>
      <Container>
        <Row>

          <Col lg="12">



            {

              loading ? <h4 className='py-5'>Loading....!!!</h4>
                :

                <>
                  <h4 className='mb-4'>Add Product</h4>

                  <Form onSubmit={addProduct}>
                    <FormGroup className="form__group">
                      <span>Product title</span>
                      <input type="text" placeholder='Product name...' value={enterTitle} onChange={(e) => setEnterTitle(e.target.value)} required />
                    </FormGroup>


                    <FormGroup className="form__group">
                      <span>Short Description</span>
                      <input type="text" placeholder='Product desc...' value={enterShortDesc} onChange={(e) => setShortDesc(e.target.value)} required />
                    </FormGroup>


                    <FormGroup className="form__group">
                      <span>Description</span>
                      <input type="text" placeholder='Description...' value={enterDescription} onChange={(e) => setEnterDescription(e.target.value)} required />
                    </FormGroup>

                    <div className='d-flex align-items-center justify-content-between gap-5' >
                      <FormGroup className="form__group w-50">
                        <span>Price</span>
                        <input type="number" placeholder='Product price...' value={enterPrice} onChange={(e) => setEnterPrice(e.target.value)} required />
                      </FormGroup>

                      <FormGroup className="form__group w-50 ">
                        <span>Category</span>
                        <select className='w-100 p-2' value={enterCategory} onChange={(e) => setEnterCategory(e.target.value)}>
                          <option>Select Category</option>
                          <option value="perfume">Pefumes</option>
                          <option value="watch">Watch</option>
                          <option value="mobile">Mobile</option>
                          <option value="wireless">Wireless</option>
                          <option value="shoes">Shoes</option>
                        </select>
                      </FormGroup>
                    </div>





                    <div>
                      <FormGroup className="form__group" value={enterProductImg} onChange={(e) => setEnterProductImg(e.target.files[0])}>
                        <span>Product Image</span>
                        <input type="file" />
                      </FormGroup>
                    </div>


                    <button type='submit' className="buy__btn">Add Product</button>


                  </Form>


                </>

            }



          </Col>


        </Row>


      </Container>
    </section>
  )
}

export default AddProducts