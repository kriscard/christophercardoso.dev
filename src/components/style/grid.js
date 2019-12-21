import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: auto;
  margin: auto;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  grid-column-start: span 6;
  grid-column-end: span 6;

  @media(max-width: 780px) {
    grid-column-start: span 12;
    grid-column-end: span 12;
   }
`;
