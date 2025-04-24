import { filterArray } from "@/utils/filterArray";
import { describe, expect, it } from "vitest";

const result = [
    {
        title: "Primary pizza"
    },
    {
        title: "primary d"
    },
]

const data = [
    {
        title: "1"
    },   
    ...result
]

describe('examples', () => {
    it('should return a filtered array', () => { expect(filterArray(data, 'title', 'Primary')).toEqual(result) } )
})
