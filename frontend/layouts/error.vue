<template>
  <section class="block-page error-page">
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    <NuxtLink to="/">Главная</NuxtLink>
  </section>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default'
  }
</script>
