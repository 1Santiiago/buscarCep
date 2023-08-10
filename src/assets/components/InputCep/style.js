import { styled } from "styled-components";


export const Container = styled.div`
    width: 100%;    
    padding: 20px;
   
    `
 export const Title = styled.h1``

 export const Input = styled.input`
    
    border-radius: 20px;
    width: 100%;
    max-width: 400px;
   text-align : center;
   height: 2rem;

   &::placeholder {
       color: purple;
       font-weight: bold;
       font-size: 17px;
       
   }
   
 `