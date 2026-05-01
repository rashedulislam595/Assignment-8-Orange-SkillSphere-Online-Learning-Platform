import DetailsCard from '@/components/ui/DetailsCard';
import { GetAllCourses } from '@/lib/data';
import React from 'react';

const CourseDetailsPage = async({params}) => {
    const {id} = await params;
    const courses = await GetAllCourses();

    const course = courses.find(item => parseInt(item.id) === parseInt(id));
    // console.log(currentCourse)
    return (
        <div className='w-10/12 mx-auto'>
            
            <div>
            <DetailsCard course={course} />
            </div>
        </div>
    );
};

export default CourseDetailsPage;