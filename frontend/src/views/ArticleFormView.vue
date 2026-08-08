<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const title = ref("");
const content = ref("");

async function onSubmit() {
    await store.dispatch("createArticle", {
        title: title.value,
        content: content.value,
    });
    router.push("/articles");
}
</script>

<template>
    <div>
        <h1>Создать новую статью</h1>

        <v-text-field v-model="title" label="Название" />
        <v-textarea v-model="content" label="Текст" />

        <v-btn @click="onSubmit">Сохранить</v-btn>
    </div>
</template>

<style lang="scss" scoped></style>
