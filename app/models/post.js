import DS from 'ember-data';

debugger;
var hasMany = DS.hasMany;

export default DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    gifURL: DS.attr('string')
});
