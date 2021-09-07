import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  featureToggle: Ember.inject.service(),
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this , function() {
      var filtereddata = this.get('data')
      $.getJSON('assets/networks/product_space.json', function(data){

        new d3plus.Rings()
          .links(data['edges'])
          .nodes(data["nodes"])
          .label(d => d.id)
          .center("1324")
          .select("#rings")
          .tooltipConfig({
            body: "<b>HOLA MUNDO</b>"
          })
          .render();
      });
    });
  }
});
