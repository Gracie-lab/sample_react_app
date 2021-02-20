import styled from 'styled-components'

export const CalendarDiv = styled.div`
    display: flex;
    background-color: white;
    width: 400px;
    height: 480px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
   
    h3{
        color: #222C67;
        
    }
    border-radius: 20px;
   
    
    

`
export const DateDiv = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 15px;
        justify-content: space-around;
        width: 100%;
       
        border: 0px;
        
        h5{
            color: #222C67;
            font-weight: bolder;
            height: 25px;

        }

        .firsth4{
            font-weight: lighter;
        }

        .wed{
            background-color: #222C67;
            color: white;
            border-radius: 20%;
            padding: 3px;
            height: 40px;
            h5{
                color: white;
            }
        }
`

export const ClassDiv = styled.div`
        width: 100%;
        height: 37%;
        background-color: #E5F8ED;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        border-radius: 20px;

       

        .Div{
            background-color: #C4C4C4;
            width: 80px;
            height: 25px;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            margin: 10px;

            h5{
                padding: 5px;
            }
        }

        div{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            
            h3{
                margin: 5px;
                margin-left: 0px;
                color: #222C67;
                font-weight: bolder;
            }

            h4{
                margin-top : 5px;
                color: #222C67;
            }

            h5{
                margin-top : 5px;
                color: grey;
            }
        }
`

export const CircularDiv = styled.div`
        border-radius: 50%;
        background-color:grey;
        width: 25px;
        height: 25px;
        margin-bottom : 0px;
`

export const LowerDiv = styled.div`
      display: flex;
      flex-direction:"row";
      /* justify-content: "space-between"; */
      margin-top : 5px;
      h4{
          align-self: center;
      }
      justify-content: space-around;
      
`
