// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: true,
    nitro: {
        prerender: {
            routes: ['/posts/1', '/posts/2'],
            // ignore: ['/dynamic'],
        },
    },
});
