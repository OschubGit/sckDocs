<template>
  <div>
    <h3>Estilo de botones según fondo</h3>
    <img src="../public/img/logo.png" />
    <p v-for="(item, index) in lista" :key="index">{{ item.scss }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: [
        { scss: "este es html" },
        { scss: "este es css" },
        { scss: "este es js" },
      ],
    };
  },
};
</script>