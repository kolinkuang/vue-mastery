import {h} from 'vue'

const Stack = {
    render() {
        const slot = this.$slots.default
            ? this.$slots.default()
            : []

        return h('div', {class: 'stack'}, slot.map(child => {
            return h('div', {class: `mt-${this.$props.size}`}, {
                child
            })
        }))
    }
}

// <Stack size="4">
//     <div>hello</div>
//     <Stack size="4">
//         <div>hello</div>
//         <div>hello</div>
//     </Stack>
// </Stack>

// <div className="stack">
//     <div className="mt-4">
//         <div>hello</div>
//     </div>
//     <div className="mt-4">
//         <div className="stack">
//             <div className="mt-4">
//                 <div>hello</div>
//             </div>
//         </div>
//     </div>
// </div>