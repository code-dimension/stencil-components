import {
    Component, Prop, Method,
    Element, Event, EventEmitter,
    State
} from '@stencil/core';

export class SelectedTabEvent {
    constructor(
        public content: Element,
        public tabInstance: StcTab
    ) { }
}

@Component({
    tag: 'stc-tab',
    styleUrl: 'tab.scss'
})
export class StcTab {

    @Element()
    host: HTMLElement

    @Prop()
    header: string

    @Event()
    selectEmitter: EventEmitter;

    @State()
    isSelected: boolean = false;

    @Method()
    unselect() {
        this.isSelected = false;
    }

    @Method()
    select() {
        this.isSelected = true;
    }

    onClick() {
        const event = new SelectedTabEvent(this.getContent(), this);
        this.selectEmitter.emit(event);
    }

    getContent(): Element {
        return this.host.querySelector('.stc-tab-content');
    }

    render() {

        const classes = [
            this.isSelected ? 'stc-tab-selected' : '',
            'stc-tab'
        ].join(' ');

        return [
            <div class={classes} onClick={this.onClick.bind(this)}>
                {this.header}
            </div>,
            <div class="stc-tab-content">
                <slot />
            </div>
        ];
    }
}
