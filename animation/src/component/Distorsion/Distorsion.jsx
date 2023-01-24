import React from 'react'
import './distorsion.css'
import hoverEffet from 'hover-effect';
import { useEffect } from 'react';
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import diss from '../../assets/diss.png'
const Distorsion = () => {
    useEffect(()=>{
        new hoverEffet({
        parent:document.querySelector('.distorsion'),
        intensity:0.2,
        image1:image1,
        image2:image2,
        displacementImage:diss,
        imagesRatio:380 /300
        })
    })
    return (
        <div className='distorsion'></div>
    )
}

export default Distorsion