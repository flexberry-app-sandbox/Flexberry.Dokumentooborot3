import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISDokumentooborot3АвПользователиLForm from './forms/i-i-s-dokumentooborot3-ав-пользователи-l';
import IISDokumentooborot3ВходВСистемуLForm from './forms/i-i-s-dokumentooborot3-вход-в-систему-l';
import IISDokumentooborot3ДолжностьLForm from './forms/i-i-s-dokumentooborot3-должность-l';
import IISDokumentooborot3СотрудникиLForm from './forms/i-i-s-dokumentooborot3-сотрудники-l';
import IISDokumentooborot3АвПользователиEForm from './forms/i-i-s-dokumentooborot3-ав-пользователи-e';
import IISDokumentooborot3ВходВСистемуEForm from './forms/i-i-s-dokumentooborot3-вход-в-систему-e';
import IISDokumentooborot3ДолжностьEForm from './forms/i-i-s-dokumentooborot3-должность-e';
import IISDokumentooborot3СотрудникиEForm from './forms/i-i-s-dokumentooborot3-сотрудники-e';
import IISDokumentooborot3АвПользователиModel from './models/i-i-s-dokumentooborot3-ав-пользователи';
import IISDokumentooborot3ВходВСистемуModel from './models/i-i-s-dokumentooborot3-вход-в-систему';
import IISDokumentooborot3ДолжностьModel from './models/i-i-s-dokumentooborot3-должность';
import IISDokumentooborot3СотрудникиModel from './models/i-i-s-dokumentooborot3-сотрудники';
import IISDokumentooborot3ТЧПользовательModel from './models/i-i-s-dokumentooborot3-т-ч-пользователь';
import IISDokumentooborot3ТЧПраваModel from './models/i-i-s-dokumentooborot3-т-ч-права';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dokumentooborot3-ав-пользователи': IISDokumentooborot3АвПользователиModel,
    'i-i-s-dokumentooborot3-вход-в-систему': IISDokumentooborot3ВходВСистемуModel,
    'i-i-s-dokumentooborot3-должность': IISDokumentooborot3ДолжностьModel,
    'i-i-s-dokumentooborot3-сотрудники': IISDokumentooborot3СотрудникиModel,
    'i-i-s-dokumentooborot3-т-ч-пользователь': IISDokumentooborot3ТЧПользовательModel,
    'i-i-s-dokumentooborot3-т-ч-права': IISDokumentooborot3ТЧПраваModel
  },

  'application-name': 'Dokumentooborot3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Dokumentooborot3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dokumentooborot3',
          title: 'Dokumentooborot3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        dokumentooborot3: {
          caption: 'Dokumentooborot3',
          title: 'Dokumentooborot3',
          'i-i-s-dokumentooborot3-ав-пользователи-l': {
            caption: 'Ав пользователи',
            title: ''
          },
          'i-i-s-dokumentooborot3-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-dokumentooborot3-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-dokumentooborot3-вход-в-систему-l': {
            caption: 'Вход в систему',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-dokumentooborot3-ав-пользователи-l': IISDokumentooborot3АвПользователиLForm,
    'i-i-s-dokumentooborot3-вход-в-систему-l': IISDokumentooborot3ВходВСистемуLForm,
    'i-i-s-dokumentooborot3-должность-l': IISDokumentooborot3ДолжностьLForm,
    'i-i-s-dokumentooborot3-сотрудники-l': IISDokumentooborot3СотрудникиLForm,
    'i-i-s-dokumentooborot3-ав-пользователи-e': IISDokumentooborot3АвПользователиEForm,
    'i-i-s-dokumentooborot3-вход-в-систему-e': IISDokumentooborot3ВходВСистемуEForm,
    'i-i-s-dokumentooborot3-должность-e': IISDokumentooborot3ДолжностьEForm,
    'i-i-s-dokumentooborot3-сотрудники-e': IISDokumentooborot3СотрудникиEForm
  },

});

export default translations;
