import React, { memo } from "react";
import { Text, TouchableOpacity, View,StyleSheet,Image } from "react-native";
import Swiper from "react-native-web-swiper";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

const SwiperScreen = ({ navigation }) => (
          <View style={{flex:1}}>
              <View style={{flex:1}}>
                  <Swiper
                    from={0}
                    minDistanceForAction={0.2}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '>',
                      nextTitleStyle: { color:'black',fontSize: 35, fontWeight: '1000' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{fontSize: 35, fontWeight: '1000' }}>
                            {'<'}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  >
                      <View style={styles.SwiperText}>
                      <Background>
                      <BackButton goBack={() => navigation.navigate("StartScreen")} />
                      <Image style={[styles.logo]} source={require('../assets/doc.png')} />
                         <Text style={styles.paragraph}>
                          Find expert doctors for particular problem on one tap
                          </Text>
                      </Background>
                      </View>

                      <View style={styles.SwiperText}>
                      <Background>
                      <Image style={[styles.logo]} source={require('../assets/free.png')} />
                         <Text  style={styles.paragraph}>
                          Free of cost
                         </Text>
                      </Background>
                      </View>

                      <View style={styles.SwiperText}>
                     <Background>
                      <Image style={[styles.logo]} source={require('../assets/heart.png')} />
                     <Text style={styles.paragraph}>
                      Continuous Health Track
                      </Text>
                      </Background>
                      </View>

                      <View style={styles.SwiperText}>
                      <Background>
                      <Image style={[styles.logo]} source={require('../assets/swipbot.png')} />
                       <Text style={styles.paragraph}>
                         24*7 Chat Assisstance
                        </Text>
                     </Background>
                      </View>

                      <View style={styles.SwiperText}>
                       <Background>
                      <Image style={[styles.logo]} source={require('../assets/report.png')} />
                         <Text style={styles.paragraph}>
                            Detailed reports
                          </Text>
                            <Button mode="contained" onPress={() => navigation.navigate("HomeScreen")}>
                               Getting Started
                            </Button>
                      </Background>
                      </View>
                  </Swiper>
              </View>
          </View>
          
);

const styles = StyleSheet.create({
  SwiperText: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  logo: {
    height: 200,
    width: 215,
  },
  paragraph:{
    margin: 35,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default memo(SwiperScreen);
