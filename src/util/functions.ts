export function parseToJS(value: any): any {
    return new Function(`return ${value}`)();
}