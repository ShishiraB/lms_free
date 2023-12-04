export const isTeacher = (userId?: string | null) => {
  const teacherIdsString = process.env.NEXT_PUBLIC_TEACHER_IDS;
  
  if (!teacherIdsString) {
    // console.error("Teacher IDs are not defined in the environment variables.");
    return false;
  }

  const teacherIds = teacherIdsString.split(',');
  // console.log("Teacher IDs:", teacherIds);

  if (!userId) {
    // console.error("User ID is not provided.");
    return false;
  }

  if (teacherIds.includes(userId)) {
    // console.log(`User ${userId} is a teacher.`);
    return true;
  } else {
    // console.log(`User ${userId} is not a teacher.`);
    return false;
  }
}