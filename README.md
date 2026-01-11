Ez egy nap tervező alkalmazás. AngularJS 1.x-et és TypeScriptet használtam hozzá, a kinézetet pedig Bootstrappel csináltam + CSS.

funkciók:
- Lehet új feladatot felvenni névvel és időponttal
- Ki lehet törölni, ami nem kell
- Ki lehet pipálni, ha kész vagy (ilyenkor áthúzza)
- Számolja alul, hogy hány feladat van még hátra
- Van benne kereső is.
- Menti a dolgokat a böngészőben (LocalStorage), szóval frissítésnél nem tűnik el minden
+
- Csináltam hozzá egy saját logót gyorsan

Fájlok:
- src -> app.ts: ebben van a lényeg, a logika meg a Controller.
- dist -> app.js: ide kerül a lefordított kód
- index.html: ez maga a weboldal
- tsconfig.json: ez mondja meg a gépnek, hogy hogyan fordítsa a TS-t.
- logo: itt van a logó

Indítása:
Ha van fent Node.js, akkor a mappában nyitni kell egy terminált:

1. Először telepíteni kell a typescriptet:
   npm install typescript paranccsal

2. Aztán le kell fordítani a kódot:
   npx tsc

3. Utána csak meg kell nyitni az index.html fájlt a böngészőben.



https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js
https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css
https://bootstrap21.org/hu/docs/5.0/customize/options/
https://www.devwares.com/docs/contrast/javascript/sections/timepicker/