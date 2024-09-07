// Function to toggle the visibility of the skills section
const toggleSkills = (): void => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    }
};

// Adding an event listener to the "Toggle Skills" button
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
if (toggleSkillsBtn) {
    toggleSkillsBtn.addEventListener('click', toggleSkills);
}
