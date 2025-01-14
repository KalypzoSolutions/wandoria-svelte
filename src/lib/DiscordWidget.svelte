<script lang="ts">
    import { onMount } from 'svelte';

    let iframeVisible = false;

    // Intersection Observer to detect when the iframe comes into view
    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    iframeVisible = true;
                    observer.disconnect(); // Load only once
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        const target = document.querySelector('#discord-embed-placeholder');
        if (target) {
            observer.observe(target);
        }
    });
</script>

<div class="relative mx-auto w-[340px] h-[500px]" id="discord-embed-placeholder">
    {#if iframeVisible}
        <iframe
            title="Discord Embed"
            src="https://discordapp.com/widget?id=1324119249584783360&theme=dark"
            width="340"
            height="500"
            class="absolute inset-0 w-full h-full"
            allowtransparency={true}
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
    {:else}
        <!-- Placeholder for the Discord embed -->
        <div class="bg-zinc-800 text-zinc-200 flex items-center justify-center w-full h-full">
            <p>Loading Discord...</p>
        </div>
    {/if}
</div>
