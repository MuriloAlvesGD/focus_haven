export const format = (s) => {
        const hour = Math.floor(s / 3600);
        const min = Math.floor((s % 3600) / 60);
        const seg = Math.floor(s % 60);
        return `${String(hour).padStart(2, "0")} : ${String(min).padStart(2, "0")} : ${String(seg).padStart(2, "0")}`;
    };
