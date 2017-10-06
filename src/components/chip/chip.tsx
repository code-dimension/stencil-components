import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'stc-chip',
    styleUrl: 'chip.scss'
})
export class StcChip {

    @Prop()
    image: string;

    @Prop()
    text: string;

    @Prop()
    closeable: boolean = false;

    @Event({ eventName: 'stc-chip-close'})
    close: EventEmitter;

    onClose() {
        this.close.emit();
    }

    render() {

        const image = (() => {
            if (this.image) {
                return (
                    <div class="stc-chip-image">
                        <img src={this.image} />
                    </div>
                );
            }
        })();

        const close = (() => {
            if (this.closeable) {
                return <span class="stc-chip-close" onClick={this.onClose.bind(this)}>X</span>;
            }
        })();

        const chipClasses = {
            'stc-chip': true,
            'stc-chip-extra-pd-lt': !!this.image
        };

        return (
            <div class={chipClasses}>
                {image}
                <span class="stc-chip-text">{this.text}</span>
                {close}
            </div>
        );
    }
}
