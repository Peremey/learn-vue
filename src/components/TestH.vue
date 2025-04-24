<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
    setup() {
        const message = 'VVV'
        return () => h('div', message)
    },
    beforeCreate() {
        console.log('bf')
    },
})
</script>