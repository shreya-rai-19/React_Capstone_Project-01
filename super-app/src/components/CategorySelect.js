
// import React, { useState } from 'react';

// const categories = [
//   { id: 1, name: 'Action', selected: false },
//   { id: 2, name: 'Adventure', selected: false },
//   { id: 3, name: 'Comedy', selected: false },
//   { id: 4, name: 'Drama', selected: false },
//   { id: 5, name: 'Fantasy', selected: false },
//   { id: 6, name: 'Horror', selected: false },
//   { id: 7, name: 'Romance', selected: false },
//   { id: 8, name: 'Sci-Fi', selected: false },
//   { id: 9, name: 'Thriller', selected: false },
// ];

// function CategorySelect() {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [error, setError] = useState('');

//   const handleCategoryClick = (category) => {
//     const isSelected = selectedCategories.includes(category);

//     if (isSelected) {
//       // Deselect category
//       setSelectedCategories(selectedCategories.filter((c) => c !== category));
//     } else if (selectedCategories.length < 9) {
//       // Select category if less than 9 categories are selected
//       setSelectedCategories([...selectedCategories, category]);
//     } else {
//       setError('You can select a maximum of 9 categories.');
//     }
//   };

//   const handleContinueClick = () => {
//     if (selectedCategories.length >= 3) {
//       // Store selected categories in local storage
//       localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));

//       // Navigate to the next page (you can implement this as needed)
//       // For example, you can use React Router to navigate to the next page.
//     } else {
//       setError('Please select at least 3 categories.');
//     }

//   };

//   return (
//     <div>
//       <h2>Select Categories</h2>
//       {categories.map((category) => (
//         <div
//           key={category.id}
//           className={`category-card ${selectedCategories.includes(category) ? 'selected' : ''}`}
//           onClick={() => handleCategoryClick(category)}
//         >
//           {category.name}
//         </div>
//       ))}
//       {error && <div className="error">{error}</div>}
//       <button onClick={handleContinueClick}>Continue</button>
//     </div>
//   );
// }

// export default CategorySelect;
