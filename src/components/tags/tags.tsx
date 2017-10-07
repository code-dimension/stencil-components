import { Component, Prop, State, Listen, Element } from '@stencil/core';
import { StcChip, StcChipCloseEvent } from '../chip/chip';

interface Tag {
    text: string;
    image?: string;
}

interface TagState extends Tag {
    id: string;
}

@Component({
    tag: 'stc-tags',
    styleUrl: 'tags.scss'
})
export class StcTagsComponent {

    private chips: StcChip[];

    @Element() host: HTMLElement;

    @State() state: TagState[] = [];

    @Prop() tags: Tag[] = [];

    @Prop() placeholder: string = 'Add a tag';

    // @PropDidChange('tags')
    // tagsWillChange(newValue: Tag[]) {
    //     this.createState(newValue);
    // }

    @Listen('stc-chip-close')
    onTagClose(event: CustomEvent) {
        debugger
        const detail: StcChipCloseEvent = event.detail;
        this.state = this.state.filter(item => item.id !== detail.id);
    }

    componentDidLoad() {
        this.createState(this.tags);
    }

    componentDidUpdate() {
        this.createState(this.tags);
    }

    // Has a bug related the state
    createState(tags: Tag[]) {
        if (!tags || !Array.isArray(tags)) {
            return;
        }

        const chips = this.chips = this.host.querySelectorAll('stc-chip') as any;

        this.state = Array.from(chips)
            .map((chip: StcChip) => chip.getId())
            .map((chipId, index) => {
                return {
                    ...tags[index],
                    ...{ id: chipId }
                };
            });
            
    }

    onInput(event) {
        if (event.keyCode !== 13) {
            return;
        }

        const input = event.currentTarget as HTMLInputElement;
        const value = input.value;

        if (!value) {
            return;
        }

        this.addTag(value);

        input.value = '';
    }

    addTag(text: string) {
        this.createState([...this.state, { text: text }]);
    }

    render() {

        return (
            <div class="stc-tags">
                {
                    this.state.map(item => {
                        return (
                            <div class="stc-tag">
                                <stc-chip image={item.image} text={item.text} closeable></stc-chip>
                            </div>
                        );
                    })
                }

                <input type="text" class="stc-tags-input" placeholder={this.placeholder} onKeyPress={this.onInput.bind(this)} />
            </div>
        );
    }
}