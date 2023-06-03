import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtonC from '../molecules/ButtonC'

type BottomOptionCProps = {
  handleFilter: (type: TYPE_LIST) => void,
  nameFilter: TYPE_LIST
}

export enum TYPE_LIST {
  ALL, WON, REDEEMED
}

const BottomOptionC = ({ handleFilter, nameFilter }: BottomOptionCProps) => {

  return (
    <View style={styles.container}>
      {nameFilter == TYPE_LIST.ALL && (
        <>
          <ButtonC testID='btn-won' onPress={() => { handleFilter(TYPE_LIST.WON) }}>Ganados</ButtonC>
          <ButtonC testID='btn-redeemed' onPress={() => { handleFilter(TYPE_LIST.REDEEMED) }}>Canjeados</ButtonC>
        </>
      )}
      {(nameFilter == TYPE_LIST.REDEEMED || nameFilter == TYPE_LIST.WON) &&
        <ButtonC testID='btn-all' onPress={() => { handleFilter(TYPE_LIST.ALL) }}>Todos</ButtonC>
      }
    </View>
  )
}

export default BottomOptionC

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 13
  }
})