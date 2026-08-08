<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const dateFrom = ref("");
const dateTo = ref("");

const analytics = computed(() => store.state.analytics);

const searched = ref(false);

async function onSearch() {
    if (!dateFrom.value || !dateTo.value) return;

    await store.dispatch("fetchAnalytics", {
        dateFrom: dateFrom.value,
        dateTo: `${dateTo.value}T23:59:59`,
    });
    searched.value = true;
}
</script>

<template>
    <div>
        <h1>Аналитика комментариев</h1>
        <v-text-field v-model="dateFrom" type="date" label="От" />
        <v-text-field v-model="dateTo" type="date" label="До" />
        <v-btn @click="onSearch">Показать</v-btn>

        <p v-if="searched && analytics.length === 0">
            За выбранный период комментариев нет
        </p>

        <div v-for="group in analytics" :key="group.articleId">
            <h3>{{ group.articleTitle }}</h3>
            <p v-for="com in group.comments" :key="com.id">{{ com.text }}</p>
        </div>
    </div>
</template>
