<script lang="ts">
    let { children } = $props();
</script>
<article class="prose prose-invert container max-w-screen-md">
    {@render children()}
</article>