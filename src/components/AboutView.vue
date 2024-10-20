<template>
  <div class="about">
    <div class="about__main">
      <PersonIcon class="about__image" />
      <p class="about__text">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
      </p>
    </div>
  </div>
</template>

<script setup>
import PersonIcon from '@components/PersonIcon.vue'
</script>


<style lang="scss" scoped>
.about__main, .about__contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.about__contact {
  gap: 0.75rem; 
  font-weight: 500;
}

.about__text {
  text-align: center;
}

.about__image {
  margin: 1rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  border: solid 2px black;
  fill: black;
}
</style>