import { describe, expect, it } from 'vitest';
import { titleMatchesSearch } from './search';

describe('titleMatchesSearch', () => {
    it.each([
        ['Code Quest', 'code', true],
        ['Code Quest', 'QUEST', true],
        ['Code Quest', 'quest 2', false],
        ['Code Quest', '  code  ', true],
        ['Code Quest', '', true],
        ['Code Quest', '   ', true],
    ])('matches "%s" against "%s" as %s', (title, query, expected) => {
        expect(titleMatchesSearch(title, query)).toBe(expected);
    });
});
