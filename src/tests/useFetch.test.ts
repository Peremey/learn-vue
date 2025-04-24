import { useFetch, type FetchResponse } from '@/composables/useFetch';
import { flushPromises } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createApp, type App } from 'vue'
function withSetup(composable: () => FetchResponse<unknown>) : [FetchResponse<unknown>, App<Element>] {

    let result;
    const app = createApp({
        setup() {
            result = composable()
            return () => {}
        }
    })

    app.mount(document.createElement("div"))
    return [result!, app ]
}

describe('useFetch', () => {
    const fetchSpy = vi.spyOn(global, 'fetch')
    beforeEach(() => {
        fetchSpy.mockClear()
    })

    it('should fetch data from the given url', async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ data: 'test' }),
        } as Response)
        
        const [result, app] = withSetup(() => useFetch('test url'))
        await flushPromises();
        expect(result?.data.value).toEqual({ data: 'test'})
        expect(fetchSpy).toHaveBeenCalledWith('test url')
        app.unmount()
    })

    it('should change loading value', async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ data: 'test' }),
        } as Response)
        
        const [result, app] = withSetup(() => useFetch('test url'))
        expect(result?.loading.value).toBe(true)
        await flushPromises();
        expect(result?.loading.value).toBe(false)
        app.unmount()
    })

    it('should change error value', async () => {
        fetchSpy.mockRejectedValueOnce(new Error('test error'))
        
        const [result, app] = withSetup(() => useFetch('test url'))
        expect(result.error.value).toBe(null)
        await flushPromises();
        expect(result.error.value).toEqual(new Error('test error'))
        app.unmount()
    })
})