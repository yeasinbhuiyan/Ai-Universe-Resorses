import React, { useEffect, useState } from 'react';
import Main2 from './Main2';

const Main = () => {
    const [data, setData] = useState([])
    const [Modal,setModal] = useState({})
    const [seeAll, setSeeAll] = useState(false)
    const [ModalId, setModalId] = useState(null)
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${ModalId}`)
        .then(res => res.json())
        .then(data => setModal(data))
    },[ModalId])
    console.log(ModalId)


    const seeAllBtn = () => {
        setSeeAll(true)
    }
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
            const data = await res.json()
            setData(data.data.tools)
            console.log(data)
        }
        loadData()
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12'>
                {
                    data && data.slice(0, seeAll ? 12 : 6).map(SingleData => <Main2 Modal={Modal} setModalId={setModalId} SingleData={SingleData}></Main2>)
                }

            </div>
            {
                !seeAll && <div className=' text-center my-5'>
                    <button onClick={seeAllBtn} className='btn btn-info'>See All</button>
                </div>
            }
        </div>
    );
};

export default Main;