import Ember from 'ember';
import numeral from 'numeral';
const {computed} = Ember;

export default Ember.Component.extend({
    firstLegend: null,
    staticLegend: computed('legend', function(){
      let legend = this.get('legend')
      if (!this.get('firstLegend')) {
        this.set('firstLegend', legend)
        return legend
      } else {
        return this.get('firstLegend')
      }

    }),
    actions: {
        filterByKey(start, end) {
          this.get('filterData')(numeral(start).format('0'), numeral(end).format('0'));
        },
    }
});
