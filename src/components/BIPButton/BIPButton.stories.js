import React from 'react';
import BIPButton from './BIPButton'

// Component story format

export default {
    title: 'form/BIPButton',
    component: BIPButton,
    args: {
        children: 'Button'
    } 
}

export const Primary = () => <BIPButton variant='primary'>Primary</BIPButton>
export const Secondary = () => <BIPButton variant='secondary'>Secondary</BIPButton>
export const Success = () => <BIPButton variant='success'>Success</BIPButton>
export const Danger = () => <BIPButton variant='danger'>Danger</BIPButton>
export const accessible = () => <BIPButton>Accessible button</BIPButton>;

export const inaccessible = () => (
  <BIPButton>Inaccessible button</BIPButton>
);

const Template = args => <BIPButton {...args} />

export const PrimaryA = Template.bind({})

PrimaryA.args = {
    variant: 'primary',
    // children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    // children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})

SecondaryA.args = {
    variant: 'secondary',
    // children: 'Secondary Args'
}