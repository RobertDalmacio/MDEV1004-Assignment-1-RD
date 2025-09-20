# Pokémon Database

This is a simple web application that fetches and displays Pokémon data from the [PokéAPI](https://pokeapi.co/). Users can view a list of Pokémon, click on a Pokémon to see its specs, and explore its abilities.

---

## Features

- **Carousel Pokémon List**: Displays Pokémon in a horizontally scrollable list with images and names.
- **Specs Section**: Shows detailed information about the selected Pokémon, including name, height, base experience, and abilities.
- **Abilities Section**: Provides detailed information about the abilities of the selected Pokémon.
- **Interactive Design**: Hover effects and clickable elements for better user experience.

---

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling for the layout and hover effects.
- **JavaScript**: Fetching data from the API and dynamically rendering content.
- **PokéAPI**: Source of Pokémon data.

---

## Usage

1. Open the app in your browser.
2. Scroll through the Pokémon list in the carousel.
3. Click on a Pokémon to view its specs and abilities.
4. Hover over abilities to see interactive effects.

---

## File Structure

- **`index.html`**: Main HTML file for the app.
- **`style.css`**: Contains all the styling for the app.
- **`app.js`**: Handles API calls and dynamic rendering of content.

---

## API Reference

This app uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data. Key endpoints used:
- **Pokémon List**: `https://pokeapi.co/api/v2/pokemon?limit=10`
- **Pokémon Details**: `https://pokeapi.co/api/v2/pokemon/{id}`
- **Ability Details**: `https://pokeapi.co/api/v2/ability/{id}`