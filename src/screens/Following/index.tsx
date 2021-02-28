import React from 'react'
import { View, Text, FlatList } from 'react-native'

import Header from '../../components/Header/index'
import Heading from '../../components/Heading'
import Title from '../../components/Title'
import CategoryList from '../../components/CategoryList'

import { Wrapper, Container, Main } from './styles'

type Item = {
  key: string
  render: () => JSX.Element
  isTitle?: boolean
}

export default function index() {

  const { data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed</Title>,
        isTitle: true,
      },
      { key: 'C1', render: () => <CategoryList />, },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live channels</Title>,
        isTitle: true,
      },
      { key: 'C2', render: () => <View />, },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      { key: 'C3', render: () => <View />, },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offiline channels</Title>,
        isTitle: true,
      },
      { key: 'C4', render: () => <View />, },
    ]

    const itemsIsTitlesIndexes: number[] = []
    items.forEach(
      (item, index) => item.isTitle && itemsIsTitlesIndexes.push(index)
    )
    return {
      data: items,
      indexes: itemsIsTitlesIndexes
    }
  }, [])

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main >
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indexes}
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  )
}
