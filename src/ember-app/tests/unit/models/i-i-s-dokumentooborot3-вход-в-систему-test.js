import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot3-вход-в-систему', 'Unit | Model | i-i-s-dokumentooborot3-вход-в-систему', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-dokumentooborot3-ав-пользователи',
    'model:i-i-s-dokumentooborot3-вход-в-систему',
    'model:i-i-s-dokumentooborot3-должность',
    'model:i-i-s-dokumentooborot3-сотрудники',
    'model:i-i-s-dokumentooborot3-т-ч-пользователь',
    'model:i-i-s-dokumentooborot3-т-ч-права',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
