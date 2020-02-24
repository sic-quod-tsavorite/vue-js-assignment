new Vue({
  el: '#vue-app',
  data: {
    name: 'Homer',
    skill: 'Donut Eating',
    age: 40,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(timeOfDay) {
      return 'Good ' + timeOfDay + ', ' + this.name;
    },
    add: function(increment) {
      this.age += increment;
    },
    subtract: function(subtract) {
      this.age -= subtract;
    },
    updateMousePos: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
      console.log(event);
    },
    logName: function() {
      console.log('u have entered ur name');
    },
    logAge: function() {
      console.log('u have entered ur age');
    }
  }
});
