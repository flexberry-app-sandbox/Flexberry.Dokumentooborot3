import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.dokumentooborot3.caption'),
          title: i18n.t('forms.application.sitemap.dokumentooborot3.title'),
          children: [{
            link: 'i-i-s-dokumentooborot3-ав-пользователи-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot3.i-i-s-dokumentooborot3-ав-пользователи-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot3.i-i-s-dokumentooborot3-ав-пользователи-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot3-должность-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot3.i-i-s-dokumentooborot3-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot3.i-i-s-dokumentooborot3-должность-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot3-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot3.i-i-s-dokumentooborot3-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot3.i-i-s-dokumentooborot3-сотрудники-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot3-вход-в-систему-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot3.i-i-s-dokumentooborot3-вход-в-систему-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot3.i-i-s-dokumentooborot3-вход-в-систему-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})