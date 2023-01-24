import React from 'react'
import './body.css'
import {FaAngleLeft} from 'react-icons/fa';
import { useState } from 'react';
const Body = () => {
    const [currentcalcul,setcurrentcalcul]=useState(0);
    const one=()=>{
        const newcalcul=currentcalcul+1;
        setcurrentcalcul(newcalcul)
    };
    const addition=()=>{
        const newcalcul=currentcalcul+'+';
        setcurrentcalcul(newcalcul)
    };
  return (
    <div className='calculator__body'>
        <tbody>
            <tr>
                <th>%</th>
                <th className='special'>CE</th>
                <th className='special'>C</th>
                <th className='special'><FaAngleLeft/></th>
            </tr>
            <tr>
                <th>a</th>
                <th>b</th>
                <th>c</th>
                <th>/</th>
            </tr>
            <tr>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>*</th>
            </tr>
            <tr>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>-</th>
            </tr>
            <tr>
                <th onClick={one}>1</th>
                <th>2</th>
                <th>3</th>
                <th onClick={addition}>+</th>
            </tr>
            <tr>
                <th>a</th>
                <th>0</th>
                <th>.</th>
                <th>=</th>
            </tr>
        </tbody>
    </div>
  )
}

export default Body