import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

// StackNavigator screens

import AboutCertificate from '../screens/Certification/AboutCertificate';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileDrawerComponent  from './ProfileDrawerComponent';

import ContentLib from '../screens/Content/ContentLib';
import ContentView from '../screens/Content/ContentView';
import MyLibrary from '../screens/Subscriptions/MyLibrary';

import MockTest from '../screens/MockTest/MockTest';
import MockTestRegistration from '../screens/MockTest/MockTestRegistration'; 
import MockTestWebView from '../screens/MockTest/MockTestWebView';

import LocatePartner from '../screens/LocatePartner/LocatePartner';
import LocationSearch from '../screens/LocatePartner/LocationSearch';

import AboutUs from '../screens/About/AboutUs';

import ViewCertificate from '../screens/Certification/ViewCertificate'

import CandidateMockTestWebView from '../screens/CandidateMockTest/CandidateMockTestWebView';
import CandidateMockTest from '../screens/CandidateMockTest/CandidateMockTestList';

const style = StyleSheet.create({
  icon :{fontSize:25,color:'#fff',paddingLeft:17},
  iconContainer:{flex:1,height:55,width:58,justifyContent:'center'}
})
const drawerMenuIcon = (navigation) => {
  return (
    <TouchableOpacity style={style.iconContainer}
      onPress={() => { navigation.openDrawer(); }}
    >
      <Icon name='md-menu' style={style.icon} />
    </TouchableOpacity>
  );
};

const drawerCenterSearchIcon = (navigation) => {
  return (
    <TouchableOpacity transparent
      style={style.iconContainer}
      onPress={() => { navigation.navigate('LocationSearch'); }}
    >
      <Icon name='md-search' style={{color:'#fff',marginTop:6,fontSize:25,paddingLeft:15}} />
    </TouchableOpacity>
  );
};
const drawerCenterSearchBackIcon = (navigation) => {
  return (
    <TouchableOpacity transparent 
      onPress={() => { navigation.navigate('LocatePartner',{curloc:'back'}); }}
    >
      <Icon name='md-arrow-back' style={style.icon} />
    </TouchableOpacity>
  );
};


const CertificateStack = createStackNavigator({
  AboutCertificate: { 
    screen: AboutCertificate,
    navigationOptions: ({ navigation }) => ({
      headerLeft : drawerMenuIcon(navigation) ,
      title: 'Certificate Overview',
      headerStyle: { backgroundColor: '#005dac' },
      headerTintColor: '#fff'
    }), 
  },
  ViewCertificate: { 
    screen: ViewCertificate,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: true,
      headerStyle: {backgroundColor:"#005dac"},
      headerTintColor: '#fff',
      tabBarVisible: false,
    }),
  },
}, {
  initialRouteName: 'AboutCertificate',
  //headerMode: 'none'
})
CertificateStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === 'ViewCertificate') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

const LocatePartnerStack = createStackNavigator({
  LocatePartner: { 
    screen: LocatePartner,
    navigationOptions: ({ navigation }) => ({
      headerLeft : drawerMenuIcon(navigation) ,
      headerRight : drawerCenterSearchIcon(navigation) ,
      title: 'Locate Center',
      headerStyle: {  backgroundColor: '#005dac' },
      headerTintColor: '#fff'
    }), 
  },
  LocationSearch: { 
    screen: LocationSearch,
    navigationOptions: ({ navigation }) => ({
      headerLeft : drawerCenterSearchBackIcon(navigation),
      title: 'Enter Location',
      headerStyle: { backgroundColor:"#005dac" },
      headerTintColor: '#fff',
    }),
  },
}, {
  initialRouteName: 'LocatePartner',
  //headerMode: 'none'
})
LocatePartnerStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === 'LocationSearch') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

const ContentStack = createStackNavigator({
  Content: { 
    screen: ContentLib,
    navigationOptions: ({ navigation }) => ({
      headerLeft : drawerMenuIcon(navigation),
      title: 'Sample Content',
      headerStyle: {backgroundColor: '#005dac'},
      headerTintColor: '#fff'
    }), 
  },
  ContentView: { 
    screen: ContentView,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {backgroundColor:"#005dac" },
      headerTintColor: '#fff',
      tabBarVisible: false,
    }),
 },
}, {
  initialRouteName: 'Content',
  //headerMode: 'none'
})
ContentStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === 'ContentView') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

