export class ControlElement {
    $control = null;

    constructor(className, content, action) {
        this.$control = document.createElement('div');

        this.$control.className = className;
        this.$control.style.position = 'absolute';
        this.$control.innerText = content;
        this.$control.addEventListener('pointerdown', e => e.preventDefault());
        this.$control.addEventListener('pointerup', () => {
            action();
            document.dispatchEvent(new CustomEvent('controlPressed'));
        });
        document.body.append(this.$control);
    }

    hide() {
        this.$control.hidden = true;
    }

    show() {
        this.$control.hidden = false;
    }

    setPosition(pageX, pageY) {
        this.$control.style.top = `${pageY}px`;
        this.$control.style.left = `${pageX}px`;
    }

    calcDimensions() {
        return Math.max(this.$control.offsetWidth, this.$control.offsetHeight);
    }
}