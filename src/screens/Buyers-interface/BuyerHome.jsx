import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Notification from "../../../assets/Notificationbell.svg";
import CustomInputField from "../../components/inputField";
import Character from "../../../assets/Character.svg";
import Category from "../../../assets/darhboard.svg";
import CategoryHolder from "../../components/CategoryHolder";
import ImageSvg from "../../../assets/image.svg";
import { Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import CheckoutItem from "../../components/CheckoutItem";
import FarmerCheckout from "../../components/FarmerCheckout";

const BuyerHome = () => {
  const [searchField, setSearchField] = useState("");
  const categoriesArr = [
    "food items",
    "livestock & dairy produces",
    "herbs & spices",
    "fruits & vegetables",
    "view more",
  ];

  const handleSearch = (text) => {
    setSearchField(text);
  };

  const data = [1, 2, 3, 4];
  const numColumns = 2;
  const windowWidth = Dimensions.get("window").width;

  const renderGridItem = () => {
    return (
      <FarmerCheckout /> // Assuming FarmerCheckout is your custom component
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={[null]}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.inputHolder}>
            <View style={styles.notificationHolder}>
              <Notification />
            </View>
            <View style={{ width: "80%" }}>
              <CustomInputField
                onChangeText={handleSearch}
                value={searchField}
                placeholder="search for products"
              />
            </View>
          </View>
        }
        renderItem={() => (
          <View>
            <Text style={styles.Header}>
              Find Fresh and Sustainable Local Produce
            </Text>
            <View style={styles.gradientBox}>
              <View style={styles.textCont}>
                <Text style={styles.contText1}>set up your profile</Text>
                <Text style={styles.contText2}>
                  You need to complete your profile in order to add to cart and
                  continue to checkout. You can still browse for products and
                  farmers.
                </Text>
                <View style={styles.btn}>
                  <Text style={styles.btntext}>Go to profile</Text>
                </View>
              </View>
              <View>
                <Character />
              </View>
            </View>
            <View style={styles.categoryHolder}>
              <View style={styles.category}>
                <Text style={styles.categoryText}>Categories</Text>
                <View style={styles.icon}>
                  <Category />
                </View>
              </View>
              <View style={styles.categoryBtns}>
                <FlatList
                  data={categoriesArr}
                  keyExtractor={(item, index) => `key-${index}`}
                  numColumns={2}
                  renderItem={({ item }) => <CategoryHolder text={item} />}
                  contentContainerStyle={styles.categoryBtns}
                />
              </View>
            </View>
            <View style={styles.featureProductSections}>
              <View style={styles.featureProduct}>
                <Text style={styles.categoryText}>Featured Products</Text>
                <View style={styles.Imageicon}>
                  <ImageSvg />
                </View>
              </View>
              <Text style={styles.text}>
                Recommended for you at discounted prices
              </Text>
              <View style={{ margin: 5 }}>
                <ScrollView
                  style={{ flex: 1 }}
                  horizontal={true}
                  scrollEventThrottle={16}
                  pagingEnabled={true}
                >
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                </ScrollView>

                <ScrollView
                  style={{ flex: 1 }}
                  horizontal={true}
                  scrollEventThrottle={16}
                  pagingEnabled={true}
                >
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                  <View style={styles.slide}>
                    <CheckoutItem />
                  </View>
                </ScrollView>
                <View style={{padding: 0}}>
                  <View style={styles.featureProduct}>
                    <Text style={styles.categoryText}>Top rated farmers</Text>
                    <View style={styles.Imageicon}>
                      <ImageSvg />
                    </View>
                  </View>
                  <Text style={styles.text}>
                    Based on reviews from other customers and quality of
                    products
                  </Text>
                  <View style={styles.grid}>
                    <FlatList
                      data={data}
                      renderItem={renderGridItem}
                      keyExtractor={(item) => item.toString()}
                      numColumns={numColumns} // Set the number of columns in your grid
                      contentContainerStyle={styles.gridContainer}
                      columnWrapperStyle={{
                        // Calculate the width of each grid item dynamically based on screen width
                        marginHorizontal: windowWidth * 0.02, // Adjust as needed
                        width:
                          (windowWidth -
                            (numColumns + 1) * (windowWidth * 0.02)) /
                          numColumns,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },

  gridContainer: {
    paddingHorizontal: 5, // Adjust as needed
  },

  contSlider: {
    height: 400,
  },

  slide: {
    flex: 1,
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
  },

  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 20,
  },
  category: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 5,
  },

  text: {
    fontFamily: "Raleway_600SemiBold",
    color: "#B4B4B4",
    fontSize: 14,
    lineHeight: 23,
    letterSpacing: 0.5,
  },

  featureProductSections: {
    marginTop: 35,
  },

  featureProduct: {
    flexDirection: "column",
    alignSelf: "flex-start",
    gap: 5,
  },
  categoryText: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: 18,
    lineHeight: 25,
  },
  categoryHolder: {
    alignSelf: "flex-start",
    marginTop: 20,
  },
  inputHolder: {
    marginTop: 30,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100,
    justifyContent: "space-between",
    gap: 15,
  },
  notificationHolder: {
    height: 45,
    width: 45,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#B4B4B4",
    alignSelf: "center",
    alignSelf: "flex-start",
    transform: [{ translateY: 19 }],
  },
  icon: {
    transform: [{ translateY: 6 }],
  },
  Header: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 26,
    lineHeight: 40,
    alignSelf: "flex-start",
    width: 385,
  },
  gradientBox: {
    backgroundColor: "#0AC17F",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 8,
    padding: 10,
    marginTop: 15,
  },
  textCont: {
    width: "70%",
    flexDirection: "column",
    alignItems: "center",
  },
  categoryBtns: {
    marginTop: 15,
    flexDirection: "row",
    width: "100%",
  },
  contText1: {
    fontFamily: "Raleway_700Bold",
    color: "#ffff",
    fontSize: 16,
    lineHeight: 23,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    marginVertical: 5,
  },
  contText2: {
    fontFamily: "Raleway_500Medium",
    color: "#ffff",
    fontSize: 12,
    lineHeight: 16,
  },
  btn: {
    backgroundColor: "#ffff",
    width: 150,
    height: 40,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginVertical: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btntext: {
    textAlign: "center",
    fontFamily: "Raleway_500Medium",
    fontSize: 14,
  },
});

export default BuyerHome;
