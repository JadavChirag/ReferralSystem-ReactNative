/* eslint-disable handle-callback-err */
/**
 * @providesModule AppUtils
 */

import { Dimensions, Platform} from 'react-native';

export const WINDOW = Dimensions.get('window');
export const STORAGE_PATH = Platform.OS === 'android' ? 'file://' : '';
export const deviceType = WINDOW.width < 480 ? 'phone' : 'tablet';

export const isPhoneX =
  Platform.OS === 'ios' && (WINDOW.height === 812 || WINDOW.height === 896);



export const smartScale = value => {
  const height =
    Platform.OS === 'ios'
      ? isPhoneX
        ? WINDOW.height - 78
        : WINDOW.height
      : WINDOW.height - 24;
  if (deviceType == 'phone') {
    return (value * height) / 667;
  } else {
    return (value * height) / 667;
  }
};
const screenPaddingValue = isPhoneX ? smartScale(17) : smartScale(26);
export const screenChatPaddingValue = isPhoneX
  ? smartScale(34)
  : smartScale(26);
const scalarSpace = isPhoneX ? smartScale(11) : smartScale(13);

export const getWidthByColumn = (column = 1) => {
  const totalPixel = WINDOW.width;
  const totalSpace = screenPaddingValue * 2 + scalarSpace * (column - 1);
  return (totalPixel - totalSpace) / column;
};

export const headerHeight =
  Platform.OS === 'ios'
    ? isPhoneX
      ? smartScale(87)
      : smartScale(65)
    : smartScale(45);


export const convertFormData = async data => {
  let formData = new FormData();
  for (let k in data) {
    formData.append(k, data[k]);
  }
  return formData;
};

export const queryString = obj => {
  let str = [];
  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
};

