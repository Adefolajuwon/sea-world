### Style Guide for Sea World

#### Basic Rules

1. **One Component per File**  
   Each file should contain only one React component to maintain readability and modularity.

2. **JSX Syntax**  
   Always use JSX syntax in files that contain React components.

---

#### Naming Conventions

1. **File Naming**  
   - **Extensions**: Use the `.jsx` extension for React component files.  
   - **Filenames**: Use **PascalCase** for all component filenames.
     - **Example**: `MyComponent.jsx`

2. **Reference Naming**  
   - **React Components**: Use **PascalCase** for component names when importing or defining them.
   - **Instances**: Use **camelCase** for instances of components.
   
   ```jsx
   // Incorrect
   import myComponent from './MyComponent';
   const MyComponentInstance = <MyComponent />;

   // Correct
   import MyComponent from './MyComponent';
   const myComponentInstance = <MyComponent />;
   ```

3. **Component Naming**  
   - The component's name should match the filename.
     - **Example**: `MyComponent.jsx` should export `MyComponent`.
   - For root components of a directory, use `index.jsx` as the filename, and use the directory name as the component name.
     - **Example**: In a directory named `UserProfile`, the main file should be `UserProfile/index.jsx` and export a component named `UserProfile`.

---

#### Additional Rules

1. **State and Props**  
   - Use **camelCase** for prop and state names.
   - Only pass necessary props to child components to keep components clean and reduce unnecessary re-renders.

2. **Function and Variable Naming**  
   - Use **camelCase** for naming functions, variables, and constants within components.
   - Use **PascalCase** for custom hooks (e.g., `useCustomHook`) and avoid generic names like `doSomething`.

3. **CSS Classes**  
   - Use **kebab-case** for CSS classes, e.g., `.container-wrapper`.

---

#### Example Structure

```jsx
// File: UserProfile/UserProfile.jsx
import React from 'react';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h1>User Profile</h1>
    </div>
  );
};

export default UserProfile;
```

```jsx
// Import Usage
import UserProfile from './UserProfile';

const App = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};
```

