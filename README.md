# Zadanie rekrutacyjne GravityGlobal na frontend developera

## Informacje wstępne
Zadanie jest przeznaczone na każdy poziom umiejętności developera, dzieli się na poszczególne zadania,
które są stopniowo coraz trudniejsze. Każdy powinien zrobić test na tyle ile aktualnie potrafi, gdyż
poszukujemy bardzo często osób z różnym poziomem wiedzy.

Daj z siebie wszystko i zrób jak najwięcej potrafisz, lecz pamiętaj głównie liczy się jakość nie ilość, tak że prosimy
o niespieszenie się z zadaniem, bo przede wszystkim zależy nam na jakości wykonanych zadań
i kodu.

**Paczka projektu jest prawie pusta, dlatego wszystko zależy od Ciebie,
w jakiej formie to trafi do nas**

### Jak zacząć pracę
Aktualny projekt gita należy **sforkować** do swojego prywatnego gita jako nowe repozytorium,
które będzie dostępne publicznie. Na plus będzie wysyłanie konkretnych commitów,
a nie wszystko w jednym commicie o nazwie np. 'all changes'.

Dopuszczalne jest wysłanie rozwiązania w spakowanym archiwum, jednak robienie wszystkiego
na gitcie jest rozwiązaniem milej widzianym.

**Funkcjonalność powinny być pisane w czystym JSie (tzw. Vanilla JS), najlepiej ze standardami ES6**

#### Dla osób które chcą pisać w SCSS
1. Zainstaluj wszystkie zależności potrzebne do rekompilowania styli gulpem -
polecenie: 'npm install'
2. Wystartuj główne zadanie gulpa polecenie: 'gulp' - będzie automatycznie kompilowało
kod scss na css po każdej zmianie

#### Dla osób które chca pisać w czystym CSS

Jeżeli ktoś nie potrafi pisać w SCSS bądź nie korzystał z tego wcześniej, to w folderze scr został przygotowany
plik o rozszerzeniu css. **Tutaj warto dodać, że milej widziane są style pisane w SCSS**

### Zadania
1. Zmienić tytuł strony
2. Stworzyć moduł/sekcję strony z podanego:
    - moduł powinien być wedle designu [design](https://www.figma.com/file/dqY9uYrUYPyr5yjeECoy6X/Recruitment-Task). Aby móc czytać własności elementów, należy stworzyć sobie konto na figmie
    - wymagane zdjęcia został już wyeksportowane, przeskalowane do kilku rozmiarów i znajdują się w folderze images
    - moduł powinien spełniać wszelkie możliwe aspekty WCAG
    - moduł powinien być responsywny, tutaj zostawiamy inwencję twórczą, robimy bez designu
    - moduł powinien być w kontenerze o szerokości 1440px
    - moduł powinien być dostosowany do wielokrotnego użycia go na stronie,
    wszystkie funkcjonalności powinny być pisane per moduł, **to dotyczy też zadań poniżej**
3. Dodać funkcjonalność po kliknięciu buttona
    - po kliknięciu ma się otwierać popup
    - kliknięcie poza popupa, automatycznie go zamyka
    - każde kliknięcie przycisku musi być zliczane
    - w popupie wyświetlamy ile razy użytkownik klikną w buttona
    - ilość kliknięć w button ma być stale zapisana pod użytkownika,
    tak aby po odświeżeniu strony wartość nie powinna być zerowana
    - jeżeli ilość kliknięć przekroczy 5, w popupie powinien pokazać się przycisk do zresetowania licznika (inwencja twórcza)

### Co będziemy sprawdzać
- Czy punkty w konkretnym zadaniu zostały spełnione
- Responsywność
- Inwencja twórcza
- Jakość kodu
- Poprawność semantyczna HTML
- WCAG
- Logikę rozwiązań funkcjonalnych
