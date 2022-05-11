export const dateStrintToDate = function (dateString: string): Date {
    const date = dateString.split("/").map(function (str: string): number {
        return parseInt(str);
    });

    return new Date(date[2], date[1] - 1, date[0]);
};
