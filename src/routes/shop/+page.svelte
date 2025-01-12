<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
	import type { Basket, TebexHeadless } from 'tebex_headless';
    
  
    let basketId = "not available";
    let basketPromise: Promise<Basket>;
        let addPromise: Promise<Basket>;
    let tebexHeadless: TebexHeadless;
    let Tebex: any;
  
    onMount(async () => {
      // Import libraries dynamically to avoid SSR issues
      const { TebexHeadless } = await import('tebex_headless');
      Tebex = (await import('@tebexio/tebex.js')).default;
      
      tebexHeadless = new TebexHeadless('x1sq-735d7d81cd0770e66ce0fc2473d6399a4aa641a1');          
      basketPromise = tebexHeadless.createMinecraftBasket(
        "Ein_Jojo",
        "http://localhost:5173/shop/checkout",
        "http://localhost:5173/shop/cancel",
      );
  
      basketPromise.then(basket => {
        basketId = basket.ident;                
      });
      
    });
  
    function checkout() {
      if (browser) {
        Tebex.checkout.init({
          ident: basketId,
        });
        Tebex.checkout.launch();
      }
    }
    function addToBasket() {
      if (browser) {
        basketPromise  =tebexHeadless.addPackageToBasket(basketId, 6628163, 1);
        
      }
    }
  </script>
  
  <main>
    <div class="container mx-auto mb-32 mt-16" id="a">
      <div class="prose prose-invert max-w-none rounded-lg bg-zinc-900 p-4 lg:px-8">
        <h1>Shop</h1>
        <p>Beispiel 1</p>
        <p>Beispiel 2</p>
        {basketId}
        {#if browser && basketPromise}
          {#await basketPromise}
            <p>Creating Basket...</p>
          {:then basket}
          <button on:click={() => addToBasket()}>Demo 1</button>
            <button on:click={() => checkout()}>Checkout</button>
            <pre>{JSON.stringify(basket, null, 2)}</pre>
          {:catch error}
            <p>{error.message}</p>
          {/await}
        {/if}
      </div>
    </div>
  </main>