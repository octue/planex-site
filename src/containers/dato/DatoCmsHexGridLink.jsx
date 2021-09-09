import React from 'react'
import HexagonGrid from '../../components/hexagon/HexagonGrid/HexagonGrid'

const DatoCmsHexGridLink = ({ id, hexGrid }) => {
  console.log('HEX', hexGrid)
  const { id: hexGridId, grid, ...hexGridProps } = hexGrid

  const updatedGrid = React.useMemo(
    () =>
      grid
        ? grid.map((item) => {
            const {
              addLink,
              url,
              openInNewTab,
              optimiseInternalLink,
              image,
              xCoordinate: x,
              yCoordinate: y,
            } = item
            const link = addLink
              ? { url, openInNewTab, optimiseInternalLink }
              : undefined
            return { link, image, x, y }
          })
        : [],
    [grid]
  )
  console.log('UPDG:', updatedGrid)

  return <HexagonGrid grid={updatedGrid} {...hexGridProps} />
}

export default DatoCmsHexGridLink
