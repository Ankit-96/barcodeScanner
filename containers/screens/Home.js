import React, { Component } from 'react'
import { View, Image } from 'react-native'

import { Button } from 'react-native-paper'
import { RNCamera } from 'react-native-camera'
import Modal from 'react-native-modal'
import BarcodeMask from 'react-native-barcode-mask'

import Details from './Details'
// import corner from './corners.png'

const barText = 'barcode-number'
const url = 'https://randomuser.me/api/?seed=%7Bbarcode-number'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  // _getData() {
  //   let uri, rawData, fetchedData

  //   uri = url.replace(barText, '') + this.state.data

  //   fetchedData = fetch(uri)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       rawData = data.results
  //       this.setState({
  //         product: data.results[0]
  //       })
  //     })

  //   return
  // }

  _renderImage() {
    return <Image source={corner} />
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Button
          mode={'contained'}
          onPress={() => this.props.navigation.navigate('Camera')}>
          SCAN PRODUCT
        </Button>
      </View>
    )
  }
}

export default Home
