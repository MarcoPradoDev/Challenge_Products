import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Placeholder from '../../assets/images/placeholder.svg'

type Props = {
  uri: string,
  width: number,
  height: number
}

const ImageC = ({ uri, width, height }: Props) => {

  const [isLoading, setIsLoading] = useState(true)
  const loadEnd = () => {
    setIsLoading(false)
  }

  return (
    <View>
      <Placeholder style={{ display: isLoading ? 'flex' : 'none' }} width={width} height={height} />
      <Image style={[{ display: isLoading ? 'none' : 'flex', width, height }]} source={{ uri }} onLoadEnd={loadEnd} />
    </View>
  )
}

export default ImageC

const styles = StyleSheet.create({})