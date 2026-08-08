<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
    articleId: { type: [String, Number], required: true },
});

const comments = computed(() => store.state.comments);

const editingId = ref(null);
const editText = ref("");

function startEdit(comment) {
    editingId.value = comment.id;
    editText.value = comment.text;
}

function cancelEdit() {
    editingId.value = null;
    editText.value = "";
}

async function saveEdit() {
    await store.dispatch("updateComment", {
        articleId: props.articleId,
        commentId: editingId.value,
        text: editText.value,
    });
    cancelEdit();
}

async function onDelete(commentId) {
    await store.dispatch("deleteComment", {
        articleId: props.articleId,
        commentId,
    });
}
</script>

<template>
    <div v-for="comment in comments" :key="comment.id">
        <template v-if="editingId !== comment.id">
            <p>{{ comment.text }}</p>
            <v-btn @click="startEdit(comment)">Изменить</v-btn>
            <v-btn @click="onDelete(comment.id)">Удалить</v-btn>
        </template>

        <template v-else>
            <v-text-field v-model="editText" />
            <v-btn @click="saveEdit">Сохранить</v-btn>
            <v-btn @click="cancelEdit">Отмена</v-btn>
        </template>
    </div>
</template>

<style lang="scss" scoped></style>
