import React from 'react'
import { FirstInnerDiv, MessageDiv, people, TheMessage } from './style'

export default function Messages(){
    return(
        <MessageDiv>
            <FirstInnerDiv>
                <h3>Message </h3> 

            <div>
               <h5> new message </h5>
            </div>
            </FirstInnerDiv>
              
              <people>
                  <div>
                        hy
                  </div>

                  <TheMessage>

                  </TheMessage>

              </people>
            

        </MessageDiv>
    )
}