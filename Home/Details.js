import React, {Component} from 'react';
import {View, Text, Image, Label, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {data} = this.props;

    return data
      ? [
          <View style={[styles.modalView, {marginTop: 200}]}>
            <Avatar.Image
              style={{margin: 25, position: 'absolute'}}
              size={120}
              source={{uri: data.picture.large}}
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
                {data.name.first + ' ' + data.name.last}
              </Text>
              <Text style={[styles.commonText, {marginTop: 10}]}>
                {data.dob.age}
              </Text>
              <Text style={[styles.commonText]}>
                {data.gender.toUpperCase()}
              </Text>
            </View>
          </View>,

          <View style={styles.modalView}>
            <View style={{margin: 20}}>
              <Text style={styles.commonText}>{'Email: ' + data.email}</Text>
              <Text style={styles.commonText}>{'Phone: ' + data.phone}</Text>
              <Text style={styles.commonText}>{'Cell: ' + data.cell}</Text>
            </View>
          </View>,

          <View style={styles.modalView}>
            <View style={{margin: 20}}>
              <Text style={styles.commonText}>
                {'City: ' + data.location.city}
              </Text>
              <Text style={styles.commonText}>
                {'State: ' + data.location.state}
              </Text>
              <Text style={styles.commonText}>
                {'Country: ' + data.location.country}
              </Text>
              <Text style={styles.commonText}>
                {'PostCode: ' + data.location.postcode}
              </Text>
            </View>
          </View>,
        ]
      : null;
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
