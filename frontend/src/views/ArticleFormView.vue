<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();

const title = ref("");
const content = ref("");

const isEdit = computed(() => Boolean(route.params.id));

onMounted(async () => {
    if (!isEdit.value) return;

    await store.dispatch("fetchArticle", route.params.id);
    const article = store.state.currentArticle;

    if (article) {
        title.value = article.title;
        content.value = article.content;
    }
});

async function onSubmit() {
    const payload = {
        title: title.value,
        content: content.value,
    };

    if (isEdit.value) {
        await store.dispatch("updateArticle", {
            id: route.params.id,
            payload,
        });
        router.push(`/articles/${route.params.id}`);
    } else {
        await store.dispatch("createArticle", payload);
        router.push("/articles");
    }
}
</script>

<template>
    <div>
        <h1>{{ isEdit ? "Редактировать статью" : "Создать новую статью" }}</h1>

        <v-text-field v-model="title" label="Название" />
        <v-textarea v-model="content" label="Текст" />

        <v-btn @click="onSubmit">Сохранить</v-btn>
    </div>
</template>
