"use server";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(request: NextRequest, response: NextResponse) {
  const db = new PrismaClient();
  const id = request.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json(null, { status: 405 });
  const tasks = await db.task.findMany({
    where: {
      user: {
        id: id,
      },
    },
  });
  return NextResponse.json(tasks, { status: 201 });
}
