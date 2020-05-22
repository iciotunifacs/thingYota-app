import Styled from 'styled-components'

export const CardContainer = Styled.div`
  width: 20vw;
  height: 10vh;
  display: 'flex';
  flex-direction: column;
  flex: 1 0 21%; /* explanation below */
  margin: 5px;
  height: 100px;
`;

export const CardLabel = Styled.p`
  font-weight: bold;
`

export const CardItem = Styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SensorGridContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const SensorGridItemContainer = Styled.div`
  flex: 1 0 21%; /* explanation below */
  margin: 5px;
  height: 100px;
  background-color: blue;
`
