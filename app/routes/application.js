import Route from '@ember/routing/route';
import calculateSum from 'common-utilities/utils';
export default Route.extend({
  model() {
    return calculateSum(1, 2);
  }
});
