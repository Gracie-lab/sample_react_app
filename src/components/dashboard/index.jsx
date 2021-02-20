import React from 'react'
import Classes from '../classes/classes'
import Kickstart from '../kickstart/kickstart'
import Messages from '../messages/messages'
import Sidemenu from './sidemenu/Sidemenu'

import { ClassesContainer, DashboardContainer, MidContainer } from './style'

export default function Dashboard() {
    return (
        <DashboardContainer>
              
             
            <Sidemenu />
           

            
            <ClassesContainer>
            <Kickstart/>
            <MidContainer>
            <Classes/>
            <Messages/>
            </MidContainer>
            </ClassesContainer>
            
            
         
        
        </DashboardContainer>
    )
}
