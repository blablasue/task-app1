"use server";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest, response: NextResponse) {
  const db = new PrismaClient();
  const data = await request.json();
  let newTask: any;
  if (data.email) {
    newTask = await db.user.create({
      data: data,
    });
  } else {
    newTask = await db.task.create({
      data: data,
    });
  }
  return NextResponse.json(newTask, { status: 201 });
}

export async function GET(request: NextRequest, response: NextResponse) {
  const db = new PrismaClient();
  const tasks = await db.task.findMany({
    where: {
      user: {
        email: "b2bestwaifu@gmail.com",
      },
    },
  });
  return NextResponse.json(tasks, { status: 201 });
}
