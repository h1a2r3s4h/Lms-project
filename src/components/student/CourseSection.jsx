import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext'; // Adjust the path as needed
import CourseCard from './CourseCard'; // Assuming you're using a CourseCard component

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>
        Discover our top-rated courses across various categories. From coding & design to <br/> business & wellness, our courses are created to deliver results.
      </p>
      <div className='grid grid-cols-auto px-4 md:px-0 md:py-16 my-10 gap-4'>
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <Link
        to='/courses-list'
        onClick={() => scrollTo(0, 0)}
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded block mt-4'
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CourseSection;
