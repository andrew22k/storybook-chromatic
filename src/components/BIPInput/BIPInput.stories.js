import React from 'react';
import BIPInput from './BIPInput'

// Component story format

export default {
    title: 'form/BIPInput',
    component: BIPInput,
}

export const Small = () => <BIPInput size='small' placeholder='Small input size' />
export const Medium = () => <BIPInput size='medium' placeholder='Medium input size' />
export const Large = () => <BIPInput size='large' placeholder='Large input size' />