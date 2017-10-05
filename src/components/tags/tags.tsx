import { Component, Prop, State, Listen } from '@stencil/core';

interface Tag {
    text: string;
}

@Component({
    tag: 'stc-tags',
    styleUrl: 'tags.scss'
})
export class StcTagsComponent {

    @State() state: Tag[] = [];

    @Prop() tags: Tag[];

    @Listen('close')
    onTagClose() { }

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
        return (
            <div class="stc-tags">
                {
                    this.state.map(item => {
                        return (
                            <div class="stc-tag">
                                <stc-chip text={item.text} closeable></stc-chip>
                            </div>
                        );
                    })
                }

                <input type="text" placeholder="Texxttt" onKeyPress={this.onInput.bind(this)} />
            </div>
        );
    }
}