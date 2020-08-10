import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 15,
          marginHorizontal: 17,
        }}>
        {/* Search */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              // value="What do you want eat ?"
              style={{
                borderColor: '#bdc3c7',
                borderWidth: 1,
                borderRadius: 50,
                paddingLeft: 50,
                paddingRight: 10,
                backgroundColor: 'white',
                fontSize: 14,
                marginRight: 10,
              }}
              placeholder="What do you want eat ?"
            />
            <View>
              <Image
                source={require('../assets/icon/search.png')}
                style={{
                  position: 'absolute',
                  top: -38,
                  left: 12,
                }}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../assets/icon/promo.png')} />
          </View>
        </View>
        {/* Gopay */}
        <View style={styles.goPayContainer}>
          <View style={styles.gopayBarHeader}>
            <Image source={require('../assets/icon/gopay.png')} />
            <Text
              style={{
                fontSize: 17,
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: 0.5,
              }}>
              Rp10.000.000
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 25,
              paddingBottom: 25,
            }}>
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/icon/pay.png')}
                  height={30}
                  width={30}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 5,
                }}>
                Pay
              </Text>
            </View>
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/icon/nearby.png')}
                  height={30}
                  width={30}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 5,
                }}>
                Nearby
              </Text>
            </View>
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/icon/topup.png')}
                  height={30}
                  width={30}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 5,
                }}>
                Top Up
              </Text>
            </View>
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/icon/more.png')}
                  height={30}
                  width={30}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 5,
                }}>
                More
              </Text>
            </View>
          </View>
        </View>
        {/* menu goride gosend dll */}
        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          <View style={styles.goRidegoSendContainer}>
            <View style={styles.goRidegoSend}>
              <Image source={require('../assets/icon/go-ride.png')} />
            </View>
            <Text
              style={{fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5}}>
              GO-RIDE
            </Text>
          </View>
          <View style={styles.goRidegoSendContainer}>
            <View style={styles.goRidegoSend}>
              <Image source={require('../assets/icon/go-car.png')} />
            </View>
            <Text
              style={{fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5}}>
              GO-CAR
            </Text>
          </View>
          <View style={styles.goRidegoSendContainer}>
            <View style={styles.goRidegoSend}>
              <Image source={require('../assets/icon/go-bluebird.png')} />
            </View>
            <Text
              style={{fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5}}>
              GO-BULEBIRD
            </Text>
          </View>
          <View style={styles.goRidegoSendContainer}>
            <View style={styles.goRidegoSend}>
              <Image source={require('../assets/icon/go-send.png')} />
            </View>
            <Text
              style={{fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5}}>
              GO-SEND
            </Text>
          </View>
          <View style={styles.goRidegoSendContainer}>
            <View style={styles.goRidegoSend}>
              <Image source={require('../assets/icon/go-deals.png')} />
            </View>
            <Text
              style={{fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5}}>
              GO-DEALS
            </Text>
          </View>
          <View style={styles.goRidegoSendContainer}>
            <View style={styles.goRidegoSend}>
              <Image source={require('../assets/icon/go-pulsa.png')} />
            </View>
            <Text
              style={{fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5}}>
              GO-PULSA
            </Text>
          </View>

          <View style={styles.goRidegoSendContainer}>
            <View style={styles.goRidegoSend}>
              <Image source={require('../assets/icon/go-food.png')} />
            </View>
            <Text
              style={{fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5}}>
              GO-FOOD
            </Text>
          </View>
          <View style={styles.goRidegoSendContainer}>
            <View style={styles.goRidegoSend}>
              <Image source={require('../assets/icon/go-more.png')} />
            </View>
            <Text
              style={{fontSize: 14, fontWeight: 'bold', letterSpacing: 0.5}}>
              MORE
            </Text>
          </View>
        </View>
        {/* line space grey */}
        <View style={{backgroundColor: '#ecf0f1', width: '100%', height: 20}} />
        {/* news */}
        <View>
          <View style={{marginVertical: 10, position: 'relative'}}>
            <Image
              source={require('../assets/dummy/sepak-bola.jpg')}
              style={{height: 170, width: '100%', borderRadius: 10}}
            />
            <View
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'black',
                position: 'absolute',
                opacity: 0.3,
                borderRadius: 10,
              }}
            />
            <Image
              source={require('../assets/logo/white.png')}
              style={{
                height: 15,
                width: 55,
                position: 'absolute',
                top: 10,
                left: 16,
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>GO-NEWS</Text>
            <Text style={{color: '#bdc3c7'}}>
              Si pemain bola lagi ngobrol, action aja karena di foto. Ingin tau
              lebih lanjut ?silahkan baca sendiri..
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#27a912',
                padding: 8,
                width: 70,
                alignItems: 'center',
                borderRadius: 8,
                alignSelf: 'flex-end',
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  letterSpacing: 1,
                  fontWeight: 'bold',
                }}>
                READ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* line space grey */}
        <View style={{backgroundColor: '#ecf0f1', width: '100%', height: 20}} />
        {/* info diskon banner section */}
        <View>
          <View style={{marginVertical: 10, position: 'relative'}}>
            <Image
              source={require('../assets/dummy/food-banner.jpg')}
              style={{
                width: '100%',
                height: 200,
                borderRadius: 8,
                position: 'relative',
              }}
            />
            <View
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'black',
                position: 'absolute',
                opacity: 0.3,
                borderRadius: 10,
              }}
            />
            <Image
              source={require('../assets/logo/white.png')}
              style={{
                height: 15,
                width: 55,
                position: 'absolute',
                top: 10,
                left: 16,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                alignContent: 'center',
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  free GOO-FOOD voucher
                </Text>
                <Text
                  style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                  Quick, before they are out !{' '}
                </Text>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#27a912',
                    padding: 8,
                    // width: 70,
                    alignItems: 'center',
                    borderRadius: 8,
                    alignSelf: 'flex-end',
                    marginVertical: 10,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      letterSpacing: 1,
                      fontWeight: 'bold',
                    }}>
                    GET VOUCHER
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* banner scroll horizontal */}
        <View style={{marginVertical: 10}}>
          <Image
            source={require('../assets/logo/go-food.png')}
            style={{height: 20, width: 100}}
          />
          <View
            style={{
              marginVertical: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#27a912',
              }}>
              Nearby
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#27a912',
                }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                width: 150,
                marginRight: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/dummy/go-food-banka.jpg')}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                  marginBottom: 5,
                }}
              />
              <Text style={{fontWeight: '600'}}>Martabak Joss Gandos</Text>
            </View>
            <View
              style={{
                width: 150,
                marginRight: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/dummy/go-food-gm.jpg')}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                  marginBottom: 5,
                }}
              />
              <Text style={{fontWeight: '600'}}>Bakmi Mahal Gandos</Text>
            </View>
            <View
              style={{
                width: 150,
                marginRight: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/dummy/go-food-kfc.jpg')}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                  marginBottom: 5,
                }}
              />
              <Text style={{fontWeight: '600'}}>Ayam Goreng Hafsa</Text>
            </View>
            <View
              style={{
                width: 150,
                marginRight: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/dummy/go-food-orins.jpg')}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                  marginBottom: 5,
                }}
              />
              <Text style={{fontWeight: '600'}}>Ga Tau ini Apaan?</Text>
            </View>
            <View
              style={{
                width: 150,
                marginRight: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/dummy/go-food-pak-boss.jpg')}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                  marginBottom: 5,
                }}
              />
              <Text style={{fontWeight: '600'}}>Penyetaan Kayaknya ?</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      {/* bottom nav bar */}
      <View style={styles.navBarBottomContainer}>
        <View style={styles.navBottomContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/icon/home-active.png')} />
          </View>
          <Text style={{...styles.textNavBottomBar, color: '#27a912'}}>
            Home
          </Text>
        </View>
        <View style={styles.navBottomContainer}>
          <View style={styles.iconContainer}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/icon/order.png')}
            />
          </View>
          <Text style={styles.textNavBottomBar}>Orders</Text>
        </View>
        <View style={styles.navBottomContainer}>
          <View style={styles.iconContainer}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/icon/help.png')}
            />
          </View>
          <Text style={styles.textNavBottomBar}>Help</Text>
        </View>
        <View style={styles.navBottomContainer}>
          <View style={styles.iconContainer}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/icon/inbox.png')}
            />
          </View>
          <Text style={styles.textNavBottomBar}>Inbox</Text>
        </View>
        <View style={styles.navBottomContainer}>
          <View style={styles.iconContainer}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/icon/account.png')}
            />
          </View>
          <Text style={styles.textNavBottomBar}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  navBarBottomContainer: {
    backgroundColor: 'white',
    height: 54,
    flexDirection: 'row',
    //   justifyContent: 'space-between',
  },
  navBottomContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    // backgroundColor: 'white',
  },
  textNavBottomBar: {
    fontSize: 12,
    color: '#545454',
    marginTop: 1,
  },

  goPayContainer: {
    marginTop: 10,
    borderRadius: 10,
    width: '100%',
    // height: 150,
    backgroundColor: '#1d56b5',
    flexDirection: 'column',
  },
  gopayBarHeader: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2262c9',
    color: 'white',
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  goRidegoSendContainer: {
    // width: 80,
    // height: 80,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  goRidegoSend: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 25,
    // marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
