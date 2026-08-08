<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <v-app>
        <v-app-bar color="primary" density="comfortable">
            <v-app-bar-title>Test</v-app-bar-title>
            <v-btn to="/articles" variant="text">Статьи</v-btn>
            <v-btn to="/articles/new" variant="text">Создать</v-btn>
            <v-btn to="/analytics" variant="text">Аналитика</v-btn>
        </v-app-bar>

        <v-main>
            <v-container>
                <RouterView />
            </v-container>
        </v-main>
    </v-app>
</template>
