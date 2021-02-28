import React from 'react'
import { View, Text, Image } from 'react-native'

import {
  List,
  CategoryContainer,
  CagetoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from './style'

import data from './data'

type ItemProps = {
  item: { name: string, source: any }
}

export default function index() {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CagetoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </CategoryContainer>
  )

  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  )
}
