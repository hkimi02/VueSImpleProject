<template>
  <button v-on:click="changeShowForm" class="show-form">show form</button>
  <AddEvent
    v-if="showForm"
    @change-show-form="changeShowForm"
    @event-added="AddEventEvents"
    :events="events"
  ></AddEvent>
  <div class="events">
    <h1>liste des evenements</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      @delete-event="deleteEvent(event)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import AddEvent from "@/components/AddEvent.vue";

export default {
  name: "HomeView",
  components: {
    EventCard,
    AddEvent,
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: "bien-etre animal",
          title: "journee d adopation des chats",
          description: "trouvez votre nouvel ami felin lors de cet evenement",
          location: "meow town ",
          date: "28 january 2022",
          time: "12:00",
          petsAllowed: true,
          organizer: "foulen ben foulen",
        },
        {
          id: 5928102,
          category: "bien-etre animal",
          title: "journee d adopation des chats",
          description: "trouvez votre nouvel ami felin lors de cet evenement",
          location: "meow town ",
          date: "28 january 2022",
          time: "12:00",
          petsAllowed: true,
          organizer: "foulen ben foulen",
        },
        {
          id: 59281033,
          category: "bien-etre animal",
          title: "journee d adopation des chats",
          description: "trouvez votre nouvel ami felin lors de cet evenement",
          location: "meow town ",
          date: "28 january 2022",
          time: "12:00",
          petsAllowed: true,
          organizer: "foulen ben foulen",
        },
      ],
      showForm: false,
    };
  },
  methods: {
    changeShowForm() {
      if (this.showForm == true) {
        this.showForm = false;
      } else {
        this.showForm = true;
      }
    },
    AddEventEvents(event) {
      this.events.push(event);
    },
    deleteEvent(event) {
      let i = 0;
      for (i = 0; i < this.events.length; i++) {
        if (this.events[i].id == event.id) {
          this.events.splice(i, 1);
          return;
        }
      }
    },
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.show-form {
  background: #3630a3;
  color: white;
}
</style>
