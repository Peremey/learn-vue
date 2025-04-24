import { shallowMount } from '@vue/test-utils'
import AlertCustom from '@/components/AlertCustom.vue'
import { describe, expect, it } from 'vitest'

describe('AlertCustom', () => {
    it('should render AlertCustom', () => {
        const wrapper = shallowMount(AlertCustom, {
            props: {
                isOpen: true,
                text: 'Test Alert'
            }
        })
        expect(wrapper.find('.alert__text').text()).toBe('Test Alert')
    })

    it('should button click AlertCustom', () => {
        const wrapper = shallowMount(AlertCustom, {
            props: {
                isOpen: true,
                text: 'Test Alert'
            }
        })
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.emitted()['update:isOpen']).toBeTruthy()
        expect(wrapper.emitted()['update:isOpen'][0]).toEqual([false])
    })
})