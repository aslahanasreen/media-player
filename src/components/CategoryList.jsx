import React, { useState, useEffect } from 'react'
import { getCategories } from '../services/allApis'
import { delCategory , updateCategory} from '../services/allApis'
import { toast } from 'react-toastify'
import Videocard from './Videocard'

function CategoryList({add}) {

    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
        getData()
    }, [add])

    const getData = async () => {
        const result = await getCategories()
        console.log(result);

        if (result.status == 200) {
            setCategoryList(result.data)
        }
        
    }

    const handleDelete=async(id)=>{
        const resullt=await delCategory(id)
        console.log(resullt);
        if(resullt.status==200){
            getData()
        }
    }

    const dropHandler=async(e,category)=>{
        e.preventDefault()
        console.log("dropped");
        const vid=JSON.parse(e.dataTransfer.getData("video"));
        category.videos.push(vid)
        const result = await updateCategory(category.id,category)
        console.log(result);
        if(result.status==200){
            toast.success(`${vid.title} added to ${category.title}`)
            getData()
        }
        else{
            toast.error('video-category adding failed')
        }
    }

    const dragOverHandler=(e)=>{
        console.log("dragging over");
        e.preventDefault()
    }

    return (
        <>
            <div className='container-fluid border border-3 border-light p-2 mt-3'>
                {
                    categoryList.length > 0 ?
                        <div>
                            {
                                categoryList.map((item) => (
                                    <div>
                                        <div className='border p-3 mb-3 d-flex justify-content-between' onDragOver={(e)=>{dragOverHandler(e)}} onDrop={(e)=>{dropHandler(e,item)}}>
                                            <h1>{item.title}</h1>
                                            <button className='btn' onClick={()=>{handleDelete(item.id)}}>
                                                <i className="fa-solid fa-trash" style={{ color: "#d00b1f", }} />
                                            </button>
                                        </div>
                                        <div>
                                            {
                                                item?.videos?.length>0 &&
                                                <>
                                                {
                                                    item?.videos?.map(vid=>(
                                                        <Videocard video={vid} cat={true}/>
                                                    ))
                                                }
                                                </>
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <h3>No category available</h3>
                }
            </div>
        </>
    )
}

export default CategoryList