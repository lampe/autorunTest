import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

const counter = new ReactiveVar(0);

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.autorun(
    _.debounce(
      () => {console.log('with debounce:', counter.get());},
      300
    )
  );

  this.autorun(
      () => {console.log('without debounce:', counter.get());}
  );
});

Template.hello.helpers({
  counter() {
    return counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicke
    counter.set(counter.get() + 1);
  },
});
