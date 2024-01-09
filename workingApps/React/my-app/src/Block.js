import React from "react";

import styled from 'styled-components';

const Container = styled.div`
color: gold 
`

const DIVA = styled.div`
  height: 150px;
  background-color: yellow;
  border: 2px solid black;
`;

const DIVB = styled(DIVA)`
height: 150px;
background-color: green ;
border: 3px solid black;
`


 


function Block(){

    return <Container>
     <DIVA>
    </DIVA>
    <DIVB>
    </DIVB>
    </Container>
    
    
}

export default Block