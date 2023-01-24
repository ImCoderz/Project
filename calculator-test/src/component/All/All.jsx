import React from 'react'
import './all.css'
import {FaAngleLeft} from 'react-icons/fa';
import { useState } from 'react';
export const All = () => {
    const [calc,setCalc]=useState('');
    const[result,setResult]=useState('');
    const ops=['+',"-","*",'/',".",'%','='];
    const updateCalc=value=>{
        if(calc===''&& value==0){
            return;
        }
        if(ops.includes(value) && ops.includes(calc.slice(-1)) || 
            ops.includes(value)&& calc===''){
            return;
        }
        setCalc(calc+value);
        if(!ops.includes(value)){
            setResult(eval(calc+value).toString())
        }
    }
    const equal=()=>{
        return setCalc(eval(calc).toString())
    }
    const reset=()=>{
        return setCalc('')
    }
    const delet=()=>{
        if (calc===''){
            return;
        }
        setCalc(calc.slice(0,calc.length-1))
    }
    return (
        <div>
            <div className='calculator__head'>
            <thead>
                <tr>
                    <th>
                        <div className='calculator__head-h2'>
                        <h2>{result?<span></span>:''}{calc || 0}</h2>
                        </div>
                    </th>
                </tr>     
            </thead>
        </div>
        <div className='calculator__body'>
            <tbody>
                <tr>
                    <th className='green' onClick={()=>updateCalc('%')}>%</th>
                    <th className='orange'>CE</th>
                    <th className='orange' onClick={reset}>C</th>
                    <th className='orange' onClick={delet}><FaAngleLeft/></th>
                </tr>
                <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>c</th>
                    <th className='green' onClick={()=>updateCalc('/')}>/</th>
                </tr>
                <tr>
                    <th onClick={()=>updateCalc('7')}>7</th>
                    <th onClick={()=>updateCalc('8')}>8</th>
                    <th onClick={()=>updateCalc('9')}>9</th>
                    <th className='green' onClick={()=>updateCalc('*')}>*</th>
                </tr>
                <tr>
                    <th onClick={()=>updateCalc('4')}>4</th>
                    <th onClick={()=>updateCalc('5')}>5</th>
                    <th onClick={()=>updateCalc('6')}>6</th>
                    <th className='green' onClick= {()=>updateCalc('-')}>-</th>
                </tr>
                <tr>
                    <th onClick={()=>updateCalc('1')}>1</th>
                    <th onClick={()=>updateCalc('2')}>2</th>
                    <th onClick={()=>updateCalc('3')}>3</th>
                    <th className='green' onClick={()=>updateCalc('+')}>+</th>
                </tr>
                <tr>
                    <th>a</th>
                    <th onClick={()=>updateCalc('0')}>0</th>
                    <th onClick={()=>updateCalc('.')}>.</th>
                    <th className='orange' onClick={equal}>=</th>
                </tr>
            </tbody>
        </div>
        </div>
    )
}
export default All
