/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Share, Text, Image, View, TouchableOpacity} from 'react-native';
import styles from '../theme/index';
import branch from 'react-native-branch';

function ItemViewHolder(props) {
  const URL = props.type === 1 ? '' : '?grayscale';
  return (
    <View style={styles.listViewItem}>
      <Image
        style={styles.image}
        resizeMode={'cover'}
        source={{
          uri: props.value.download_url + URL,
        }}
      />
      <View style={styles.itemFooter}>
        <Text style={styles.textView}>{'by ' + props.value.author}</Text>
        <TouchableOpacity
          onPress={async () => {
            // TODO : Share Deep Link
            try {
              let branchUniversalObject = await branch.createBranchUniversalObject(
                'canonicalIdentifier',
                {
                  locallyIndex: true,
                  title: 'Cool Content!',
                  contentDescription: 'Cool Content Description',
                },
              );

              let linkProperties = {
                feature: 'share',
                channel: 'facebook',
              };

              let controlParams = {
                $desktop_url: 'your link is here',
              };

              let {url} = await branchUniversalObject.generateShortUrl(
                linkProperties,
                controlParams,
              );

              const result = await Share.share({
                message:
                  'Hey it’d mean a lot to me if you’d check out my discount link to so aesthetic! thanks!\n\n' +
                  url,
              });

              if (result.action === Share.sharedAction) {
                if (result.activityType) {
                  // shared with activity type of result.activityType
                } else {
                  // shared
                }
              } else if (result.action === Share.dismissedAction) {
                // dismissed
              }
            } catch (error) {
              alert(error.message);
            }
          }}>
          <Image
            style={styles.fabAdd}
            source={require('../assets/images/ic_share.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ItemViewHolder;
