"use client";

import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";
import "swagger-ui-themes/themes/3.x/theme-flattop.css";

interface ReactSwaggerProps {
    spec: Record<string, unknown>;
}

const SwaggerUI = dynamic(() => import("swagger-ui-react"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center p-10">
            <p className="animate-pulse font-medium">Swagger yükleniyor...</p>
        </div>
    ),
});

function ReactSwagger({ spec }: ReactSwaggerProps) {
    return (
        <div className="swagger-theme-wrapper">
            <SwaggerUI spec={spec} />
        </div>
    );
}

export default ReactSwagger;