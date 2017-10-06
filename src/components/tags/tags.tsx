import { Component, Prop, State, Listen } from '@stencil/core';
import { parseToJS } from '../../util/functions';

interface Tag {
    text: string;
}

@Component({
    tag: 'stc-tags',
    styleUrl: 'tags.scss'
})
export class StcTagsComponent {

    @State() state: Tag[] = [];

    @Prop()
    tags: Tag[];

    @Prop() placeholder: string = 'Add a tag';

    @Listen('stc-chip-close')
    onTagClose() { }

    componentWillLoad() {
        const tags = parseToJS(this.tags);
        this.state = tags;
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
        this.state = [...this.state, { text: text }];
    }

    render() {

        const classes = {
            'stc-tags': true,
            'stc-tags--no-tag': !this.state.length
        };

        return (
            <div class={classes}>
                {
                    this.state.map(item => {
                        return (
                            <div class="stc-tag">
                                <stc-chip text={item.text} closeable></stc-chip>
                            </div>
                        );
                    })
                }

                <input type="text" class="stc-tags-input" placeholder={this.placeholder} onKeyPress={this.onInput.bind(this)} />
            </div>
        );
    }
}