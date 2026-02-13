import pino from "pino";

const isDev = process.env.NODE_ENV !== "production";

const logger = pino({
    level: isDev ? "debug" : "info",
    // Tarayıcı ayarları
    browser: {
        asObject: true,
        // İstemci tarafında pino-pretty yerine standart konsolu kullanması için
        write: (o) => {
            if (isDev) {
                // Geliştirme modunda konsola güzelce yazdır
                const time = new Date().toLocaleTimeString();
                console.log(`[${time}] ${level}:`, o.msg || "", o.err || "", o.ip || "");
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