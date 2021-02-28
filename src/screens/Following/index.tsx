import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header/index'

import { Wrapper, Container, Main } from './styles'

export default function index() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </Wrapper>
  )
}
