import React from 'react'
import { View, Text } from 'react-native'

import {
  Container,
  HeadingText
} from './styles'

type Props = {
  children: string
}

export default function index({ children }: Props) {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  )
}
