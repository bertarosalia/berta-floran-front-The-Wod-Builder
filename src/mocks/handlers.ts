import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

const exercise = {
  body: "",
  name: "",
  description: "",
  image: "",
  id: "125",
};

export const handlers = [
  rest.get(`${apiUrl}exercises`, async (req, res, ctx) => {
    return res.once(ctx.status(400));
  }),

  rest.get(`${apiUrl}exercises`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.delete(`${apiUrl}exercises/125`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.delete(`${apiUrl}exercises/125`, async (req, res, ctx) => {
    return res(ctx.status(400));
  }),

  rest.post(`${apiUrl}exercises/create`, async (req, res, ctx) => {
    const request: any = await req;
    const bodyData: string = await request._body.get("body");
    const status = bodyData === "" ? 400 : 201;
    return res(ctx.status(status), ctx.json({ exercises: exercise }));
  }),

  rest.get(`${apiUrl}exercises/correctId`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ exercise: "exercise" }));
  }),

  rest.get(`${apiUrl}exercises/errorId`, async (req, res, ctx) => {
    return res(ctx.status(400), ctx.json({ exercise: "error" }));
  }),
];
