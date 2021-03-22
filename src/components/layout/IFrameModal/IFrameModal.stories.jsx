import React from 'react'
import Button from '@material-ui/core/Button'
import IFrameModal from './IFrameModal'

export default {
  title: 'Layout/IFrameModal',
  component: IFrameModal,
}

const Template = ({ ...args }) => {
  const [open, setOpen] = React.useState(false)
  const toggleOpen = () => setOpen(!open)
  return (
    <>
      <Button onClick={toggleOpen}>Open iframe modal</Button>
      <IFrameModal
        open={open}
        onClose={toggleOpen}
        src="https://www.iubenda.com/privacy-policy/46709371"
      />
    </>
  )
}

export const Simple = Template.bind({})
Simple.args = {}
