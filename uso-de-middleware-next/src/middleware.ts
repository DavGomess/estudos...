import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
    console.log('MIDDLEWARE EXECUTADO')
    console.log(req)
}