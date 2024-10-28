# Sea World

Sea World is a React-based web application that lets users create, toggle, and track clusters (or "islands") in a grid-based environment. Users can interact with individual cells in the grid, marking them as "filled" or "empty" to create clusters, with the app automatically counting distinct island formations. This app is designed to be intuitive for first-time users.

## Table of Contents
1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Detailed Components](#detailed-components)
7. [Testing](#testing)
8. [Contributing](#contributing)
9. [License](#license)

---

### Features

- **Dynamic Grid Creation**: Users can specify the grid dimensions (width and height).
- **Cell Interaction**: Clicking a cell toggles its state between "filled" (land) and "empty" (sea).
- **Island Counting**: The app uses an island-counting algorithm to identify and display the number of distinct islands.
- **One-Time Tooltip**: Shows a tooltip on the first hover over a cell, instructing users to "Click to fill." This tooltip only appears once per session.
- **Responsive Layout**: Adapted for various screen sizes.

---

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14+)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adefolajuwon/sea-world.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sea-world
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Usage

1. **Run the application**:
   ```bash
   npm start
   # or
   yarn start
   ```
2. Open the app in your browser:
   ```
   http://localhost:3000
   ```

3. **Interacting with the App**:
   - Adjust the grid dimensions by specifying a width and height.
   - Hover over a cell to see the tooltip. Click a cell to toggle its state.
   - Watch the Cell Count and Island Counter updates as you interact with cells.

---

### Project Structure

```
src
├── app/
│   ├── components/
│   │   ├── CellCount.js        # Displays filled cell count
│   │   ├── Grid.js             # Renders the grid
│   │   ├── ControlCells.js     # Allows width and height modification
│   │   └── IslandCounter.js    # Shows the current island count
│   ├── hooks/
│   │   ├── useGrid.js          # Manages grid, cell toggling, and cell counting
│   │   └── useIslandCounter.js # Counts distinct islands
│   └── tests/                  # Contains test files
├── utils/
│   ├── GridUtils.js            # Utility functions for grid manipulation
│   └── GridUtils.test.js       # Tests for utility functions
└── App.js                      # Main entry point
```

---

### Detailed Components

#### 1. `ControlCells`
- Located in `src/app/components/ControlCells.js`.
- Provides user inputs for adjusting the grid dimensions. Updates the `width` and `height` properties in `useGrid`.

#### 2. `Grid`
- Located in `src/app/components/Grid.js`.
- Renders a 2D grid based on `width` and `height` values. Each cell is clickable, allowing users to toggle between "filled" and "empty" states.
- Shows a tooltip the first time a cell is hovered over, guiding users to click to fill.

#### 3. `IslandCounter`
- Located in `src/app/components/IslandCounter.js`.
- Displays the current number of islands based on `useIslandCounter`. The island counter function runs in the background whenever the grid state changes.

#### 4. `useGrid`
- Located in `src/app/hooks/useGrid.js`.
- Custom hook that initializes and manages grid state. Handles grid resizing, cell toggling, and cell counting.

#### 5. `useIslandCounter`
- Located in `src/app/hooks/useIslandCounter.js`.
- Custom hook implementing an iterative Depth-First Search (DFS) algorithm to identify distinct islands. An island consists of contiguous filled cells.

#### 6. `GridUtils`
- Located in `src/utils/GridUtils.js`.
- Utility functions such as `createGrid` for creating new grids, and `toggleCellUtil` for toggling cell states based on user actions.

---

### Testing

The project uses Jest for unit testing, covering:
1. **Toggle Cell Function** (`toggleCellUtil`): Ensures that cells toggle correctly between states.
2. **Grid Creation** (`createGrid`): Verifies that grids initialize correctly with specified dimensions.

#### Running Tests
To run tests, use:
```bash
npm test
# or
yarn test
```

Example of `createGrid` test in `GridUtils.test.js`:
```javascript
import { createGrid } from "../../../utils/GridUtils";

describe('createGrid', () => {
  it('creates a grid with the specified dimensions', () => {
    const width = 5;
    const height = 4;
    const grid = createGrid(width, height);
    expect(grid.length).toBe(height);
    expect(grid[0].length).toBe(width);
    grid.flat().forEach(cell => expect(cell).toBe(false));
  });
});
```

---

### Contributing

1. **Fork the Repository**
2. **Create a Feature Branch**: `git checkout -b feature-name`
3. **Commit Changes**: Use clear and concise commit messages.
4. **Push to Branch**: `git push origin feature-name`
5. **Create a Pull Request**

### Additional Notes

- **UI/UX Notes**: The one-time hover tooltip is intended to aid new users in understanding interaction mechanics.
- **Future Enhancements**: Consider adding mobile responsiveness, multi-user support, or grid persistence for a richer user experience.