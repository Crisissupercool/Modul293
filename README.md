### Schritt-für-Schritt-Anleitung zur Einrichtung des Projekts

#### 1. Projekt entpacken
- Lade die Zip-Datei des Projekts herunter und entpacke sie in einem gewünschten Verzeichnis.

#### 2. Node.js und npm installieren
- Stelle sicher, dass Node.js und npm (Node Package Manager) auf deinem Computer installiert sind.
- Besuche die [offizielle Node.js-Website](https://nodejs.org/) und lade die neueste LTS-Version herunter.
- Installiere Node.js, was automatisch auch npm installiert.

#### 3. Terminal öffnen
- Öffne ein Terminal (Befehlskonsole) auf deinem Computer.
- Navigiere in das Verzeichnis, in dem du das Projekt entpackt hast:

  ```sh
  cd pfad/zum/projektverzeichnis
  ```

#### 4. Abhängigkeiten installieren
- Installiere die Projektabhängigkeiten:

  ```sh
  npm install
  ```

- Installiere `react-slick` und `slick-carousel` für das Karussell:

  ```sh
  npm install react-slick slick-carousel
  ```

- Installiere `json-server` für das Backend:

  ```sh
  npm install -g json-server
  ```

#### 5. JSON-Server starten
- Starte den JSON-Server, um das Backend bereitzustellen:

  ```sh
  json-server --watch db.json --port 3001
  ```

#### 6. Projekt starten
- Starte das React-Projekt:

  ```sh
  npm start
  ```

### Zusammenfassung der Befehle

```sh
# Navigiere in das Projektverzeichnis
cd pfad/zum/projektverzeichnis

# Installiere die Abhängigkeiten
npm install

# Installiere react-slick und slick-carousel
npm install react-slick slick-carousel

# Installiere json-server
npm install -g json-server

# Starte den JSON-Server
json-server --watch db.json --port 3001

# Starte das Projekt
npm start
```