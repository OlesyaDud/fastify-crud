const Course = require('../models/Course');

exports.getCourse = async(req, reply) => {
    try {
        const courses = await Course.find();
        return courses;
    } catch (error) {
       throw error; 
    }
};

exports.getSingleCourse = async(req, reply) => {
    try {
        // take course id from params
        const courseId = req.params.id;
        const course = await Course.findById(courseId);
        return course;
    } catch (error) {
       throw error; 
    }
};

exports.addCourse = async(req, reply) => {
    try {
        const course = new Course(req.body);
        return course.save();
    } catch (error) {
       throw error; 
    }
};

exports.updateCourse = async(req, reply) => {
    try {
    //    get an id
    const courseId = req.params.id;
    // get info  of the course
    const course = req.body;
    // update it, will take updatedCourse from course
    const {...updatedCourse} = course;
    // find by id and update course
    // pass a flag- new: true to overide info
    const update = await Course.findByIdAndUpdate(courseId, updatedCourse, {new: true});

    return update;

    } catch (error) {
       throw error; 
    }
};

exports.deleteCourse = async(req, reply) => {
    try {
      const courseId = req.params.id;
      const course = Course.findByIdAndDelete(courseId);
      return course;
    } catch (error) {
       throw error; 
    }
};