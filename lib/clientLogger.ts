import pino from "pino";

const isDev = process.env.NODE_ENV !== "production";

const consoleMap: Record<string, (...args: any[]) => void> = {
    trace: console.debug,
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error,
    fatal: console.error, // console.fatal yok, error kullanıyoruz
};

const clientLogger = pino({
    browser: {
        asObject: true,
        transmit: {
            level: isDev ? "debug" : "info",
            send(level, logEvent) {
                const fn = consoleMap[level] || console.log;
                fn("[PINO]", logEvent);
            },
        },
    },
});

export default clientLogger;
