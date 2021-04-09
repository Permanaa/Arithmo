export const numpad = [
  [
    {value: 'AC', type: 'clear', top: true},
    {value: '( )', type: 'parenthesis', top: true},
    {value: '%', type: 'percentage', top: true},
    {value: '/', type: 'operator', right: true},
  ],
  [
    {value: '7', type: 'number'},
    {value: '8', type: 'number'},
    {value: '9', type: 'number'},
    {value: 'x', type: 'operator', right: true},
  ],
  [
    {value: '4', type: 'number'},
    {value: '5', type: 'number'},
    {value: '6', type: 'number'},
    {value: '-', type: 'operator', right: true},
  ],
  [
    {value: '1', type: 'number'},
    {value: '2', type: 'number'},
    {value: '3', type: 'number'},
    {value: '+', type: 'operator', right: true},
  ],
  [
    {value: '+/-', type: 'reverse'},
    {value: '0', type: 'number'},
    {value: '.', type: 'number'},
    {value: '=', type: 'equal', right: true, equal: true},
  ],
];
