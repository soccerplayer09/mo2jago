import { Button } from '@components/Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
  onClick: () => {
    console.log('click button')
  },
}
