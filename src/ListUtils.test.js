import * as ListUtils from './ListUtils';

describe('List Utilities', () => { 
    it('creates a range', () => {
        const arr = ListUtils.range(5);
        expect(arr).toEqual([0,1,2,3,4]);
    })
    it('shuffles correctly', () => {
        const arr = ListUtils.shuffle(ListUtils.range(5));
        expect(arr).not.toEqual([0,1,2,3,4]);
        expect(arr.sort()).toEqual([0,1,2,3,4]);
    });
    
    it('generates random integers', () => {
        expect(ListUtils.randomInt(5)).toBeLessThan(5);
    })

    it('picks random element', () => {
        const arr = ListUtils.range(5);
        expect(arr).toContain(ListUtils.pickRandomElement(arr));
    });
});