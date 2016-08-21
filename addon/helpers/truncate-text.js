import Ember from 'ember';

export function truncateText(params, hash) {
  var value = params[0];
  var len = hash.limit;
  var text = '';
  var omission = '';

  if (value !== undefined) {
    text = value.substr(0, len);
    if (value.length > len) {
      omission = hash.omission;
      if(omission){
        text += omission;
      }else{
        text += '...';
      }

    }

  } else {
    text = '';
  }

  return text;
}

export default Ember.Helper.helper(truncateText);
