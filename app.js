// Function to toggle the visibility of the skills section
var toggleSkills = function () {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    }
};
// Adding an event listener to the "Toggle Skills" button
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
if (toggleSkillsBtn) {
    toggleSkillsBtn.addEventListener('click', toggleSkills);
}
