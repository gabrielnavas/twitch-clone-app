import React from 'react'
import { View, Text } from 'react-native'

import { Container } from './styles'

type Props = {
  children: string
}

export default function index({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}
