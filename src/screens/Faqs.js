import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import React from "react";
// import { Thumbnail, List, ListItem, Separator } from 'native-base';

var height = Dimensions.get("screen").height;
var width = Dimensions.get("screen").width;

export default function Faqs() {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: mainbg,
        paddingTop: 70,
        paddingHorizontal: 17,
      }}
    >
      <Collapse>
        <CollapseHeader>
          <View style={{ height: 20, width: "80%", backgroundColor: mainbg }}>
            <Text>How to use this app</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>
            Lorem ipsum dolor sit amet, con lorem ipsum dolor sit amet,
            consectetur adipiscing. lorem ipsum
          </Text>
        </CollapseBody>
      </Collapse>

      <Collapse>
        <CollapseHeader>
          <View>
            <Text>How to use this app</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>Ta daa!</Text>
        </CollapseBody>
      </Collapse>
    </View>
  );
}

let mainbg = "#E9E8F3";
let primary = "#4940AA";
