import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОтделыEnum from '../enums/i-i-s-dokumentooborot3-отделы';

export default FlexberryEnum.extend({
  enum: ОтделыEnum,
  sourceType: 'IIS.Dokumentooborot3.Отделы'
});
