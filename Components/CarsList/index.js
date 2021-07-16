import React from "react";
import { StyleSheet, View, Dimensions, FlatList } from "react-native";
import cars from "./cars";
import CarItem from "../CarItem";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
export default CarsList;
