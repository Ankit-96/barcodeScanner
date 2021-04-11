import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {data} = this.props;
    console.log(data);

    return (
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: 'yellow',

          // shadowColor: '#fff',
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
          // marginTop: 40,
          // shadowOpacity: 0.5,
          // shadowRadius: 4,
          // elevation: 20,
        }}>
        <Text>Modal Shown</Text>
      </View>
    );
  }
}

export default Details;
