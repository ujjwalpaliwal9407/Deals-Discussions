import React from 'react'
import { Row, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Register from './Register';
import './my.css';
import styled from 'styled-components';
import { Redirect } from "react-router-dom";

export default function Submit(props) {
    const Hover=styled.div`
    height: 45px;
    width:140px;
    background-color:rgb(225,225,225);
    border-radius: 10px;
    margin:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
    background-color:${props.data.type};
    color:white;
    }
    `
    const setRegister=()=>{
        <Register/>
        
        console.log("calleldldldld")
    }
    return (
        <div>
            <div id="submit">
                            <Dropdown id="dropdown-basic-button" title="Submit">
                            <Dropdown.Toggle  style={{backgroundColor:`${props.data.type}`,border:'none'}} id="dropdown-basic">
                            <span style={{fontSize:13,fontWeight:'bold'}}><AddCircleIcon style={{color:'white',borderRadius:'50%'}}/> Submit</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Hover><b onClick={()=>setRegister()}>Deals</b></Hover>
                                <Hover><b onClick={()=>setRegister()}>Discussions</b></Hover>
                            </Dropdown.Menu>
                            </Dropdown></div>
        </div>
    )
}
