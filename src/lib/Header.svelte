<script>
    import art from '$lib/images/art.avif';
    import title from '$lib/images/title.webp';
    import tiktok from '$lib/images/tiktok.svg';
    import discord from '$lib/images/discord.svg';        
</script>
<div class="mt-16 container mx-auto lg:min-h-[30rem] min-h-[15rem] relative bg-cover rounded-lg border border-zinc-800" style="background-image: url({art});">
    <div class="absolute -translate-x-1/2 left-1/2 -top-12 ">                
        <img src={title} alt="logo">
    </div>
    <div class="absolute bg-[#010A07] py-3 px-6 border-zinc-800 -bottom-[1px] rounded-t-md left-1/2 border border-b-0 -translate-x-1/2 md:min-w-[12rem] ">
        <div class="flex flex-col md:flex-row gap-2 prose-zinc">
            <a href="https://dc.wandoria.net" target="_blank" class="px-4 py-1 bg-emerald-400 rounded-sm flex-none content-center  ">
                <img  src={discord} alt="discord" height="20" width="20" class="mx-auto" />                
            </a>
            <button class="px-4 py-1 bg-emerald-400 rounded-sm font-semibold flex gap-2 copy-ip cursor-copy flex-none content-center mx-auto">
                
                <svg class="hidden md:block" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11C6 8.172 6 6.757 6.879 5.879C7.757 5 9.172 5 12 5H15C17.828 5 19.243 5 20.121 5.879C21 6.757 21 8.172 21 11V16C21 18.828 21 20.243 20.121 21.121C19.243 22 17.828 22 15 22H12C9.172 22 7.757 22 6.879 21.121C6 20.243 6 18.828 6 16V11Z" stroke="black" stroke-width="1.5"/>
                    <path opacity="0.5" d="M6 19C5.20435 19 4.44129 18.6839 3.87868 18.1213C3.31607 17.5587 3 16.7956 3 16V10C3 6.229 3 4.343 4.172 3.172C5.344 2.001 7.229 2 11 2H15C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5" stroke="black" stroke-width="1.5"/>
                    </svg>
                    wandoria.net    
            </button>
            <a href="https://www.tiktok.com/@wandoria.net" target="_blank" class="px-4 py-1 bg-emerald-400 rounded-sm flex-none content-center  ">
                <img src={tiktok} width="20" height="20"  alt="tiktok" class="mx-auto" />
            </a>
        </div>
    </div>
</div>