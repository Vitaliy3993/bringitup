import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(page, btns) {
        super(page, btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.blockHanson.style.display = 'none';
            if (n == 3) {
                setTimeout(() => {
                    this.blockHanson.style.display = 'block';
                    this.blockHanson.classList.add('animated', 'slideInUp');
                }, 3000);
            } else {
                this.blockHanson.classList.remove('slideInUp');
            }
        } catch(error){}
        

        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('fadeIn');
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.slides[this.slideIndex - 1].classList.add('animated', 'fadeIn');
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        try {
            this.blockHanson = document.querySelector('.hanson');
        } catch(error) {}

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}