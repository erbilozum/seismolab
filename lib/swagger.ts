// lib/swagger.ts
import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
    const spec = createSwaggerSpec({
        apiFolder: 'app/api', // API rotalarının olduğu klasör
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Turkey Earthquake Stats API',
                version: '1.0.0',
                description: 'Visualizing earthquake damage data in Turkey',
            },
            tags:[
                { name: 'Earthquake', description: 'Detailed structural damage analytics and geospatial data following the February 6, 2023 Kahramanmaraş earthquakes.' }            ],
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: 'http',
                        scheme: 'bearer',
                        bearerFormat: 'JWT',
                    },
                },
            },
            security: [],
        },
    });
    return spec;
};