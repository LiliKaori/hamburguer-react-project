import styled from "styled-components"

export const Container = styled.div`
    background-color: #0A0A10;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
`

export const Image = styled.img`
    height: 354px;
    margin: 11px 36px;
`

export const H1 = styled.h1`    
    font-size: 28px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0px;
    text-align: center;
`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 414px;
    height: 100vh;
    padding: 51px 36px;
`

export const Button = styled.button`
    height: 68px;    
    background-color: rgba(255, 255, 255, 0.14);
    font-size: 17px;
    font-weight: 900;
    line-height: 3px;
    letter-spacing: 0px;
    text-align: center;
    margin-top: 76px;
    border: none;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.7;
    }
`

export const Order = styled.li`
    height: 101px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    padding: 19px 15px;
    font-size: 18px;    
    font-weight: 300;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: left;
    border: none;
    list-style: none;
    display: flex;
    justify-content:space-between;
    margin-top: 18px;
`

export const ButtonDelete = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover{
        opacity: 0.7;        
    }

    &:active{
        opacity: 0.5;
    }
`