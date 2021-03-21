<template>
    <div>
        <h3>Este es un compoennte</h3>
        <ul>
            <li v-for="(item, index) in lista" :key="index">
                {{item.nombre}} - {{item.descripcion}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lista: [
                {nombre: 'html', descripcion: 'este es html'},
                {nombre: 'css', descripcion: 'este es css'},
                {nombre: 'js', descripcion: 'este es js'},
            ]
        }
    },
}
</script>