import React, {Component} from 'react';
import {View, Text, Image, Label, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pro = {
      name: {title: 'Mr', first: 'Allan', last: 'Richards'},
      cell: '081-928-4785',
      dob: {date: '1995-01-08T12:26:25.734Z', age: 26},
      email: 'allan.richards@example.com',
      gender: 'male',
      id: {name: 'PPS', value: '4957927T'},
      location: {
        city: 'Portarlington',
        state: 'Galway',
        country: 'Ireland',
        postcode: 11365,
      },
      login: {
        uuid: '0cc8bc40-8399-4c5c-bbe3-ee6f29df41c1',
        username: 'tinyduck900',
        password: 'reggie',
        salt: 'FnKLVvYl',
        md5: 'd6c5a0358eb0305a9d3e2e4bf0a1d09d',
      },
      nat: 'IE',
      phone: '021-689-3071',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/98.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/98.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/98.jpg',
      },
      registered: {date: '2009-10-29T13:46:14.930Z', age: 12},
    };

    // let pro = this.props.data;
    let {data} = this.props;
    debugger;

    return [
      <View style={[styles.modalView, {marginTop: 200}]}>
        <Avatar.Image
          style={{margin: 25, position: 'absolute'}}
          size={120}
          source={{uri: pro.picture.large}}
        />
        <View
          style={{
            top: 45,
            marginLeft: 150,
          }}>
          <Text
            style={[
              styles.commonText,
              {
                fontWeight: 'bold',
                fontSize: 20,
              },
            ]}>
            {pro.name.first + ' ' + pro.name.last}
          </Text>
          <Text style={[styles.commonText, {marginTop: 10}]}>
            {pro.dob.age}
          </Text>
          <Text style={[styles.commonText]}>{pro.gender.toUpperCase()}</Text>
        </View>
      </View>,

      <View style={styles.modalView}>
        <View style={{margin: 20}}>
          <Text style={styles.commonText}>{'Email: ' + pro.email}</Text>
          <Text style={styles.commonText}>{'Phone: ' + pro.phone}</Text>
          <Text style={styles.commonText}>{'Cell: ' + pro.cell}</Text>
        </View>
      </View>,

      <View style={styles.modalView}>
        <View style={{margin: 20}}>
          <Text style={styles.commonText}>{'City: ' + pro.location.city}</Text>
          <Text style={styles.commonText}>
            {'State: ' + pro.location.state}
          </Text>
          <Text style={styles.commonText}>
            {'Country: ' + pro.location.country}
          </Text>
          <Text style={styles.commonText}>
            {'PostCode: ' + pro.location.postcode}
          </Text>
        </View>
      </View>,
    ];
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
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 20,
  },
  commonText: {
    marginLeft: 5,
    fontSize: 16,
    fontFamily: 'lucida grande',
  },
});

export default Details;
