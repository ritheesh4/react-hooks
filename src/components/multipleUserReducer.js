// import React, {useState, useEffect, useReducer} from 'react';
// // import CoursesList from './CoursesList';
// // import Search from './Search';

// const courses_data = [
// ];

// const coursesReducer = (state, action) => {
//   switch(action.type) {
//     case 'SET_COURSES':
//       return action.payload;
//     default:
//       throw new Error();
//   }
// };

// const App = () => {
//   const [courses, dispatchCourses] = useReducer(
//     coursesReducer,
//     []
//   );

//   const [isLoading, setIsLoading] = useState(false);

//   const [searchText, setSearchText] = useState(
//     localStorage.getItem('searchText') || ''
//   );

//   const handleSearch = event => {
//     setSearchText(event.target.value);
//   }

//   const getCoursesAsync = () => 
//     new Promise(resolve => 
//         setTimeout(
//           () => resolve({courses: courses_data}),
//           2000
//         )
//       );
  
//   useEffect(() => {
//     setIsLoading(true);
//     getCoursesAsync().then(result => {
//       dispatchCourses({
//         type: 'SET_COURSES', 
//         payload: result.courses
//       });
//       setIsLoading(false);
//     })
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('searchText', searchText)
//   }, [searchText]);

//   const filteredCourses = courses.filter(course => {
//     return course.title.includes(searchText) || course.author.includes(searchText);
//   });

//   return (
//     <div>
//       <h1>List of Courses</h1>
//       <hr />

//       {/* <Search value={searchText} onSearch={handleSearch} /> */}
      
//       {/* {isLoading ? (
//         <p>Loading Courses ...</p>
//       ) : (
//         <CoursesList courses={filteredCourses} />
//       )} */}
      
//     </div>
//   );
// }

// export default App;