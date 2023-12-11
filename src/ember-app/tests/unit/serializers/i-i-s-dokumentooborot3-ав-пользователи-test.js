import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot3-ав-пользователи', 'Unit | Serializer | i-i-s-dokumentooborot3-ав-пользователи', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dokumentooborot3-ав-пользователи',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dokumentooborot3-отделы',
    'transform:i-i-s-dokumentooborot3-пол',
    'transform:i-i-s-dokumentooborot3-права-пол',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
