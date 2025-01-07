<script lang="ts">
    import w from '$lib/images/w.png';
	
	import '../app.css';

	let { children } = $props();
</script>

<div class="dark:bg-[#010A07]">
	<nav class="container">
		<div class="flex items-center justify-between  pt-6 pb-8">
			<div class="flex items-center gap-4">
				<img src={w} height="32" width="32" alt="logo" >				
			</div>
			<div class="flex items-center gap-4">                
				<a href="/" class="dark:text-zinc-200">Home</a>
				<a href="/regeln" class="dark:text-zinc-200">Regeln</a>
				<a target="_blank" href="https://dc.wandoria.net" class="dark:text-zinc-200">Discord</a>
				<button class="flex items-center gap-2 bg-emerald-400 px-4 py-2 rounded-md text-zinc-950 copy-ip cursor-pointer">					
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6 11C6 8.172 6 6.757 6.879 5.879C7.757 5 9.172 5 12 5H15C17.828 5 19.243 5 20.121 5.879C21 6.757 21 8.172 21 11V16C21 18.828 21 20.243 20.121 21.121C19.243 22 17.828 22 15 22H12C9.172 22 7.757 22 6.879 21.121C6 20.243 6 18.828 6 16V11Z" stroke="black" stroke-width="1.5"/>
						<path opacity="0.5" d="M6 19C5.20435 19 4.44129 18.6839 3.87868 18.1213C3.31607 17.5587 3 16.7956 3 16V10C3 6.229 3 4.343 4.172 3.172C5.344 2.001 7.229 2 11 2H15C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5" stroke="black" stroke-width="1.5"/>
						</svg>
					wandoria.net 
				</button>
			</div>
		</div>
	</nav>

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


