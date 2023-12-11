import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dokumentooborot3-ав-пользователи-l');
  this.route('i-i-s-dokumentooborot3-ав-пользователи-e',
  { path: 'i-i-s-dokumentooborot3-ав-пользователи-e/:id' });
  this.route('i-i-s-dokumentooborot3-ав-пользователи-e.new',
  { path: 'i-i-s-dokumentooborot3-ав-пользователи-e/new' });
  this.route('i-i-s-dokumentooborot3-вход-в-систему-l');
  this.route('i-i-s-dokumentooborot3-вход-в-систему-e',
  { path: 'i-i-s-dokumentooborot3-вход-в-систему-e/:id' });
  this.route('i-i-s-dokumentooborot3-вход-в-систему-e.new',
  { path: 'i-i-s-dokumentooborot3-вход-в-систему-e/new' });
  this.route('i-i-s-dokumentooborot3-должность-l');
  this.route('i-i-s-dokumentooborot3-должность-e',
  { path: 'i-i-s-dokumentooborot3-должность-e/:id' });
  this.route('i-i-s-dokumentooborot3-должность-e.new',
  { path: 'i-i-s-dokumentooborot3-должность-e/new' });
  this.route('i-i-s-dokumentooborot3-сотрудники-l');
  this.route('i-i-s-dokumentooborot3-сотрудники-e',
  { path: 'i-i-s-dokumentooborot3-сотрудники-e/:id' });
  this.route('i-i-s-dokumentooborot3-сотрудники-e.new',
  { path: 'i-i-s-dokumentooborot3-сотрудники-e/new' });
});

export default Router;
