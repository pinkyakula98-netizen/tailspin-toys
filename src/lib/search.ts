/**
 * Determines whether a game title matches the catalog search query.
 *
 * @param title The game title to compare.
 * @param query The user-entered search query.
 * @returns Whether the title contains the query, ignoring case and surrounding whitespace.
 */
export function titleMatchesSearch(title: string, query: string): boolean {
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery.length === 0) {
        return true;
    }

    return title.toLowerCase().includes(normalizedQuery);
}
