import { Component, Element, Listen } from '@stencil/core';
import { SelectedTabEvent, StcTab } from './tab';

@Component({
    tag: 'stc-tabs',
    styleUrl: 'tabs.scss'
})
export class StcTabs {

    tabs: any[];

    @Element() host: HTMLElement;

    componentDidLoad() {
        this.tabs = Array.from(this.host.querySelectorAll('stc-tab')) as any[];
    }

    @Listen('selectEmitter')
    onSelectedTab(event: SelectedTabEvent) {
        this.tabs.forEach(tab => tab.unselect())
        event.tabInstance.select();

        this.setContent(event.content);
    }

    setContent(tabContent: Element) {
        const content = this.host.querySelector('.stc-tabs-content');

        Array.from(tabContent.children).forEach(child => {
            content.appendChild(child);
        });
    }

    render() {
        return (
            <div class="stc-tabs">
                <slot />

                <div class="stc-tabs-content"></div>
            </div>
        );
    }
}
