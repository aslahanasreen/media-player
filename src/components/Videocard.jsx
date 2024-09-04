import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { dltVideos, addHistory } from '../services/allApis';
import { toast } from 'react-toastify';
import { json } from 'react-router-dom';

function Videocard({video, response, cat}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true)
        const dt = new Date()
        const data={videoId:video.videoId , title:video.title , url:video.videoURL , datetime:dt}
        const result = await addHistory(data)
        console.log(result);
        
        
    };

    const handleDelete=async ()=>{
        const res= await dltVideos(video.id)
        console.log(res);
        if(res.status==200){
            toast.success("Video deleted successfully")
            response(res)
        }
        else{
            toast.error("Deletion failed")
        }
        
    }

    const dragHandler=(e)=>{
        console.log(e);
        console.log(e.dataTransfer);
        const vid=JSON.stringify(video)
        console.log(vid);
        e.dataTransfer.setData("video",vid)
    }

    return (
        <>
            <Card style={cat?{width:"100%"}:{ width: '18rem' , marginBottom:'15px'}} onDragStart={(e)=>{dragHandler(e)}} draggable>
                <Card.Img style={{ cursor: 'pointer' }} onClick={handleShow} variant="top" src={video?.imgURL}/>
                <Card.Body>
                    <Card.Title>{video?.title}</Card.Title>
                    {
                        !cat &&
                        <Button variant="" onClick={handleDelete}>
                        <i className="fa-solid fa-trash" style={{ color: "#d00b1f", }}  />
                        </Button>
                    }
                    
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="315" src={video?.videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Videocard