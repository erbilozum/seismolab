/**
 * @swagger
 * /api/earthquake:
 *   get:
 *     tags:
 *       - Earthquake
 *     summary: Returns the list of cities with earthquake damage statistics
 *     description: Retrieves cities affected by earthquakes along with their coordinates and total collapsed buildings.
 *     responses:
 *       200:
 *         description: A list of cities with earthquake damage info
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "İzmir"
 *                   coords:
 *                     type: array
 *                     items:
 *                       type: number
 *                     example: [38.4192, 27.1287]
 *                   totalCollapsed:
 *                     type: integer
 *                     example: 152
 */

import { NextResponse } from 'next/server';
import { CITY_DATA } from '@/data/earthquake';
import logger from "@/lib/logger"; // Logger'ı içe aktar


export async function GET(request: Request) {
    // İsteğin geldiği IP'yi veya diğer detayları loglamak istersen:
    const { method, url } = request;

    try {
        // Başarılı istek günlüğü
        logger.info({ msg: "Seismic data fetched successfully", method, url });

        return NextResponse.json(CITY_DATA);
    } catch (error: any) {
        // Hata loglama: Hatayı tüm detayıyla (err) ve mesajıyla kaydeder
        logger.error({
            msg: "Failed to load earthquake data",
            err: error.message,
            method,
            url
        });

        // Kullanıcıya teknik detayı sızdırmadan temiz bir hata dönüyoruz
        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
                detail: "Veri yüklenemedi. Lütfen daha sonra tekrar deneyiniz."
            },
            { status: 500 }
        );
    }
}