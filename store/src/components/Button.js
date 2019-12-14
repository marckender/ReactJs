import styled from 'styled-components'


export const ButtonContainer = styled.button `

text-transform: capitalize;
font-size: 1.43rem;
background: transparent;
border: 0.5rem solid var(--lightBlue);
border-color:var(--lightBlue);
color:var(--lightBlue);
border-radius: 0.5rem ; 
adding: 0.2rem 0.5rem;
ursor:pointer;
margin:0.2rem 0.5 0.2 0; 
transition: all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainBlue);
}
&:focus{
    outline:none;

}
`
