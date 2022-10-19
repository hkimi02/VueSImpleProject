<template>
  <div class="events">
    <h1>liste des evenements</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
export default {
  name: "HomeView",
  components: {
    EventCard,
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
      ],
    };
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
