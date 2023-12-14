import { Router } from "express";

export interface Controller {
    path: string|string[],
    router: Router,
    defineRoutes: () => void
    afterCreate?: () => void
}