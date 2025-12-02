"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourse = exports.listCourses = void 0;
const courseModel_1 = __importDefault(require("../models/courseModel"));
const listCourses = async (req, res) => {
    const { category } = req.query;
    try {
        const courses = category && category === "all"
            ? await courseModel_1.default.scan("category").eq(category).exec()
            : await courseModel_1.default.scan().exec();
        res.json({ message: "Courses retrieved successfully", data: courses });
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving courses", error });
    }
    ;
};
exports.listCourses = listCourses;
const getCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
        const course = await courseModel_1.default.get(courseId);
        if (!course) {
            res.status(404).json({ message: "Course not found" });
            return;
        }
        res.json({ message: "Course retrieved successfully", data: course });
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving course", error });
    }
    ;
};
exports.getCourse = getCourse;
//# sourceMappingURL=courseControllers.js.map