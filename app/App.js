/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import styles from './theme/index';
import ItemViewHolder from './common/ItemViewHolder';
import API from './utils/RestAPI';
import branch from 'react-native-branch';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      isRefreshing: false,
      currentTab: 0,
      page: 0,
      photos: [],
      isLoading: false,
    };
    // TODO : Init Branc IO Setup
    branch.setIdentity('your id is here');
    this.onCreateBranch();
  }

  async componentWillMount() {
    //TODO : Branch Read deep link
    branch.subscribe(({error, params}) => {
      if (error) {
        console.error('Error from Branch: ' + error);
        return;
      }
      // params will never be null if error is null
      console.log('Branch : ', params);
    });

    // let lastParams = await branch.getLatestReferringParams(); // params from last open
    //  let installParams = await branch.getFirstReferringParams(); // params from original install
  }

  onCreateBranch = async () => {
    // only canonicalIdentifier is required
    let branchUniversalObject = await branch.createBranchUniversalObject(
      'canonicalIdentifier',
      {
        locallyIndex: true,
        title: 'Cool Content!',
        contentDescription: 'Cool Content Description',
        contentMetadata: {
          ratingAverage: 4.2,
          customMetadata: {
            prop1: 'test',
            prop2: 'abc',
          },
        },
      },
    );

    let linkProperties = {
      feature: 'share',
      channel: 'facebook',
    };

    let controlParams = {
      $desktop_url: 'http://desktop-url.com/monster/12345',
    };

    let {url} = await branchUniversalObject.generateShortUrl(
      linkProperties,
      controlParams,
    );
  };
  onRefresh = async () => {
    this.setState({
      isRefreshing: true,
    });
    // this.setState({
    //   isRefreshing: false,
    // });
  };

  handleLoadMore = () => {
    alert('more');
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        //TODO : API CALL
        this._loadPhotos();
      },
    );
  };

  componentDidMount() {
    this._loadPhotos();
  }

  _loadPhotos = () => {
    // TODO : Register USER
    const {page} = this.state;
    API.getPhotos(page).then(response => {
      // alert('load apis');
      // const {status, object} = response;
      //console.log('Response : ', JSON.stringify(response));
      this.setState({photos: response});
      // if (status == 200) {
      //   // TODO : API Sucess Response;
      // }
    });
  };

  render() {
    const {currentTab, photos} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.tabView}>
          <TouchableOpacity
            onPress={() => this.setState({currentTab: 0})}
            style={[
              styles.tabItem,
              {backgroundColor: currentTab === 0 ? 'blue' : 'white'},
            ]}>
            <Text
              style={
                currentTab === 0 ? styles.activeTabText : styles.inActiveTabText
              }>
              Grayscale
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({currentTab: 1})}
            style={[
              styles.tabItem,
              {backgroundColor: currentTab === 1 ? 'blue' : 'white'},
            ]}>
            <Text
              style={
                currentTab === 1 ? styles.activeTabText : styles.inActiveTabText
              }>
              Color
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.listView}
          data={photos}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          renderItem={({item}) => (
            <ItemViewHolder value={item} type={currentTab} />
          )}
          keyExtractor={item => item.id}
          onEndReached={() => this.handleLoadMore}
          onEndReachedThreshold={10}
        />
      </SafeAreaView>
    );
  }
}
