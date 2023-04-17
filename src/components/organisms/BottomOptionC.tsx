import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import ButtonC from '../molecules/ButtonC'

type Props = {
  handleType: (type: typeList) => void,
  // typeFilter: typeList
}

export enum typeList {
  ALL, WON, REDEEMED
}

const BottomOptionC = ({ handleType}: Props) => {

  const [typeFilter, setTypeFilter] = useState(typeList.ALL)
  const changeType = (type: typeList) => {
    setTypeFilter(type)
    handleType(type)
  }

  return (
    <View style={styles.container}>
      {typeFilter == typeList.ALL && (
        <>
          <ButtonC testID='btn-won' onPress={() => { changeType(typeList.WON) }}>Ganados</ButtonC>
          <ButtonC testID='btn-redeemed' onPress={() => { handleType(typeList.REDEEMED) }}>Canjeados</ButtonC>
        </>
      )}
      {(typeFilter == typeList.REDEEMED || typeFilter == typeList.WON) &&
        <ButtonC testID='btn-all' onPress={() => { handleType(typeList.ALL) }}>Todos</ButtonC>
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