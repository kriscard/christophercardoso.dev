import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
`

export const GridWithFlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15vh;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  grid-column-start: span 6;
  grid-column-end: span 6;

  @media (max-width: 780px) {
    grid-column-start: span 12;
    grid-column-end: span 12;
  }
`
