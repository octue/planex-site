import React from 'react'

// import HexagonGrid from '../../hexagon/HexagonGrid/HexagonGrid'
// const fieldContentMap = {
//   'HexGrid': HexagonGrid,
// }
// const DatoModularField = ({content, ...rest}) => {
//   return <>
//   { content ? content.map((item) => {
//     const FieldComponent = fieldComponentMap
//           <HexagonGrid {...column1[0].hexGrid} />
//   </>
// }
import Typography from '@material-ui/core/Typography'
const TheComponent = ({ id, ...rest }) => (
  <>
    <Typography variant="subtitle1" color="textPrimary">
      Some hexagons go here
    </Typography>
  </>
)
export default TheComponent
