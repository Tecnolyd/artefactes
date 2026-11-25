# Artefactes de «Tecnologia interactiva»

Guia per continuar fent artefactes en una conversa nova. Llegeix-la sencera abans de començar.

## Qui i per a què
- Professora de Tecnologia i Enginyeria (Batxillerat, Catalunya). Tot en **català**.
- Els artefactes són pàgines HTML interactives per a l'alumnat, incrustades al Google Sites
  «Tecnologia interactiva» (sites.google.com/xtec.cat/tecnologiainteractiva).
- Prefereix explicacions **curtes i esquemàtiques**, amb una «frase per a l'alumnat» quan escau.
- Abans de construir, acordar què farà l'artefacte («No facis res encara. Definim com ho farem primer.»).
- Ser rigorós amb el llibre de text: no contradir-lo; si hi ha dubte, preguntar.

## Com es publica (GitHub Pages)
- Repositori: **Tecnolyd/artefactes** (branca `main`, Pages des de l'arrel).
- Adreça pública: `https://tecnolyd.github.io/artefactes/<fitxer>.html`
- Al Sites s'incrusta amb **Insereix → Incrusta → Per URL** (no codi enganxat).
- Per actualitzar: substituir el fitxer i fer push. El Sites s'actualitza sol (memòria cau fins a 10 min).
- Commits com a `Claude <noreply@anthropic.com>`.

| Fitxer | Artefacte | Pàgina del Sites |
|---|---|---|
| fonaments-termodinamica.html | Fonaments de termodinàmica (v6) | 2n BAT → Termodinàmica |
| maquines-termiques.html | Màquines de combustió interna (v8) | 2n BAT → Termodinàmica |
| forces-moments.html | Forces i moments | 1r BAT i 2n BAT → Estàtica (mateix fitxer) |
| circumferencia-unitat.html | Raons trigonomètriques | Eines matemàtiques |
| generador-dinamo.html | Generadors i dinamo (v9, autoavaluació a Google Forms: autoavaluacio-generador-dinamo.gs) | 1r BAT → Màquines elèctriques |
| regles-ma.html | Regles de la mà esquerra i dreta (v6, pendent foto de la mà) | 1r BAT → Màquines elèctriques |
| pneumatica-components.html | Components pneumàtics (v6): cilindres, distribuïdores, comandaments i vàlvules de control | 2n BAT → Pneumàtica |
| pneumatica-circuits.html | Circuits pneumàtics (v5): indirecte, velocitat, simultani, posició, temporitzat, oscil·lador | 2n BAT → Pneumàtica |
| pneumatica-dos-cilindres.html | Circuits amb dos cilindres (v4): Exemples 3, 4 i 5 del llibre (estampació, transport, mecanització amb memòria 0.3), plànol de situació com al llibre (Figs. 3.73, 3.75, 3.77) al costat de l'esquema, quadre de seqüència amb senyals, continu / pas a pas (una etapa i s'atura) | 2n BAT → Pneumàtica |

Pendent: **Lleis de Kirchhoff** (1r BAT → Electricitat).

Pneumàtica: colors del llibre (aire a pressió en blau `--air`, cos de vàlvula beix), connexions P/A/B/R, numeració 1.0/1.1/1.2/0.1/1.02, l'únic càlcul de la unitat és W = p · A · l · η. El llibre té intercanviats els peus de les Figs. 3.46 i 3.47 (la professora ja ho sap).

## Estructura del Sites
Inici · 1r BAT (Electricitat, Estàtica, Màquines elèctriques) · 2n BAT (Estàtica, Termodinàmica) · Eines matemàtiques.
Les pàgines pare són índexs amb botons. Les imatges de portada fan servir aquesta mateixa estètica.

## Estètica (plantilla de referència: `maquines-termiques.html`)
Partir sempre del codi de `maquines-termiques.html` o de `_estil/base.css` (fonts, colors i components).

- **Fonts** (Google Fonts): Barlow Condensed 500/600/700 (títols, menús, botons),
  Source Serif 4 (text), IBM Plex Mono (números i fórmules).
- **Colors** (`:root`, amb versió fosca):
  fons `#f3f5f8`, superfície `#fff`, text `#18202b`, secundari `#566273`, línies `#d6dce4`,
  accent `#23395d` (suau `#e3e9f3`), calent/Th `#bf4329`, fred/Tc `#2a66a8`,
  treball `#a46f12`, correcte `#2c7a4b`, error `#b0291c`. El color té significat i és coherent a tot arreu.
- **Disseny** «quadern d'enginyeria»:
  - barra superior `.top` amb el títol `.brand` (la segona paraula en color calent, p. ex. «Màquines <span>tèrmiques</span>»), l'etiqueta de versió i el selector **Mode estudi / Mode classe**;
  - menú lateral `.side` de mòduls numerats; cada mòdul és una `section.mod` amb `.eyebrow` («MÒDUL 1 · …»), `h2` i `.lead`;
  - `.est` = text que només surt en mode estudi;
  - **mode classe** (per projectar): només es veu l'eyebrow, el `h2`, la `.lead` (1–2 frases sobre què simulem) i els simuladors/diagrames, més grans (svg fins a 68vh, amplada completa). S'amaguen h3, paràgrafs, llistes, `.cards`, `.note`, `.key`, `.est`, `.eq` i les taules estàtiques (bloc CSS «Mode classe: només…», igual a tots els artefactes). La `.lead` ha de ser curta. Els mòduls de teoria sense simulador (sense svg/canvas/quiz) es veuen igual en tots dos modes (`.mod:has(svg,canvas,.quiz)`);
  - components: `.card`, `.tbl`, `.btn` / `.btn.primary`, `.pill`, `.pager` (anterior/següent), diagrames SVG propis, calculadores i un **quiz d'autoavaluació** al final.
- **Comportament incrustat** (script al final de la plantilla):
  - si la pàgina és dins d'un iframe → `body.embed`, el menú passa **a dalt** (horitzontal) i s'aprofita tota l'amplada;
  - botó «⛶ Pantalla completa» si el navegador ho permet; si no, l'enllaç «⛶ Obre a pantalla completa» a la pròpia adreça de GitHub;
  - **etiqueta de versió** (v1, v2…) al títol, per comprovar que el Sites mostra l'última.
- Tot en un sol fitxer HTML autònom (CSS i JS dins), sense dependències externes llevat de les fonts.
- Res de localStorage per a dades importants.

## Fitxes imprimibles
Les fitxes A4 (Otto, 2T, Dièsel) es van fer amb aquesta mateixa estètica, en horitzontal, i es van exportar a PDF.
