<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
    articleId: { type: [String, Number], required: true },
});

const text = ref("");

async function onSubmit() {
    if (!text.value.trim()) return;

    await store.dispatch("createComment", {
        articleId: props.articleId,
        text: text.value,
    });
    text.value = "";
}
</script>

<template>
    <v-textarea v-model="text" label="Комментарий" />
    <v-btn @click="onSubmit">Добавить</v-btn>
</template>

<style lang="scss" scoped></style>
