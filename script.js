// Get all the project divs
const projects = document.querySelectorAll('.project');

// Add event listeners for mouseenter and mouseleave
projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        if (window.innerWidth > 600) { 
            project.style.transform = 'scale(1.1)';
            project.style.transition = 'transform 0.3s ease';
        }
    });

    project.addEventListener('mouseleave', () => {
        if (window.innerWidth > 600) { 
            project.style.transform = 'scale(1)';
            project.style.transition = 'transform 0.3s ease';
        }
    });
});
function toggleText(btn) {
    const moreText = btn.previousElementSibling;
    
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.innerHTML = " read less";
    } else {
        moreText.style.display = "none";
        btn.innerHTML = "...more";
    }
}
