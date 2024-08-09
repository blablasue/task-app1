"use server";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
interface Task {
  id: string;
  title: string;
  description: string;
  priority: number;
  isCompleted: boolean;
  userId: string;
}
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const db = new PrismaClient();
  const taskId = params.id;
  let task: Task | null;
  try {
    task = await db.task.findFirst({
      where: {
        id: taskId,
      },
    });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
  if (!task) return NextResponse.json(null, { status: 404 });
  return NextResponse.json(task, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const db = new PrismaClient();
  const taskId = params.id;
  let response: Task;
  try {
    response = await db.task.delete({
      where: {
        id: taskId,
      },
    });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
  return NextResponse.json(response, { status: 201 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const db = new PrismaClient();
  const taskId = params.id;
  const data = await request.json();
  let response: Task;
  if (!data) return NextResponse.json(null, { status: 500 });
  try {
    response = await db.task.update({
      where: {
        id: taskId,
      },
      data: data,
    });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
  return NextResponse.json(response, { status: 201 });
}
