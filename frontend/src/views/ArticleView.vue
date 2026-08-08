<script setup>
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();

const article = computed(() => store.state.currentArticle);

onMounted(() => {
    store.dispatch("fetchArticle", route.params.id);
});

async function onDelete() {
    await store.dispatch("deleteArticle", route.params.id);
    router.push("/articles");
}
</script>

<template>
    <div v-if="article">
        <h1>{{ article.title }}</h1>
        <p>{{ article.content }}</p>

        <v-btn :to="`/articles/${article.id}/edit`">Редактировать</v-btn>
        <v-btn color="error" @click="onDelete">Удалить</v-btn>
    </div>
    <div v-else>Загрузка...</div>
</template>

<style lang="scss" scoped></style>
