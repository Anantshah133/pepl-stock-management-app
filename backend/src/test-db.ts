import "dotenv/config";
import prisma from "./config/prisma.js";

async function testDatabase() {
    try {
        await prisma.$connect();
        console.log("✅ Database connected successfully!");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
    } finally {
        await prisma.$disconnect();
    }
}

testDatabase();