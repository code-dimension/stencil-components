import { Component, Element, Listen } from '@stencil/core';
import { IStcTabContentData, IStcTabHeaderData } from './interfaces';

interface ITabGroup {
    header: IStcTabHeaderData;
    content: IStcTabContentData;
}

@Component({
    tag: 'stc-tabs',
    styleUrl: 'tabs.scss'
})
export class StcTabs {

    tabsHeader: IStcTabHeaderData[];
    tabsContent: IStcTabContentData[];
    tabGroup: ITabGroup[];

    @Element() host: HTMLElement;

    componentDidLoad() {
        this.createGroup();

        const [group] = this.tabGroup;
        this.selectGroup(group);
    }

    @Listen('onSelect')
    onSelectedTab(event: CustomEvent) {
        const group = this.tabGroup.find(group => group.header.id === event.detail.id);
        this.selectGroup(group);    
    }

    createGroup() {
        const tabsHeaderEl = Array.from(this.host.querySelectorAll('stc-tab-header')) as any[];
        this.tabsHeader = tabsHeaderEl.map(el => el.getChild());

        const tabsContentEl = Array.from(this.host.querySelectorAll('stc-tab-content')) as any[];
        this.tabsContent = tabsContentEl.map(el => el.getChild());

        this.tabGroup = this.tabsHeader.map(header => {
            const content = this.tabsContent.find(content => content.name === header.name);

            return {
                header: header,
                content: content
            }
        });
    }

    selectGroup(group: ITabGroup) {
        this.tabGroup.forEach(_ => { 
            _.header.unselect();
            _.content.unselect();
        });

        group.header.select();
        group.content.select();
    }

    render() {
        return [
            <div class="stc-tabs-header">
                <slot name="header" />
            </div>,
            <div class="stc-tabs-content"> 
                <slot name="content" />
            </div>
        ];
    }
}
