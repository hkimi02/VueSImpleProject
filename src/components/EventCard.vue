<template>
  <div class="event-card">
    <span>@ {{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
    <span
      class="material-symbols-outlined delete-btn"
      @click="deleteEvent(event)"
    >
      delete
    </span>
    <span class="material-symbols-outlined edit-btn" @click="editEvent(event)">
      edit
    </span>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
  methods: {
    deleteEvent(event) {
      this.$emit("delete-event", event);
    },
    editEvent(event) {
      this.$emit("edit-event", event);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.delete-btn:hover {
  color: red;
}
.edit-btn:hover {
  color: orange;
}
</style>
