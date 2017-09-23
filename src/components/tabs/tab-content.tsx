import {
    Component, Prop, Method,
    State
} from '@stencil/core';

import { IStcTabContentData } from './interfaces';

@Component({
    tag: 'stc-tab-content'
})
export class StcTabContent {

    @Prop()
    column: string;

    @State()
    isSelected: boolean = false;

    @Method()
    getChild(): IStcTabContentData {
        return {
            select: this.select.bind(this),
            unselect: this.unselect.bind(this),
            column: this.column
        }
    }

    unselect() {
        this.isSelected = false;
    }

    select() {
        this.isSelected = true;
    }

    render() {
        const classes = [
            'stc-tab-content',
            this.isSelected ? 'stc-tab-content-selected' : ''
        ].join(' ');    
        
        return (
            <div class={ classes }>
                <slot />
            </div>
        );
    }
}