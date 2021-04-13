import React, { Component } from 'react'
import { View, Text, Image, Label, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'

const barText = 'barcode-number'
const url = 'https://randomuser.me/api/?seed=%7Bbarcode-number'

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: ''
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.product !== nextState.product) return true
    else return false
  }

  _fetchData(data) {
    debugger
    let uri, fetchedData

    uri = url.replace(barText, '') + data

    fetchedData = fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        debugger
        // rawData = data.results
        this.setState({
          product: data.results[0]
        })
      })

    this._renderModal()
    return
  }

  _renderModal() {
    debugger
    return (
      this.state.product !== '' && (
        <Modal
          hasBackdrop={true}
          backdropColor={'#000'}
          hideModalContentWhileAnimating={true}
          isVisible={this.state.showModal}
          swipeDirection={'down'}
          onSwipeComplete={() =>
            this.setState({
              showModal: false,
              visible: !this.state.visible
            })
          }>
          <View style={[styles.modalView, { marginTop: 200 }]}>
            <Avatar.Image
              style={{ margin: 25, position: 'absolute' }}
              size={120}
              source={{ uri: this.state.product.picture.large }}
            />
          </View>
        </Modal>
      )
    )
  }

  render() {
    debugger
    let { data } = this.props

    return this._fetchData(data)
    // this.state.product !== '' && this._renderModal()
    // let { data } = this.props

    // return data
    //   ? [
    //       <View style={[styles.modalView, { marginTop: 200 }]}>
    //         <Avatar.Image
    //           style={{ margin: 25, position: 'absolute' }}
    //           size={120}
    //           source={{ uri: data.picture.large }}
    //         />
    //         <View
    //           style={{
    //             top: 45,
    //             marginLeft: 150
    //           }}>
    //           <Text
    //             style={[
    //               styles.commonText,
    //               {
    //                 fontWeight: 'bold',
    //                 fontSize: 20
    //               }
    //             ]}>
    //             {data.name.first + ' ' + data.name.last}
    //           </Text>
    //           <Text style={[styles.commonText, { marginTop: 10 }]}>
    //             {data.dob.age}
    //           </Text>
    //           <Text style={[styles.commonText]}>
    //             {data.gender.toUpperCase()}
    //           </Text>
    //         </View>
    //       </View>,

    //       <View style={styles.modalView}>
    //         <View style={{ margin: 20 }}>
    //           <Text style={styles.commonText}>{'Email: ' + data.email}</Text>
    //           <Text style={styles.commonText}>{'Phone: ' + data.phone}</Text>
    //           <Text style={styles.commonText}>{'Cell: ' + data.cell}</Text>
    //         </View>
    //       </View>,

    //       <View style={styles.modalView}>
    //         <View style={{ margin: 20 }}>
    //           <Text style={styles.commonText}>
    //             {'City: ' + data.location.city}
    //           </Text>
    //           <Text style={styles.commonText}>
    //             {'State: ' + data.location.state}
    //           </Text>
    //           <Text style={styles.commonText}>
    //             {'Country: ' + data.location.country}
    //           </Text>
    //           <Text style={styles.commonText}>
    //             {'PostCode: ' + data.location.postcode}
    //           </Text>
    //         </View>
    //       </View>
    //     ]
    //   : null
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 2,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#fff',

    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 20
  },
  commonText: {
    marginLeft: 5,
    fontSize: 16,
    fontFamily: 'lucida grande'
  }
})

export default Details
