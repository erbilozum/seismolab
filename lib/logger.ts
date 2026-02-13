import pino from "pino";

const isDev = process.env.NODE_ENV !== "production";

const logger = pino({
    level: isDev ? "debug" : "info",
    // Tarayıcı (Client Side) ayarları
    browser: {
        asObject: true,
        // o: log objesi, level: log seviyesi (opsiyonel)
        write: (o: any) => {
            if (isDev) {
                // Geliştirme modunda konsola güzelce yazdır
                const time = new Date().toLocaleTimeString();
                // o.level sayısal değerdir (30: info, 20: debug vb.)
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
    // Sunucu tarafı (Node.js) ayarları
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