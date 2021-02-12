const Utils = {
    getRandomArrayElements<T>(arr: T[], count: number): T[] {
        const max = Math.min(arr.length, count);
        const taken: T[] = [];

        while (taken.length !== max) {
            const index = Math.floor(Math.random() * arr.length);
            if (taken.indexOf(arr[index]) === -1) {
                taken.push(arr[index]);
            }
        }

        return taken;
    },
};

export default Utils;
