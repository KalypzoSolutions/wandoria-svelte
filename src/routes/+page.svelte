<script lang="ts">	   
    import planet from '$lib/images/planet.avif';
    import waffenauswahl from '$lib/images/waffenauswahl.avif';
    import celina from '$lib/images/celina.avif';
    import pilot from '$lib/images/pilot.avif';
    import pilot_dialog from '$lib/images/pilot_dialog.avif';
    import schuss from '$lib/images/schuss.avif';   
	import Header from "$lib/Header.svelte";
	import News from "./News.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Erlebe epische Abenteuer auf Wandoria.net! Unser Minecraft Realms Server startet seine Beta-Testphase am 14.02. Tauche ein in eine einzigartige Welt voller Herausforderungen, Kreativität und Community. Werde Teil des Abenteuers und gestalte Wandoria mit!" />
</svelte:head>


<section>
    <div class="min-h-screen">
        <Header />
        <News />
        
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
