import React, {Component} from 'react';
import {View, Image} from 'react-native';

import {Button} from 'react-native-paper';
import {RNCamera} from 'react-native-camera';
import Modal from 'react-native-modal';
import BarcodeMask from 'react-native-barcode-mask';

import Details from './Details';
import corner from './corners.png';

const barText = 'barcode-number';
const url = 'https://randomuser.me/api/?seed=%7Bbarcode-number';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      showModal: false,
      data: {},
      product: '',
    };
  }

  // componentDidMount() {
  //   this.setState({

  //     product: '',
  //   });
  // }

  productDetails = {};

  _getData() {
    let uri, rawData, fetchedData;

    uri = url.replace(barText, '') + this.state.data;

    fetchedData = fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        rawData = data.results;
        this.info = data.results[1];
        this.productDetails = data.results[0];
      });

    return this.productDetails;
  }

  _renderModal() {
    return (
      <Modal
        hasBackdrop={true}
        backdropColor={'#000'}
        hideModalContentWhileAnimating={true}
        isVisible={this.state.showModal}
        swipeDirection={'down'}
        onSwipeComplete={() =>
          this.setState({
            ...this.state,
            showModal: false,
            visible: !this.state.visible,
          })
        }>
        <Details data={this.productDetails} />
      </Modal>
    );
  }

  _renderImage() {
    return <Image source={corner} />;
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
              ...this.state,
              showModal: true,
              data: data.data,
            });

            this._getData();
          } else {
            this.setState({
              ...this.state,
              showModal: false,
              visible: false,
            });
            alert('Cannot Find Product');
          }
        }}>
        <BarcodeMask />
        {this.state.showModal && this._renderModal()}
      </RNCamera>
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
                ...this.state,
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
