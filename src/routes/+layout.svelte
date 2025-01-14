<script lang="ts">
    import w from '$lib/images/w.webp';
	
	import '../app.css';
	import Navbar from './Navbar.svelte';

	let { children } = $props();

	let navbar = $state(false);
	function toggleNavbar() {
        navbar = !navbar;
    }
</script>

<div class="dark:bg-[#010A07]">
	<Navbar />
	<main>
		{@render children()}
	</main>

	<div class="mt-32 prose prose-invert container mx-auto text-center bg-zinc-900 py-8 rounded-t-lg" >
        <h4 class="">Geplante Beta ist Mitte Februar</h4>
        <a target="_blank" href="https://dc.wandoria.net" >Komm auf unseren Discord</a>

    </div>
    <div class="w-full mt-0 py-4 bg-zinc-900 border-t border-zinc-800">
        <div class="flex items-center gap-8 justify-center container mx-auto text-zinc-300">
            <a href="/kontakt" class="hover:text-zinc-100">Kontakt</a>
            <div class="" id="logo">
                <img src={w} alt="logo" height="32" width="32">
            </div>
            <a href="/impressum" class="hover:text-zinc-100">Impressum</a>
            
        </div>
        <div class="text-center py-2">
            <p class="text-xs text-zinc-500">Unter der Leitung von AERNHARD, vertreten durch EinJOJO und CrayonGamerHD</p>
            <p class="text-xs text-zinc-500">Website erstellt von <a class="text-zinc-300" href="https://einjojo.it">einjojo</a></p>
        </div>
    </div>    
</div>

