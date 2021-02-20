import React from 'react'
import {CalendarDiv, ClassDiv, DateDiv, CircularDiv, LowerDiv} from './style'

export default function Classes(){
    return(
        <div>
            <CalendarDiv>
                
                <h3><b>November</b></h3>
               
                
                <DateDiv>
                    <div>
                        <h5 class = " firsth4">Mo</h5>
                        <h5><strong>14</strong></h5>
                    </div>
                    <div>
                        <h5>Tu</h5>
                        <h5>15</h5>
                    </div>
                    <div class = 'wed'>
                        <h5>We</h5>
                        <h5>16</h5>
                    </div>
                    <div>
                        <h5>Thu</h5>
                        <h5>17</h5>
                    </div>
                    <div>
                        <h5>Fri</h5>
                        <h5>18</h5>
                    </div>
                    <div>
                        <h5>Sat</h5>
                        <h5>19</h5>
                    </div>
                    <div>
                        <h5>Sun</h5>
                        <h5>20</h5>
                    </div>
                </DateDiv>

                
                    <h4>Classes</h4>
                    <ClassDiv>
                        <div class="Div">
                            <h5><span>Ongoing</span></h5>
                        </div>
                        <div>
                            <b><h3>Javascript</h3></b>
                            <h4>Introduction to custom hooks</h4>
                            <h5>9:00am to 5:00pm</h5>
                        </div>

                        <LowerDiv style={{flexDirection:"row"}}>
                            <CircularDiv/>
                            <h4 style={{alignSelf: "center"}}>Elliot</h4>
                            {/* <span>hell</span>
                            <span>good to go</span> */}
                                
                        </LowerDiv>
                    </ClassDiv>

                    <ClassDiv>
                        <div class="Div">
                            <h5><span>Ongoing</span></h5>
                        </div>
                        <div>
                            <b><h3>Javascript</h3></b>
                            <h4>Introduction to custom hooks</h4> 
                            <h5>9:00am to 5:00pm</h5>
                        </div>

                        <LowerDiv style={{flexDirection:"row"}}>
                            <CircularDiv/>
                            <h4 style={{alignSelf: "center"}}>Elliot</h4>
                            {/* <span>hell</span>
                            <span>good to go</span> */}
                                
                        </LowerDiv>
                    </ClassDiv>

                
                

            </CalendarDiv>
        </div>
    )

}