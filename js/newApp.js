/*new Vue({
  el: '#vue-app',
  data: {
    hp: 100
  },
  methods: {
    subtractHP: function(subtract) {
      this.hp -= subtract;
      if (this.hp <= 70 && this.hp > 30) {
        document.getElementById('healthBar').style.backgroundColor = 'yellow';
        document.getElementById('healthBar').style.width = '70%';
      } else if (this.hp <= 30) {
        document.getElementById('healthBar').style.backgroundColor = 'red';
        document.getElementById('healthBar').style.width = '30%';
      }
    }
  }
});
*/
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
      } else if (this.health <= 70 && this.health > 30) {
        document.getElementById('color').style.backgroundColor = 'yellow';
        document.getElementById('player').style.backgroundImage = 'url(assets/half.png)';
      } else if (this.health < 30) {
        document.getElementById('color').style.backgroundColor = 'red';
      }
    },

    restart: function() {
      this.health = 100;
      this.ended = false;
      document.getElementById('color').style.backgroundColor = 'darkgreen';
    }
  }
});
