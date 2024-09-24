<template>
    <div id="users-list">
        <div class="toolbar">
            <button @click="filterGender('male')">Male</button>
            <button @click="filterGender('female')">Female</button>
            <button @click="resetFilter">Show All</button>
        </div>

        <div v-if="filteredUsers.length > 0" class="user-list">
            <UserCard v-for="(user, index) in filteredUsers" :key="index" :userData="user" />
        </div>
        <p v-else>Список юзерів пустий</p>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed } from 'vue'
    import UserCard from './UserCard.vue'

    const users = ref([
        {
            firstName: 'John',
            lastName: 'Doe',
            gender: 'male',
            age: 25,
            position: 'Developer',
            photo: 'https://via.placeholder.com/150',
            hobbies: ['Reading', 'Coding']
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            gender: 'female',
            age: 15,
            position: 'Designer',
            photo: 'https://via.placeholder.com/150',
            hobbies: ['Art', 'Photography']
        },
        {
            firstName: 'Bob',
            lastName: 'Smith',
            gender: 'male',
            age: 25,
            position: 'Manager',
            photo: 'https://via.placeholder.com/150',
            hobbies: ['Reading', 'Coding']
        },
        {
            firstName: 'Alice',
            lastName: 'Johnson',
            gender: 'female',
            age: 17,
            position: 'Teacher',
            photo: 'https://via.placeholder.com/150',
            hobbies: ['Reading', 'Photography']
        },
        {
            firstName: 'John',
            lastName: 'Williams',
            gender: 'male',
            age: 17,
            position: 'Developer',
            photo: 'https://via.placeholder.com/150',
            hobbies: ['Reading', 'Coding']
        },
        {
            firstName: 'Mary',
            lastName: 'Brown',
            gender: 'female',
            age: 25,
            position: 'Engineer',
            photo: 'https://via.placeholder.com/150',
            hobbies: ['Reading', 'Photography']
        },
        {
            firstName: 'David',
            lastName: 'Miller',
            gender: 'male',
            age: 25,
            position: 'Manager',
            photo: 'https://via.placeholder.com/150',
            hobbies: ['Reading', 'Coding']
        },
        {
            firstName: 'Sarah',
            lastName: 'Davis',
            gender: 'female',
            age: 25,
            position: 'Teacher',
            photo: 'https://via.placeholder.com/150',
            hobbies: ['Reading', 'Photography']
        },
        {
            firstName: 'David',
            lastName: 'Miller',
            gender: 'male',
            age: 25,
            position: 'Manager',
            photo: 'https://via.placeholder.com/150',
            hobbies: ['Reading', 'Coding']
        },
        {
            firstName: 'Sarah',
            lastName: 'Davis',
            gender: 'female',
            age: 25,
            position: 'Teacher',
            photo: 'https://via.placeholder.com/150',
            hobbies: ['Reading', 'Photography']
        }
    ])

    const genderFilter = ref<string | null>(null)

    const filteredUsers = computed(() => {
        if (!genderFilter.value) {
            return users.value
        }
        return users.value.filter((user) => user.gender === genderFilter.value)
    })

    function filterGender(gender: string) {
        genderFilter.value = gender
    }

    function resetFilter() {
        genderFilter.value = null
    }
</script>

<style scoped>
    #users-list {
        display: flex;
        flex-direction: column;
        justify-content: left;
    }
    .toolbar {
        display: block;
        justify-content: space-between;
        margin-bottom: 10px;
        max-width: 200px;
    }
    .toolbar > button {
        margin: 5px;
        background-color: hsla(160, 100%, 37%, 1);
        border: solid 3px #4c4c4c;
    }
    .toolbar > button:hover {
        background-color: lightgreen;
    }
    .user-list {
        display: grid;
        grid-template-columns: 200px 200px 200px 200px 200px;
        grid-template-rows: auto;
        background-color: #333333;
    }
</style>
