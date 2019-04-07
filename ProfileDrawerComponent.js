import React from 'react'
import { View, Linking, Text, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native'
import { DrawerItems, NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import console = require('console');


export default class ProfileDrawerComponent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      avatarPic: 'asset:/images/Tallylogoside.png',
    }
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  componentDidMount() {
    this.fetchData()
  }


  fetchData = async () => {
    //let data = await AsyncStorage.getItem('userToken')
    AsyncStorage.getItem('userdata', (err, result) => {
     
      let userData=JSON.parse(result)
      if(userData)
        this.setState({ user: userData.name })
      //console.log("async "+userData.userId)
    });
    
  }
  async removeItemValue(key) {
    console.log('Logout from App');
    try {
      await AsyncStorage.removeItem(key);
      this.props.properties.navigation.navigate('Login')
      return true;
    }
    catch(exception) {
      return false;
    }
  }
  _onClickOpenApp(appname){
    console.log('Click app '+appname)
    let url=appname
   
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        alert('Can\'t handle : ' + url);
      } else {
        console.log('Can  handle url: ' + url);
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render() {
    let { user } = this.state
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ width: '100%', backgroundColor: 'white'}}>
        <View
            style={{
              borderBottomColor:'#e8e8ec',
              borderBottomWidth:1,
              justifyContent:'center',
              alignItems:'center'
            }}
            >
          <Image
            style={{ width: 300, height: 80 }}
            resizeMode='contain'
            source={{ uri: this.state.avatarPic }}
          />
          </View>
        
            <View
            style={{
              paddingLeft:10,
              height: 30 ,
              width: '100%',
              flexDirection:'row',
              borderBottomColor:'#e8e8ec',
              borderBottomWidth:1,
              justifyContent:'center',
              alignItems:'center',
              paddingHorizontal:25
            }}
            >
              <MaterialCommunityIcons name='face' color='black' style={{fontSize:19,marginTop:1,flexDirection:'row'}} />
              <Text
              style={{
                paddingLeft:10,
                fontSize:16,
                flexDirection:'row',
                color:'#3a2d72'
              }}
              >
              {user?"Welcome "+user+" !":"Welcome"}
              </Text>


            </View>
        </View>

        <DrawerItems {...this.props.properties} />
       
        <View>
          <TouchableOpacity
            onPress={() => {
              this._onClickOpenApp('https://play.google.com/store/apps/details?id=com.tallyeducation.ereader')
            }}
            style={{ marginTop: 10 }}>
            {loginLogoutDrawerMenu ('E-Content','md-bookmarks')}
          </TouchableOpacity>
        </View>
        
        
        <View>
          <TouchableOpacity
            onPress={() => {
              user ? this.removeItemValue('userdata'): this.props.properties.navigation.navigate('Login');
            }}
            style={{ marginTop: 10 }}>
             {loginLogoutDrawerMenu(user ? 'Logout' : 'Login',user ? 'md-log-out' : 'md-log-in')}
          </TouchableOpacity>
        </View>

      </ScrollView>
    )
  }
}
const loginLogoutDrawerMenu = (text,iconName) => (
  <View
  style={{
    paddingLeft:20,
    height: 40 ,
    width: '100%',
    flexDirection:'row',
    paddingHorizontal:25
  }}
  >
    <Icon name={iconName} size={25} style={{fontSize:20,color:'black'}}/>
    <Text
    style={{
      fontSize:14,
      fontWeight:'bold',
      color:'black',
      paddingLeft:38
    }}
    >
    {text}
    </Text>
  </View>
 
);