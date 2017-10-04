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

    id: string = generateId();

    @Prop()
    name: string;

    @Event()
    onSelect: EventEmitter;

    @State()
    isSelected: boolean = false;

    @Method()
    getChild(): IStcTabHeaderData {
        return {
            select: this.select.bind(this),
            unselect: this.unselect.bind(this),
            name: this.name,
            id: this.id
        };
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

        const classes = {
            'stc-tab-header': true,
            'stc-tab-header-selected': this.isSelected 
        };

        return [
            <div class={classes} onClick={this.onClick.bind(this)}>
                <slot />
            </div>,
        ];
    }
}
