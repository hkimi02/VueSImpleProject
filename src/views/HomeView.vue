<script>/* eslint-disable */
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
          id: 1,
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
          id: 2,
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
          id: 3,
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
      searchValue: "",
      searchBool: false,
      searchedevents: [],
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
          this.editedEvent.id = "";
          this.editedEvent.title = "";
          this.editedEvent.date = "";
          this.editedEvent.time = "";
          this.callEdit = false;
          return;
        } else {
          i++;
        }
      }
    },
  },
  search() {
    this.searchBool = true;
    let i = 0;
    for (i = 0; i < this.events.length; i++) {
      if (this.searchValue == this.events.title) {
        let item = { ...this.events[i] };
        this.searchedevents.push(item);
      }
    }
  },
};
</script>
<template>
  <div class="input-group">
    <div class="form-outline">
      <input
        type="search"
        id="form1"
        class="form-control"
        placeholder="search"
        v-model="searchValue"
      />
    </div>
    <button type="button" class="btn btn-primary search-btn">
      <span class="material-symbols-outlined"> search </span>
    </button>
  </div>
  <br /><br />
  <button v-on:click="changeShowForm" class="show-form">show form</button>
  <AddEvent
    v-if="showForm"
    :callEdit="callEdit"
    :editedEvent="editedEvent"
    :events="events"
    @change-show-form="changeShowForm"
    @event-added="AddEventEvents"
    @event-edited="eventEdited"
  ></AddEvent>
  <div class="events" v-if="!searchBool">
    <h1>liste des evenements</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      @delete-event="deleteEvent(event)"
      @edit-event="editEvent(event)"
    ></EventCard>
  </div>
</template>
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
.search-btn {
  height: 2.5rem;
}
</style>
