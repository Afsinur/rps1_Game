const app = {
  data() {
    return {
      handItems: ["1F44A", "1F590", "2702"],
      currentInputs: [],
      ply1: null,
      ply2: null,
      timeout1: 250,
      parms1: 1,
      parms2: 1,
      gm_counter: 0,
      gm_counter1: 0,
      gm_counter_Lm: 10,
      plr1Sc: 0,
      plr2Sc: 0,
      cl_l1: "rgb(154, 180, 214)",
      remch1: false,
      clickInp: ["a", "s", "d", "j", "k", "l"],
    };
  },
  methods: {
    go(e) {
      if (this.gm_counter1 < this.gm_counter_Lm) {
        var key, key1;
        if (this.clickInp.includes(e) == false) {
          key = e.keyCode;
          key1 = e.key;
        } else {
          if (e == "a") {
            key = 65;
          } else if (e == "s") {
            key = 83;
          } else if (e == "d") {
            key = 68;
          } else if (e == "j") {
            key = 74;
          } else if (e == "k") {
            key = 75;
          } else if (e == "l") {
            key = 76;
          }
          key1 = e;
        }
        var pl1 = { id: "pl1", data: key1 };
        var pl2 = { id: "pl2", data: key1 };
        var x0 = this.currentInputs[0];
        var x1 = this.currentInputs[1];
        var pid1 = document.querySelector("#p1");
        var pid2 = document.querySelector("#p2");
        var pr1 = document.querySelector(".pr1");
        var pr2 = document.querySelector(".pr2");
        var span1 = document.querySelector("#span1");
        var span2 = document.querySelector("#span2");
        var span3 = document.querySelector("#span3");
        var l_a = document.querySelector("#l_a");
        var l_s = document.querySelector("#l_s");
        var l_d = document.querySelector("#l_d");
        var l_j = document.querySelector("#l_j");
        var l_k = document.querySelector("#l_k");
        var l_l = document.querySelector("#l_l");
        if (this.currentInputs.length < 2) {
          if (key == 65 || key == 83 || key == 68) {
            if (this.parms1 == 1) {
              span1.style.color = "#333";
              span2.innerHTML = 0;
              span3.innerHTML = 0;
              this.gm_counter++;
              this.parms1 = 0;
              this.parms2 = 1;
              pr1.style.border = "2px solid #0f0";
              if (key == 65) {
                l_a.style.background = "#05f";
                this.ply1 = 0;
                this.currentInputs.push(pl1);
              } else if (key == 83) {
                l_s.style.background = "#05f";
                this.ply1 = 1;
                this.currentInputs.push(pl1);
              } else if (key == 68) {
                l_d.style.background = "#05f";
                this.ply1 = 2;
                this.currentInputs.push(pl1);
              }
              setTimeout(() => {
                pid1.innerHTML = `&#x${this.handItems[this.ply1]};`;
                pr1.style.border = "2px solid rgb(0, 68, 255)";
                l_a.style.background = this.cl_l1;
                l_s.style.background = this.cl_l1;
                l_d.style.background = this.cl_l1;
              }, this.timeout1);
              //-------------------------
              if (this.gm_counter == 2) {
                span1.style.color = "rgb(0, 68, 255)";
                this.parms1 = 1;
                this.parms2 = 1;
                this.gm_counter1++;
                x0 = this.currentInputs[0];
                x1 = this.currentInputs[1];
                if (x1.data == "a" && x0.data == "k") {
                  span3.innerHTML = 1;
                  this.plr2Sc++;
                } else if (x1.data == "a" && x0.data == "l") {
                  span2.innerHTML = 1;
                  this.plr1Sc++;
                } else if (x1.data == "d" && x0.data == "k") {
                  span2.innerHTML = 1;
                  this.plr1Sc++;
                } else if (x1.data == "s" && x0.data == "l") {
                  span3.innerHTML = 1;
                  this.plr2Sc++;
                } else if (x1.data == "s" && x0.data == "j") {
                  span2.innerHTML = 1;
                  this.plr1Sc++;
                } else if (x1.data == "d" && x0.data == "j") {
                  span3.innerHTML = 1;
                  this.plr2Sc++;
                } else if (
                  (x1.data == "a" && x0.data == "j") ||
                  (x1.data == "s" && x0.data == "k") ||
                  (x1.data == "d" && x0.data == "l")
                ) {
                  span2.innerHTML = 0;
                  span3.innerHTML = 0;
                }
                this.gm_counter = 0;
                this.currentInputs = [];
              }
            }
          } else if (key == 74 || key == 75 || key == 76) {
            if (this.parms2 == 1) {
              span1.style.color = "#333";
              span2.innerHTML = 0;
              span3.innerHTML = 0;
              this.gm_counter++;
              this.parms1 = 1;
              this.parms2 = 0;
              pr2.style.border = "2px solid #0f0";
              if (key == 74) {
                l_j.style.background = "#05f";
                this.ply2 = 0;
                this.currentInputs.push(pl2);
              } else if (key == 75) {
                l_k.style.background = "#05f";
                this.ply2 = 1;
                this.currentInputs.push(pl2);
              } else if (key == 76) {
                l_l.style.background = "#05f";
                this.ply2 = 2;
                this.currentInputs.push(pl2);
              }
              setTimeout(() => {
                pid2.innerHTML = `&#x${this.handItems[this.ply2]};`;
                pr2.style.border = "2px solid rgb(0, 68, 255)";
                l_j.style.background = this.cl_l1;
                l_k.style.background = this.cl_l1;
                l_l.style.background = this.cl_l1;
              }, this.timeout1);
              //---------------------------
              if (this.gm_counter == 2) {
                span1.style.color = "rgb(0, 68, 255)";
                this.parms1 = 1;
                this.parms2 = 1;
                this.gm_counter1++;
                x0 = this.currentInputs[0];
                x1 = this.currentInputs[1];
                if (x0.data == "a" && x1.data == "k") {
                  span3.innerHTML = 1;
                  this.plr2Sc++;
                } else if (x0.data == "a" && x1.data == "l") {
                  span2.innerHTML = 1;
                  this.plr1Sc++;
                } else if (x0.data == "d" && x1.data == "k") {
                  span2.innerHTML = 1;
                  this.plr1Sc++;
                } else if (x0.data == "s" && x1.data == "l") {
                  span3.innerHTML = 1;
                  this.plr2Sc++;
                } else if (x0.data == "s" && x1.data == "j") {
                  span2.innerHTML = 1;
                  this.plr1Sc++;
                } else if (x0.data == "d" && x1.data == "j") {
                  span3.innerHTML = 1;
                  this.plr2Sc++;
                } else if (
                  (x0.data == "a" && x1.data == "j") ||
                  (x0.data == "s" && x1.data == "k") ||
                  (x0.data == "d" && x1.data == "l")
                ) {
                  span2.innerHTML = 0;
                  span3.innerHTML = 0;
                }
                this.gm_counter = 0;
                this.currentInputs = [];
              }
            }
          }
        }
      } else {
        var limitSp = document.querySelector("#span1");
        limitSp.style.color = "#dc3232";
        limitSp.innerHTML = `Maximum limit ${this.gm_counter_Lm}`;
        this.remch1 = true;
      }
    },
    again(e, e1, e2) {
      var limitSp = document.querySelector("#span1");
      var span2 = document.querySelector("#span2");
      var span3 = document.querySelector("#span3");
      var p1 = document.querySelector("#p1");
      var p2 = document.querySelector("#p2");
      p1.innerHTML = "&#x1F44A;";
      p2.innerHTML = "&#x1F44A;";
      span2.innerHTML = e;
      span3.innerHTML = e;
      this.ply1 = e2;
      this.ply2 = e2;
      this.parms1 = e1;
      this.parms2 = e1;
      this.gm_counter = e;
      this.gm_counter1 = e;
      this.plr1Sc = e;
      this.plr2Sc = e;
      this.currentInputs = [];
      limitSp.style.color = "rgb(0, 68, 255)";
      this.remch1 = false;
    },
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      this.go(e);
    });
  },
};
Vue.createApp(app).mount("#app");
