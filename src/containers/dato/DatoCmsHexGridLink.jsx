import React from 'react'
import HexagonGrid from '../../components/hexagon/HexagonGrid/HexagonGrid'

const DatoCmsHexGridLink = ({ id, hexGrid }) => {
  const { id: hexGridId, grid, entryName, ...hexGridProps } = hexGrid

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

  return <HexagonGrid grid={updatedGrid} {...hexGridProps} />
}

export default DatoCmsHexGridLink
