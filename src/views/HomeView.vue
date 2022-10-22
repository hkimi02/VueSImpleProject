<template>
  <button v-on:click="changeShowForm" class="show-form">show form</button>
  <AddEvent
    v-if="showForm"
    :callEdit="callEdit"
    :editedEvent="editedEvent"
    :eventId="events.length == 0 ? 1 : events[events.length - 1].id + 1"
    @change-show-form="changeShowForm"
    @event-added="AddEventEvents"
    @event-edited="eventEdited"
  ></AddEvent>
  <div class="events">
    <h1>liste des evenements</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      @delete-event="deleteEvent(event)"
      @edit-event="editEvent(event)"
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
          date: "2022-01-28",
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
          date: "2022-01-28",
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
          date: "2022-01-28",
          time: "12:00",
          petsAllowed: true,
          organizer: "foulen ben foulen",
        },
      ],
      showForm: false,
      editedEvent: {
        title: "",
        date: "",
        time: "",
      },
      callEdit: false,
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

      this.events.length == 0
        ? console.log(1)
        : console.log(this.events[this.events.length - 1].id + 1);
      console.log(this.events.length);
      console.log(this.events[this.events.length - 1]);
    },
    deleteEvent(event) {
      // let i = 0;
      // for (i = 0; i < this.events.length; i++) {
      //   if (this.events[i].id == event.id) {
      //     this.events.splice(i, 1);
      //     return;
      //   }
      // }
      this.events = this.events.filter((x) => x.id != event.id);
    },
    editEvent(event) {
      this.editedEvent = event;
      this.callEdit = true;
      this.changeShowForm();
    },
    eventEdited(afterEvent) {
      let i = 0;
      let found = false;
      while (i < this.events.length && found == false) {
        if (this.events[i].id == afterEvent.id) {
          this.events[i] = afterEvent;
          found = true;
          this.editedEvent = {
            title: "",
            date: "",
            time: "",
          };
          this.callEdit = false;
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
