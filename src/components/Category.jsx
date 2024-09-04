import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addcategory } from '../services/allApis';
import { toast } from 'react-toastify';
import CategoryList from './CategoryList';

function Category() {
    const [show, setShow] = useState(false);
    const [category,setCategory] = useState({
      categoryId:"",title:"",videos:[]
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handelCategory=async()=>{
        console.log(category);
        const {categoryId,title}=category

        if( !categoryId || !title){
          toast.warning("Enter valid input!!")
        }
        else{
          const result= await addcategory(category)
          console.log(result);
          
          if(result.status==201){
            toast.success("Category added!!")
            handleClose()
            setCategory({
              categoryId:"",title:"",videos:[]
            })
          }
          else{
            toast.error("Category adding failed!!")
          }
        }
        
    }
    return (
        <>
            <div className='d-grid'>
                <button className='btn btn-success ' onClick={handleShow}>
                    Add Category
                </button>
    
            </div>
           
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="cId" label="Category Id" className="mb-3">
        <Form.Control type="number" placeholder="name@example.com" onChange={(e)=>{setCategory({...category,categoryId:e.target.value})}}/>
      </FloatingLabel>
      <FloatingLabel controlId="cName" label="Category Name">
        <Form.Control type="text" placeholder="Password" onChange={(e)=>{setCategory({...category,title:e.target.value})}}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelCategory}>Create</Button>
        </Modal.Footer>
      </Modal>
      <CategoryList add={category}/>
        </>
    )
}

export default Category