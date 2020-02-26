new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    ended: false,
    punch: 0
  },
  methods: {
    damage: function() {
      this.punch = Math.floor((Math.random()*10)+1);
      this.health -= this.punch;
      if (this.health <= 0) {
        this.ended = true;
        this.health = 0;
        document.getElementById('player').style.backgroundImage =
          'url(assets/done.png)';
      } else if (this.health <= 70 && this.health > 30) {
        document.getElementById('color').style.backgroundColor = 'yellow';
        document.getElementById('player').style.backgroundImage =
          'url(assets/half.png)';
      } else if (this.health < 30) {
        document.getElementById('color').style.backgroundColor = 'red';
        document.getElementById('player').style.backgroundImage =
          'url(assets/almost.png)';
      }
    },

    restart: function() {
      this.health = 100;
      this.ended = false;
      this.punch = 0;
      document.getElementById('color').style.backgroundColor = 'darkgreen';
      document.getElementById('player').style.backgroundImage =
        'url(assets/full.png)';
    }
  }
});
