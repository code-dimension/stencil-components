import {
    Component, Prop, Method,
    State
} from '@stencil/core';

import { IStcTabContentData } from './interfaces';

@Component({
    tag: 'stc-tab-content',
    styleUrl: 'tab-content.scss'
})
export class StcTabContent {

    @Prop()
    name: string;

    @State()
    isSelected: boolean = false;

    @Method()
    getChild(): IStcTabContentData {
        return {
            select: this.select.bind(this),
            unselect: this.unselect.bind(this),
            name: this.name
        }
    }

    unselect() {
        this.isSelected = false;
    }

    select() {
        this.isSelected = true;
    }

    render() {

        const classes = {
            'stc-tab-content': true,
            'stc-tab-content-selected': this.isSelected
        }
            
        return (
            <div class={classes}>
                <slot />
            </div>
        );
    }
}