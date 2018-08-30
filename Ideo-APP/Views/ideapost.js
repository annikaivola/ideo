import React, { Component } from "react";
import { TouchableOpacity, View, Text, Button, StyleSheet,Image } from "react-native";
import { styles } from "../Styles/styles.js";
import RateBtn from "../Views/ratebtn.js";
import Ideainput from "./ideainput";

export default class IdeaPost extends Component {
constructor(props) {
  super(props);
  this.state ={
    procon: procon
  }

}

  render() {
    return (
      <View style={styles.ideapost}>
        <Text style={styles.IdeaPostText}>
          {this.props.idea}
        </Text>
        <View style={styles.ratebtndiv}>
        <TouchableOpacity onPress={()=>this.props.changeProcon(1)}>
          <Image
            style={{ height: 50, width: 50, marginRight: '4%'}}
            source={require("../Assets/images/plus.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.changeProcon(-1)}>
          <Image
            style={{ height: 50, width: 50 }}
            source={require("../Assets/images/minus.png")}
          />
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

// import React, { Component } from "react";
// import { TouchableOpacity, View, Text, Button, StyleSheet } from "react-native";
// import { styles } from "../Styles/styles.js";
// import RateBtn from "../Views/ratebtn.js";
// import Ideainput from "./ideainput";

// export default class IdeaPost extends Component {
//   static navigationOptions = {
//     header: null
//   };
//   render() {
//     return (
//       <View style={styles.ideapost}>
//         <Text style={styles.IdeaPostText}>
//           Ask Help from the unicorns and moomins and mark zuckerberg and other
//           imaginary beings of our doomed world
//         </Text>
//         <RateBtn />
//       </View>
//     );
//   }
// }
