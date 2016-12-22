<template>
    <nav class="nav-navbar">
        <router-link to="/list" class="nav-name">问卷管理<router-link>
        <span class="nav-user">{{ user.name }}</span>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        computed: {
            user () {
                return this.$store.state.user
            }
        }
    }
</script>
