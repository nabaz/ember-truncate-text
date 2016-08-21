import Ember from 'ember';

export default Ember.Controller.extend({
  myTextToTruncate: 'hello world',

  actions: {
      changeInput(){
        this.set('myTextToTruncate', $('#myText').val());
      }
    }

});
