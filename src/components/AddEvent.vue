<template>
  <div class="AddEvent">
    <div class="container">
      <span
        class="material-symbols-outlined close-btn"
        v-on:click="changeShowForm"
      >
        close
      </span>
      <h2>add event</h2>
      <form action="" @submit.prevent="onSubmit">
        <div class="contentbox">
          <input type="text" required="required" v-model="title" />
          <span>Name event</span>
        </div>
        <div class="contentbox">
          <input type="date" required="required" v-model="date" />
          <span>date</span>
        </div>
        <div class="contentbox">
          <input type="text" required="required" v-model="time" />
          <span>hour</span>
        </div>
        <div class="contentbox">
          <input type="submit" value="Submit" @click="OnSubmit" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    events: Array,
  },
  data() {
    return {
      title: "",
      date: "",
      time: "",
    };
  },
  methods: {
    changeShowForm() {
      this.$emit("change-show-form");
    },
    OnSubmit() {
      if (this.title == "" || this.date == "" || this.time == "") {
        alert("please fill out the form feilds ! ");
      } else {
        let idEvent = 0;
        if (this.events.length == 0) {
          idEvent = 1;
        } else {
          idEvent = this.events[this.events.length - 1].id + 1;
        }
        let event = {
          id: idEvent,
          title: this.title,
          date: this.date,
          time: this.time,
        };
        this.$emit("event-added", event);
        this.changeShowForm();
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  z-index: 999999999999;
  position: relative;
  font-family: "poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    to right,
    rgba(169, 157, 250, 1) 0%,
    rgba(165, 126, 249, 1) 21%,
    rgba(169, 134, 249, 1) 55%,
    rgba(229, 195, 250, 1) 100%
  );
}
.container {
  position: relative;
  padding: 70px 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}

.container h2 {
  color: #333;
  margin-bottom: 40px;
  line-height: 1em;
  font-weight: 500;
  padding-left: 10px;
  border-left: 5px solid #7654c4;
}

.container .contentbox {
  position: relative;
  width: 300px;
  height: 45px;
  margin-bottom: 20px;
}

.container .contentbox:last-child {
  margin-bottom: 0;
}

.container .contentbox input {
  font-family: "poppins", sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #333;
  background: transparent;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.container .contentbox span {
  position: absolute;
  top: 1px;
  left: 1px;
  padding: 10px;
  display: inline-block;
  font-size: 14px;
  color: #333;
  font-size: 600;
  transition: 0.5s;
  pointer-events: none;
}

.container .contentbox input:focus ~ span,
.container .contentbox input:valid ~ span {
  transform: translateX(-10px) translateY(-32px);
  font-size: 12px;
}

.container .contentbox input[type="submit"] {
  background: #7654c4;
  color: #fff;
}
.container .contentbox input[type="submit"]:hover {
  background: #7654c4;
  color: #fff;
  opacity: 0.8;
}
.close-btn {
  cursor: pointer;
  margin-left: 95%;
}
.close-btn:hover {
  color: red;
}
.AddEvent {
  z-index: 99999999;
}
</style>
