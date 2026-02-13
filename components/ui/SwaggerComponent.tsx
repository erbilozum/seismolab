// app/api-docs/react-swagger.tsx
"use client";

import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";
import "swagger-ui-themes/themes/3.x/theme-flattop.css";

interface ReactSwaggerProps {
    // any yerine unknown kullanarak tip güvenliğini sağlıyoruz
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
            {/* Buradaki 'as any' kütüphaneye veri paslamak için zorunlu olabilir
                ancak props seviyesinde any kullanmadığımız için ESLint hata vermez. */}
            <SwaggerUI spec={spec} />
        </div>
    );
}

export default ReactSwagger;