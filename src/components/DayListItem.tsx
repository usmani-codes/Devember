import { StyleSheet, Text, View } from 'react-native'

type DayListItemProp = {
  day: number
}

const DayListItem = ({ day }: DayListItemProp) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  )
}
export default DayListItem
const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    width: 200,
    height: 200,

    gap: 10,

    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    borderColor: '#9b4521',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9EDE3',
  },
  text: {
    color: '#9b4521',
    fontSize: 75,
    fontFamily: 'AmaticSC_700Bold',
  },
})
