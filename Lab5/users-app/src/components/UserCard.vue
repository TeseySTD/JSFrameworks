<template>
    <div class="user-card" :class="{ adult: userData.age > 18, minor: userData.age <= 18 }">
        <img :src="userData.photo" alt="User Photo" class="user-photo" />
        <h2>{{ userData.firstName }} {{ userData.lastName }}</h2>
        <p>{{ userData.position }}</p>
        <p>Gender: {{ userData.gender }}</p>
        <p v-if="userData.age > 18">Age: {{ userData.age }}</p>
        <ul>
            <li v-for="(hobby, index) in userData.hobbies" :key="index">{{ hobby }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import type { UserData } from '@/ts/user_data'
    const props = defineProps<{ userData: UserData }>()
</script>

<style scoped>
.user-card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        margin: 10px;
        text-align: center;
        color: #373636;
    }
    .user-card img {
        width: 100px;
        border-radius: 50%;
    }
    .adult {
        background-color: hsla(160, 100%, 37%, 1);
    }
    .minor {
        background-color: lightgreen;
    }
</style>
