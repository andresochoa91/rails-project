course = Course.create(title: "Hello World", description: "Create react app with RoR")

section = Section.create(title: "Chapter 1", course: course)

episodes = Episode.create([
  { title: "First", description: "lorem1", url: "https://www.youtube.com/watch?v=B0SxxHAImhc", section: section },
  { title: "Second", description: "lorem2", url: "https://www.youtube.com/watch?v=B0SxxHAImhc", section: section },
  { title: "Third", description: "lorem3", url: "https://www.youtube.com/watch?v=B0SxxHAImhc", section: section },
  { title: "Forth", description: "lorem4", url: "https://www.youtube.com/watch?v=B0SxxHAImhc", section: section }
])