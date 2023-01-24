import React, { useReducer } from 'react'
import './calcul.css'
import {FaAngleLeft} from 'react-icons/fa';
export const ACTIONS={
ADD_DIGIT:'add_digit',
DELET_DIGIT:'delet_digit',
CLEAR:'clear',
EVALUATE:'evaluate',
OPERATION:'operation'
}


export const Calcul = () => {    
    const [{currentOperation,previousOperation,Operation},dispatch]=useReducer(reducer,{});
    function reducer(state,{type,payload}){
        switch(type){
            case ACTIONS.ADD_DIGIT:
                return{
                    ...state,
                    currentOperation:`${currentOperation ||""}${payload.digit}`
                }
        }
    }
    return (
        <div>
            <div className='calculator__head'>
            <thead>
                <tr>
                    <th>
                        <div className='calculator__head-h2'>
                            <h3>{previousOperation}{Operation}</h3>
                            <h2>{currentOperation}</h2>
                        </div>
                    </th>
                </tr>     
            </thead>
        </div>
        <div className='calculator__body'>
            <tbody>
                <tr>
                    <th>%</th>
                    <th >CE</th>
                    <th >C</th>
                    <th ><FaAngleLeft/></th>
                </tr>
                <tr>
                    <th onClick={()=>{dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit:1}})}}>1</th>
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
                    <th >1</th>
                    <th>2</th>
                    <th>3</th>
                    <th >+</th>
                </tr>
                <tr>
                    <th>a</th>
                    <th>0</th>
                    <th>.</th>
                    <th >=</th>
                </tr>
            </tbody>
        </div>
        </div>
    )
}
export default Calcul
