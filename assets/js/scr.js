let isSnapping = false; // Variable to track if snapping is in progress

document.addEventListener('scroll', () => {
  if (isSnapping) return; // Prevent multiple snaps at once

  const sections = document.querySelectorAll('section');
  let closestSection = null;
  let minDistance = Number.POSITIVE_INFINITY;

  // Find the closest section to the top of the viewport
  sections.forEach((section) => {
    const distance = Math.abs(section.getBoundingClientRect().top);
    if (distance < minDistance) {
      closestSection = section;
      minDistance = distance;
    }
  });

  // Snap to the closest section if the distance is less than 100px
  if (closestSection && minDistance < 50) {
    isSnapping = true; // Set snapping in progress
    window.scrollTo({
      top: closestSection.offsetTop,
      behavior: 'smooth'
    });

    // Allow free scrolling after the smooth scroll completes
    setTimeout(() => {
      isSnapping = false; // Reset snapping flag
    }, 300); // Adjust this timeout to match the duration of the smooth scroll
  }
});
