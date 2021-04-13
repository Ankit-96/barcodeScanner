import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask'

import Details from './Details'

class Camera extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      fetchData: false,
      shouldReadBarCode: true
    }
  }

  _getData(data) {
    debugger
    this.state.fetchData && <Details data={data} />
  }

  _renderCamera() {
    return (
      this.state.shouldReadBarCode && (
        <RNCamera
          style={{ flex: 1, justifyContent: 'flex-end' }}
          ref={(ref) => {
            this.camera = ref
          }}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={(data) => {
            if (data !== undefined) {
              this.setState(
                {
                  showModal: true,
                  shouldReadBarCode: false,
                  fetchData: true
                },
                this._getData(data.data)
              )

              this.props.navigation.pop()
            }
            //   if noData -> even then hit API -> do not get response -> goto Home -> show alert

            // else {
            //   this.setState({
            //     showModal: false,
            //     visible: false
            //   })
            //   this.props.navigation.pop()
            //   alert('Cannot Find Product')
            // }
          }}>
          <BarcodeMask />
          {/* {this.state.showModal && this._renderModal()} */}
        </RNCamera>
      )
    )
  }

  render() {
    return this._renderCamera()
  }
}

export default Camera
