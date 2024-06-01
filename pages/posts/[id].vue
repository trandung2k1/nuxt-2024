<template>
    <div>
        <h1>Post Item</h1>
        <h2>{{ post.title }}</h2>
    </div>
</template>
<script setup>
let post = ref();
const route = useRoute();
//Block link
await useAsyncData(() =>
    $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`),
).then((res) => {
    // console.log(res.pending.value);
    post = res.data.value;
});
//Not block link
await useLazyAsyncData(() =>
    $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`),
).then((res) => {
    // console.log(res.pending.value);
});
</script>
<style></style>
