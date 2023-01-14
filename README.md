Temat zadania: Symulowanie kolejki petentów w urzędzie

Treść zadania:
Jako rozwiązanie należy zaimplementować symulację wraz z jej konfiguracją.
Konfiguracja powinna umożliwiać zmianę podstawowych informacji, tj. ilość
dostępnych stanowisk (a więc ilość kolejek, na które rozłoży się cały ruch), minimalny
czas, który petent potrzebuje, aby załatwić swoją sprawę w urzędzie, a także maksymalny
czas, który na tą akcję potrzebuję. Czas potrzebny na załatwienie sprawy podawany jest
jako wartość całkowita większa od 0.

Druga część aplikacji odpowiada za samą symulację. Użytkownik, który korzysta z
aplikacji, powinien mieć dostęp do 2 przycisków.

1. przycisk - dodanie nowej osoby do kolejki. Po kliknięciu nowa osoba zostaje
   utworzona. Losowo generowany jest czas, który dana osoba potrzebuje do załatwienia
   swojej sprawy. Wartość minimalna i maksymalna odczytywana jest z ekranu konfiguracji.
   Da przykładu, jeśli wprowadzono wartość minimalną 5 a maksymalną 8, to losowy czas
   może być z przedziału [5,8]. Po odpowiednim wygenerowaniu petenta, trafia on do
   kolejki, w której najszybciej zostanie on przyjęty przy okienku w urzędzie.

Przykład:
Kolejka 1: 2, 4, 6
Kolejka 2: 10
Kolejka 3: 1, 3

Nowa osoba zostanie dodana do kolejki 3.

2. przycisk - równoległa redukcja czasów potrzebych do załatwienia swojej sprawy. Po
   naciśnięciu tego przycisku u wszystkich osób, które obecnie są przy okienku nastąpi
   redukcja potrzebnego czasu o 1. W przypadku, gdy wartość spadnie do 0, to dany petent
   jest usuwany z kolejki i następna osoba zostaje obsługiwana.

Przykład:
Kolejka 1: 2, 4, 6
Kolejka 2: 10
Kolejka 3: 1, 3

Po naciśnięciu przycisku:
Kolejka 1: 1, 4, 6
Kolejka 2: 9
Kolejka 3: 3

Wszystkie eventy (dodwanie nowej osoby do kolejki, aktualizacja czasów) w celu
uproszczenia zadania powinny być obsługiwane poprzez naciśnięcie przycisku. Nie ma
potrzeby, aby przygotować obsługę eventów przy wykorzystaniu setInterval albo
setTimeout.

Stack technologiczny:
- React
- Testing Library
- React Router DOM

Uruchomienie wstępnej aplikacji:
- Po skopiowaniu i wypakowaniu plików startowych należy zainstalować
  niezbędne zależności poleceniem yarn install albo npm install
- Następnie należy wpisać polecenie yarn dev lub npm run dev
- Wstępne aplikacja będzie dostępna pod adresem http://localhost:5173/

Wymagania funkcjonalne:
- Symulowanie rozłożenia kolejki na kilka stanowisk
- Kalkulacja potrzebnego czasu na obsłużenie całej kolejki
- Dodawanie nowych osób do kolejki
- Równoległa redukcja czasu potrzebnego do załatwienia danej sprawy przez
  wszystkich petentów, którzy obecnie są przy stanowisku
- Wstępna konfiguracja symulacji
- Wyświetlanie wszystkich kolejek

Przykładowa aplikacja:
Ekran konfiguracji symulacji

Ekran symulacji

Dodatkowe informacje:
W katalogu /src/assets/images dostępne są grafiki, które można wykorzystać w aplikacji.
Ich użycie jest obligatoryjne, nie ma narzuconego wymagania jak powinna wyglądać
aplikacji. Aplikacja powinna być jak najprostsza, jednak musi spełniać wszystkie
wymagania funkcjonalne.

Testy:
W projekcie skonfigurowana została biblioteka React Testing Library. Jeśli czujesz się na
siłach, aby przygotować proste testy jednostkowe, masz możliwość ich dodania. Testy w
projekcie uruchamia się poleceniem yarn test albo npm run test.