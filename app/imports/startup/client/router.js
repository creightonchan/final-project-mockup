import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/battle', {
  name: 'Battle_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Battle_Page' });
  },
});

FlowRouter.route('/match', {
  name: 'Match_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Match_Page' });
  },
});

FlowRouter.route('/contact', {
  name: 'Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Contact_Page' });
  },
});

FlowRouter.route('/library', {
  name: 'Library_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Library_Page' });
  },
});

FlowRouter.route('/rules', {
  name: 'Rules_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Rules_Page' });
  },
});


FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
