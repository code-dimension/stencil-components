import { Component, Prop, State, Listen, PropDidChange, EventEmitter, Event } from '@stencil/core';
import { StcChipCloseEvent } from '../chip/chip';
import { generateId } from '../../util/functions';

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

    @State() state: TagState[] = [];

    @Prop() tags: Tag[] = [];

    @Prop() placeholder: string = 'Add a tag';

    @Event({ eventName: 'stc-tags-close' })
    close: EventEmitter;
    
    @PropDidChange('tags')
    tagsWillChange(newValue: Tag[]) {
        this.createState(newValue);
    }

    @Listen('stc-chip-close')
    onTagClose(event: CustomEvent) {
        const detail: StcChipCloseEvent = event.detail;
        
        const tagToRemove = this.state.find(item => item.id === detail.id);
        
        this.state = this.state.filter(item => item.id !== detail.id);

        this.close.emit(tagToRemove);
    }

    componentDidLoad() {
        this.createState(this.tags);
    }

    createState(tags: Tag[]) {
        if (!tags || !Array.isArray(tags)) {
            return;
        }

        this.state = tags.map(tag => {
            return {
                ...tag,
                ...{ id: generateId() }
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
                                <stc-chip id={item.id} image={item.image} text={item.text} closeable></stc-chip>
                            </div>
                        );
                    })
                }

                <input type="text" class="stc-tags-input" placeholder={this.placeholder} onKeyPress={this.onInput.bind(this)} />
            </div>
        );
    }
}