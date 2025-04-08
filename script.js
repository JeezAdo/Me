document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');  // Create overlay element
    document.body.appendChild(overlay);  // Append it to the body
  
    // Toggle the project expansion and dimming of the background
    projects.forEach(project => {
      project.addEventListener('click', function () {
        // Toggle the "active" class on the clicked project
        project.classList.toggle('active');
        
        // Show or hide the overlay based on the active state
        if (project.classList.contains('active')) {
          overlay.classList.add('show');
        } else {
          overlay.classList.remove('show');
        }
      });
    });
  
    // Close the active project if the overlay is clicked
    overlay.addEventListener('click', function () {
      projects.forEach(project => project.classList.remove('active'));
      overlay.classList.remove('show');
    });
  });