import { useCounter } from "@/composables/useCounter";
import { describe, expect, it } from "vitest";

describe('useCounter', () => {
    const sCounter = useCounter();

    it('double count', () => {     
        sCounter.count.value = 2
        expect(sCounter.doubleCount.value).toEqual(4)
    })

    it('increment', () => {
        sCounter.count.value = 2
        sCounter.increment()
        expect(sCounter.count.value).toEqual(3)
    })
})