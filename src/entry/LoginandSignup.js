import React from "react";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  Dimensions,
} from "react-native";
import FormHeader from "../components/FormHeader";
import FormSelectorButton from "../components/FormSelectorButton";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { bg, bglight } from "../utilities/Colors";

const { width } = Dimensions.get("window");

const LoginandSignup = ({ navigation }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });

  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });
  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: [bg, bglight],
  });
  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: [bglight, bg],
  });

  return (
    <View style={{ flex: 1, paddingTop: 60 }}>
      <View style={{ height: 80 }}>
        <FormHeader
          leftHeading="Welcome "
          rightHeading="Back"
          subHeading="Diji Konnect"
          rightHeaderOpacity={rightHeaderOpacity}
          leftHeaderTranslateX={leftHeaderTranslateX}
          rightHeaderTranslateY={rightHeaderTranslateY}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <FormSelectorButton
          onPress={() => scrollView.current.scrollTo({ x: 0 })}
          style={styles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title="Login"
        />
        <FormSelectorButton
          onPress={() => scrollView.current.scrollTo({ x: width })}
          style={styles.borderRight}
          backgroundColor={signupColorInterpolate}
          title="Signup"
        />
      </View>

      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
      >
        {/* Login form */}
        <ScrollView>
          <LoginForm navigation={navigation} />
        </ScrollView>
        {/* Signup form */}
        <ScrollView>
          <SignupForm navigation={navigation} />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default LoginandSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
