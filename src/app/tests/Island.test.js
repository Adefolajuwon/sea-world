import useIslandCounter from "../hooks/useIslandHook";
describe('useIslandCounter', () => {
    it('should return 0 for an empty grid', () => {
        const grid = [];
        const result = useIslandCounter(grid);
        expect(result).toBe(0); // Expecting 0 islands
    });

    it('should return 1 for a grid with a single island', () => {
        const grid = [
            [true]
        ];
        const result = useIslandCounter(grid);
        expect(result).toBe(1); // Expecting 1 island
    });


    it('should return 0 for a grid filled with water', () => {
        const grid = [
            [false, false, false],
            [false, false, false],
            [false, false, false], // No islands
        ];
        const result = useIslandCounter(grid);
        expect(result).toBe(0); // Expecting 0 islands
    });

});
