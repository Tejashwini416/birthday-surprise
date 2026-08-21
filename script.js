function goToSlide(n) {

    // Hide all slides
    document.querySelectorAll('.slide').forEach(function(slide) {
        slide.classList.remove('active');
    });

    // Show selected slide
    document.getElementById('slide' + n).classList.add('active');

    /*
     * Slides 1, 2 and 3:
     * No automatic timer.
     */

    /*
     * Slides 4, 5, 6 and 7:
     * Automatically move forward after 5 seconds.
     */

    if (n >= 4 && n < 8) {

        setTimeout(function() {
            goToSlide(n + 1);
        }, 5000);

    }

    /*
     * Slide 8:
     * Final slide.
     * Replay button takes her back to Slide 1.
     */
}
