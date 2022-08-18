import {Alert} from 'react-native';

function alertYesNo(title, message, callback, onCancel) {
  Alert.alert(
    title,
    message,
    [
      {text: 'Không', style: 'cancel', onPress: onCancel},
      {text: 'Đồng ý', onPress: callback},
    ],
    {cancelable: false},
  );
}
function alertConfirm(title, message, callback) {
  Alert.alert(
    title,
    message,
    [{text: 'OK', onPress: callback}],

    {cancelable: false},
  );
}
function alert(content, title) {
  Alert.alert(title, content);
}

export default {
  alertYesNo,
  alertConfirm,
  alert,
};
