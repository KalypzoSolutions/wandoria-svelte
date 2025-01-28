<script lang="ts">
    import server_architektur from '$lib/images/blog/node.avif';
</script>
<small>
    1 Minute | Veröffentlicht am 28.01.2025
</small>
<h1>Server Architektur</h1>
<p>Wir teilen unsere Server Architektur, in der Hoffnung, dass es jemand besser weiß und uns hilft die Kosten niedrig zu halten!</p>
<p> Unsere Serverarchitektur sieht mehrere Hetzer Cloud Server vor, die on-demand skaliert werden sollen. Jedenfalls während der Beta.</p>
<div class="">
    <img src={server_architektur} class="border border-zinc-800 mb-2" alt="" />
<small>Das Bild enthält 3 Nodes, wovon eine Node (ext-mchost-1) für andere Projekte reserviert ist.</small>
</div>
<p>Das Wandoria Netzwerk besteht aus 2 Nodes.</p>
<ul>
    <li>1. Hetzner Cloud Ampere 4 Threads 8GB (Proxy & Database) 7€</li>
    <li>2. Hetzner Cloud Ampere 8 Threads 16GB (Game Server) 14€</li>
</ul>
<p>
    Für die Entwicklung ist dieses Konstrukt ausreichend.    
    Mit den Servern <i>lobby, realms, farmwelt</i> sollte es möglich sein, die Beta zu starten.
    Weil wir hoffen, dass nur wenige Spieler es schaffen alle Upgrades beim Raumschiff zu erreichen, werden sie in 
</p>
<p>
    Sollten weitere Fragen zur Architektur bestehen, so können diese gerne im Discord gestellt werden. Zeitlich lohnt es sich aktuell so kurz vor der Beta nicht einen Roman hier zu veröffentlichen, denn es gibt noch andere Baustellen.
</p>
<hr />
<small>Johannes | EinJOJO</small>


