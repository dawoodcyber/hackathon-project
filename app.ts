document.getElementById('toggle-skills')?.addEventListener('click', () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const sectionContent = skillsSection.querySelector('.section-content');
        if (sectionContent) {
            if (sectionContent.style.display === 'none') {
                sectionContent.style.display = 'block';
            } else {
                sectionContent.style.display = 'none';
            }
        }
    }
});
