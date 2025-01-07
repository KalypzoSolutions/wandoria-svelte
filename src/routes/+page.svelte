<script lang="ts">
	import DiscordWidget from "$lib/DiscordWidget.svelte";

	    // Import images

    import statement from '$lib/images/statement.png';
    import planet from '$lib/images/planet.png';
    import waffenauswahl from '$lib/images/waffenauswahl.png';
    import celina from '$lib/images/celina.png';
    import pilot from '$lib/images/pilot.png';
    import pilot_dialog from '$lib/images/pilot_dialog.png';
    import schuss from '$lib/images/schuss.webp';   
	import Header from "$lib/Header.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Erlebe epische Abenteuer auf Wandoria.net! Unser Minecraft Realms Server startet seine Beta-Testphase am 14.02. Tauche ein in eine einzigartige Welt voller Herausforderungen, Kreativität und Community. Werde Teil des Abenteuers und gestalte Wandoria mit!" />
</svelte:head>


<section>
    <div class="min-h-screen">
        <Header />
        <div class="mb-32 mt-16 container mx-auto gap-8 flex flex-col lg:flex-row">
            <div class="bg-zinc-900 rounded-lg prose dark:prose-invert dark:max-w-none w-full p-4">
                <div class="">
                    <h3 class="">Wichtige Info | Abgrenzung von Feli</h3>
					<img src={statement} alt="feli statement" class="">                
                <div class="max-w-screen-md">
                    <p>Wie alle es gemerkt haben: Durch Unstimmigkeiten zwischen den Inhabern kam es zur Spaltung des Teams und die Entwicklung geriet ins stocken.</p>
                    <p class="">
                        Dieses Projekt ist <b>nicht mehr</b> mit Feli (FeliMC) in jeglicher Hinsicht verbunden.
                        Das Projekt wird von den <b>ehemaligen Hauptentwicklern</b> des Wandoria-Servers fortgeführt. <br/>                    
                        Definitiv ist das keine nette Geste, Feli, der so viel Energie in das Projekt reingesteckt hat, in den Rücken zu fallen, aber wie heißt es so schön, <b>Konkurrenz belebt das Geschäft.</b><br>
                        Fortan wird das Projekt unter dem Namen <b>Wandoria</b> fortgeführt. <br>                    
                    </p>
                    
                    <h4>Wir hoffen auf eure Untersützung!</h4>
                    <div class="py-4">
                        <a href="https://dc.wandoria.net" class="px-4 py-2 bg-emerald-400 text-black font-semibold rounded-lg no-underline">Komm auf unseren Discord</a>
                        <small class="block text-xs py-4">Kein Spam, keine falschen Versprechen, Live Development Updates</small>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-span-1 ">
                <DiscordWidget />
            </div>
        </div>
        <div class="container mx-auto" id="content">
            <div class="text-center py-8">
                <h1 class="font-bold text-zinc-200 text-xl ">Das soll das (NEUE) Wandoria bieten</h1>
            </div>
            <div class="prose prose-invert max-w-none space-y-32 ">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div class="max-w-screen-sm">                    
                        <h4>Freies Bauen ohne Grenzen</h4>
                        <h2>Erschaffe deine eigene Welt und gestalte sie nach Belieben</h2>
                        Unser <span class="text-emerald-300">eigenes Realm-System</span> ermöglicht es dir, deine eigene Welt zu erstellen und zu verwalten. Lade deine Freunde ein und gestalte die Welt nach deinen Vorstellungen.
                        <ul>
                            <li>Wähle verschiedene Template-Welten</li>
                            <li>Erweitere den Baubereich bis in das unendliche!</li>
                            <li>Vertraue deinen Freunden</li>
                            <li>Bereite dich auf <span class="text-emerald-300">Missionen</span> vor</li>
                        </ul>
                    </div>
                    <div class="">
                        <img src={planet} alt="planet" class="rounded-lg aspect-video">
                        <small class="text-zinc-400">Symbolbild für das Realm</small>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div class="grid grid-cols-2 grid-rows-2 gap-2">
                        <img src={waffenauswahl} alt="planet" class="aspect-video rounded-lg pb-0 my-0">
                        <img src={celina} alt="planet" class="aspect-video rounded-lg pb-0 my-0">
                        <img src={pilot} alt="planet" class="aspect-video rounded-lg pb-0 my-0">
                        <img src={pilot_dialog} alt="planet" class="aspect-video rounded-lg pb-0 my-0">                        
                    </div>
                    <div class="max-w-screen-sm">                    
                        <h4>Interaktives Gameplay</h4>
                        <h2>Interagiere mit den NPCs </h2>            
                        <p> Es sind die kleinen Dinge, die das Spielerlebnis besonders machen! <br> NPCs wie <i>Celina</i> helfen dir beim Einstieg, du erhälst deine <span class="text-emerald-300">erste Waffe beim Schmied</span> und gelangst mit dem Piloten zu deinem Realm!</p>
                        <h4>Der Pilot</h4>
                        <p>Der Pilot wird eine besondere Rolle spielen! Diesen kannst du upgraden und dementsprechend weiter entfernte Planeten ansteuern oder gefährlichere Missionen ausüben.</p>

                    </div>
                    
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div class=" max-w-screen-sm">                    
                        <h4>Das macht dir bestimmt Spaß!</h4>
                        <h2>Nimm deine Freunde mit auf eine galaktische Mission </h2>
                        <p>Führe zusammen mit deinen Freunden Missionen aus, um Geld zu verdienen <br> Diese Missionen ergänzen den Bauaspekt unseres Servers.</p>
                        <ul>
                            <li>Besondere Paket-Lieferungen</li>
                            <li>In Planung...</li>
                        </ul>

                    </div>
                    <div class="">
                        <img src={schuss} alt="Minecraft scifi guns inside a realm server" class="aspect-video rounded-lg">
                        <small class="text-zinc-400">Symbolbild für Missionen</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
