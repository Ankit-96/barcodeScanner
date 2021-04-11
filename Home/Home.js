import React, {Component} from 'react';
import {View} from 'react-native';

import {Button} from 'react-native-paper';
import {RNCamera} from 'react-native-camera';
import Modal from 'react-native-modal';

import Details from './Details';

const barText = 'barcode-number';
const url = 'https://randomuser.me/api/?seed=%7Bbarcode-number';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      showModal: false,
      data: {},
    };
  }

  productDetails = {
    name: '',
    phone: '',
    email: '',
    picture: '',
  };

  async _getData() {
    let uri, rawData, fetchedData;

    uri = url.replace(barText, '') + this.state.data.data;

    fetchedData = await fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        rawData = data.results;
      });

    let keys = Object.keys(this.productDetails);
    keys.map((item) => {
      this.productDetails[item] = rawData[0][item];
    });

    debugger;
    return [this.productDetails];
  }

  _renderCamera() {
    return (
      <RNCamera
        style={{flex: 1, justifyContent: 'flex-end'}}
        ref={(ref) => {
          this.camera = ref;
        }}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={(data) => {
          if (data !== undefined) {
            this.setState({
              showModal: true,
              data: data,
            });

            this._getData();
            debugger;
          }
        }}>
        {this.state.showModal && this._renderModal()}
      </RNCamera>
    );
  }

  _renderModal() {
    debugger;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundcoLOR: 'white',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        <Modal
          hasBackdrop={true}
          backdropColor={'#fff'}
          hideModalContentWhileAnimating={true}
          isVisible={this.state.showModal}
          swipeDirection={'down'}
          onSwipeComplete={() =>
            this.setState({
              showModal: false,
              visible: !this.state.visible,
            })
          }>
          <Details data={this.productDetails} />
        </Modal>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        {this.state.visible && this._renderCamera()}
        {!this.state.visible && (
          <Button
            mode={'contained'}
            dark
            style={{
              width: 150,
            }}
            compact
            onPress={() =>
              this.setState({
                showModal: false,
                visible: !this.state.visible,
              })
            }>
            SCAN PRODUCT
          </Button>
        )}
      </View>
    );
  }
}

export default Home;
