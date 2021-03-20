import Styled from 'styled-components'

export const CardContainer = Styled.div`
  display: 'flex';
  flex-direction: column;
  flex: 1 0 21%; /* explanation below */
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
  margin: 40px;
  height: 100px;
  background-color: blue;
`

export const SensorViewContainer = Styled.div`
  display: flex,
  flex-wrap: 'wrap'
`;
