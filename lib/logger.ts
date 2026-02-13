import pino from "pino";

const isDev = process.env.NODE_ENV !== "production";

const logger = pino({
    level: isDev ? "debug" : "info",
    browser: {
        asObject: true,
        write: (o: any) => {
            if (isDev) {
                const time = new Date().toLocaleTimeString();
                const label = o.level <= 20 ? "DEBUG" : "INFO";

                console.log(
                    `[${time}] ${label}:`,
                    o.msg || "",
                    o.err || "",
                    o.ip || ""
                );
            }
        }
    },
    transport: typeof window === "undefined" && isDev
        ? {
            target: "pino-pretty",
            options: {
                colorize: true,
                translateTime: "HH:MM:ss",
                ignore: "pid,hostname",
            },
        }
        : undefined,
});

export default logger;