//My Library starts
const MyLibraryStack = createStackNavigator({
  MyLibrary: { 
    screen: MyLibrary,
    navigationOptions: ({ navigation }) => ({
      headerLeft : drawerMenuIcon(navigation) ,
      title: 'My Library',
      headerStyle: { backgroundColor: '#005dac' },
      headerTintColor: '#fff'
    }), 
  },
  ContentView: { 
    screen: ContentView,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {backgroundColor:"#005dac"},
      headerTintColor: '#fff',
      tabBarVisible: false,
    }),
  },
}, {
  initialRouteName: 'MyLibrary',
  //headerMode: 'none'
})
MyLibraryStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === 'ContentView') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

//My Library ends


const MockTestStack = createStackNavigator({
  MockTest: { 
    screen: MockTest,
    navigationOptions: ({ navigation }) => ({
      headerLeft : drawerMenuIcon(navigation) ,
      title: 'Sample Mock Tests',
      headerStyle: { backgroundColor: '#005dac' },
      headerTintColor: '#fff'
    }), 
  },
  MockTestRegistration: { 
    screen: MockTestRegistration,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {backgroundColor:"#005dac" },
      headerTintColor: '#fff',
    }),
  },
  MockTestWebView: { 
    screen: MockTestWebView,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {backgroundColor:"#005dac"},
      headerTintColor: '#fff',
    }),
  },
}, {
  initialRouteName: 'MockTest',
  //headerMode: 'none'
})
MockTestStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === 'MockTestRegistration' || routeName ==='MockTestWebView') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

const Tabs = createBottomTabNavigator({
  'Certification': { screen: CertificateStack },
  "Center": { screen: LocatePartnerStack },
  "Content": { screen: ContentStack },
  "Mock Test": { screen: MockTestStack },
}, {
  order: ['Certification', 'Center', 'Content','Mock Test'],
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Certification') {
        iconName = "md-ribbon";
      } else if (routeName === 'Center') {
        iconName = "md-pin";
      } else if ( routeName == "Content") {
        iconName = "md-paper"
      }
      else if ( routeName == "Mock Test") {
        iconName = "md-checkbox"
      }
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor}  />;
    }
  }),
  tabBarOptions: {
    activeTintColor: '#005dac',
    //activeBackgroundColor :'#b8d8f3',
    inactiveTintColor: '#5a5a5a',
    labelStyle: {
      fontSize: 12,
    },
  },
});


// const TabStack = createStackNavigator({ //... Adding the Stack here
//   Tabs: {screen: Tabs}
// }, {
//   headerMode: 'none'
// })

const CandidateMockTestStack = createStackNavigator({
  MockTest: { 
    screen: CandidateMockTest,
    navigationOptions: ({ navigation }) => ({
      headerLeft : drawerMenuIcon(navigation) ,
      title: 'Candidate Mock Test',
      headerStyle: { backgroundColor: '#005dac' },
      headerTintColor: '#fff'
    }), 
  },
  CandidateMockTestWebView: { 
    screen: CandidateMockTestWebView,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {backgroundColor:"#005dac" },
      headerTintColor: '#fff',
    }),
  },
}, {
  initialRouteName: 'MockTest',
  //headerMode: 'none'
})
CandidateMockTestStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName ==='CandidateMockTestWebView') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};




export default createDrawerNavigator({
  "Home": { 
        screen: Tabs , 
        navigationOptions: {
          drawerLabel: 'Home',
          drawerIcon: <Icon name='md-home' size={25} style={{fontSize:20,color:'black'}} />
        }
    },
  "About TEPL" : {
      screen : AboutUs,
      navigationOptions: {
        drawerLabel: 'About TEPL',
        drawerIcon: <Icon name='md-information-circle' size={25} style={{fontSize:20,color:'black'}}/>
      }
  },
  "My Library" : {
    screen : MyLibraryStack,
    navigationOptions: {
      drawerLabel: 'My Library',
      drawerIcon: <Icon name='md-paper' size={25} style={{fontSize:20,color:'black'}} />
    }
  },
  "Mock TEPL" : {
      screen : CandidateMockTestStack,
      navigationOptions: {
        drawerLabel: 'Candidate Mock Test',
        drawerIcon: <Icon name='md-checkbox' size={25} style={{fontSize:20,color:'black'}}/>
      }
  },
}, 
{
  drawerWidth: 300,
  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#005dac',
    inactiveTintColor: 'black',
    labelStyle: 'normal'
  },
  contentComponent: (props: any) => (
    <ProfileDrawerComponent properties={props} />
  )  
}
)
