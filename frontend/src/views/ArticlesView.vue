<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const articles = computed(() => store.state.articles);

onMounted(() => {
    store.dispatch("fetchArticles");
});
</script>

<template>
    <div>
        <h1>Статьи</h1>

        <v-table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Создана</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="article in articles" :key="article.id">
                    <td>{{ article.id }}</td>
                    <td>
                        <RouterLink :to="`/articles/${article.id}`">
                            {{ article.title }}
                        </RouterLink>
                    </td>
                    <td>{{ article.createdAt }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<style lang="scss" scoped></style>
