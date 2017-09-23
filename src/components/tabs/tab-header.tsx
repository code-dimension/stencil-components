import {
    Component, Prop, Method, Event, EventEmitter, State
} from '@stencil/core';

import { IStcTabHeaderData } from './interfaces';
import { generateId } from './functions';

@Component({
    tag: 'stc-tab-header',
    styleUrl: 'tab-header.scss'
})
export class StcTabHeader {

    id: string = generateId()

    @Prop()
    column: string;

    @Event()
    onSelect: EventEmitter;

    @State()
    isSelected: boolean = false;

    @Method()
    getChild(): IStcTabHeaderData {
        return {
            select: this.select.bind(this),
            unselect: this.unselect.bind(this),
            column: this.column,
            id: this.id
        }
    }

    unselect() {
        this.isSelected = false;
    }

    select() {
        this.isSelected = true;
    }

    onClick() {
        this.onSelect.emit(this.getChild());
    }

    render() {

        const classes = [
            this.isSelected ? 'stc-tab-selected' : '',
            'stc-tab'
        ].join(' ');

        return [
            <div class={classes} onClick={this.onClick.bind(this)}>
                <slot />
            </div>,
        ];
    }
}
