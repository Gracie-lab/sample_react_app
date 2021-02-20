import styled from 'styled-components'

export const MessageDiv = styled.div`
    background-color: white;
    height: 40%;
    border-radius: 20px;
    flex-direction: column;
    width: 400px;
    margin-top: 10px;
    
`

export const FirstInnerDiv = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    h3{
        color:#222C67;
        /* font-weight: bold; */
    }

    div{
        
        flex-direction: row;
        background-color: #FFF0D9;
        border-radius: 20px;
        padding: 10px;
        border: 3px #FEA110;

        h5{
            color: #FEA110;
            padding-left: 10px;
            padding-right: 10px; 
        }
    }
`

export const people = styled.div`
    display: flex;
    justify-content: column;

    div{
        background-color: #222C67;
        border-radius: 50%;
        /* background-color:grey; */
        width: 25px;
        height: 25px;
        margin-bottom : 0px;
    }
`

export const TheMessage = styled.div `
    display: flex;
    justify-content: row;
`