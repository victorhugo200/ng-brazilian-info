export function paginate(page: number, list: any[], pageSize = 10) {
    return list.slice((page - 1) * pageSize, page * pageSize);
}

export function paginateHasItems(page: number, list: any[]) {
    return !!paginate(page, list).length;
}