new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    ended: false
  },
  methods: {
    damage: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
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
      document.getElementById('color').style.backgroundColor = 'darkgreen';
      document.getElementById('player').style.backgroundImage =
        'url(assets/full.png)';
    }
  }
});
