<script lang="ts">
	import DiscordWidget from '$lib/DiscordWidget.svelte';
    import statement_thumb from '$lib/images/planet.avif';
    import spaltung from '$lib/images/spaltung.avif';

    const newsArticles = [
        {
            title: "Community Statement | Gründe, Vorwürfe und die Zukunft von Wandoria",
            type: "Statement",
            thumbnail: spaltung,
            href: "/blog/community-statement"
        },            
    {
            title: "Unsere Server Architektur",
            type: "TECH BLOG",
            href: "/blog/server-architektur",
            thumbnail: statement_thumb
        },        
        
    ];
</script>

<section class="container mx-auto py-8 mt-16 mb-32" id="news">
    <div class="text-zinc-200">
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-4xl font-bold">Was passiert gerade?</h1>
            <!--
            <button class="bg-zinc-800 px-4 py-2 rounded-md text-sm font-medium uppercase  hover:bg-zinc-700 transition-colors">Erfahre mehr</button>
            -->
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr,580px] gap-4">
            <!-- Primary News Card -->
            <div class="overflow-hidden ">
                <a href={newsArticles[0].href} class="block  group bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-lg ">
                    <div class="aspect-video w-full relative overflow-hidden rounded-lg">
                        <img 
                            src={newsArticles[0].thumbnail} 
                            alt={newsArticles[0].title}
                            class="w-full h-full  object-cover group-hover:scale-105 transition-all duration-300"
                        />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-zinc-400 text-sm">{newsArticles[0].type}</span>
                        </div>
                        <h2 class="text-2xl text-zinc-200 font-medium">{newsArticles[0].title}</h2>
                    </div>
                </a>
            </div>

            <!-- Secondary News Cards -->
            <div class="flex flex-col gap-4">
                {#each newsArticles.slice(1) as article}
                    <div class="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 hover:-translate-y-1 transition-transform duration-500">
                        <a href={article.href} class="flex items-center gap-4 pl-4 p-2">
                            <div class="flex-grow">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="text-zinc-400 text-sm">{article.type}</span>
                                </div>
                                <h2 class="text-zinc-200 font-medium">{article.title}</h2>
                            </div>
                            <img 
                                    src={article.thumbnail} 
                                    alt={article.title}
                                    width={230}
                                    height={(16 / 9) * 230}
                                    class="w-[160px] md:w-[230px] aspect-video rounded-md"
                                />
                        </a>
                    </div>
                {/each}                
            </div>
        </div>
    </div>
</section>
